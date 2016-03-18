'use strict';

const fs = require('fs');
const esprima = require('esprima');
const escodegen = require('escodegen');

/**
 * The main thing.
 * @param {Object|String} opts Code transformation configuration options or a source file.
 * @param {String} [opts.src] The source JS file.
 * @param {String} [opts.dest] The destination file to write.
 * @return {String} The transformed src with DOM references protected.
 */
function generate(opts) {

  // The opts argument can either be an object containing configuration options
  // to fine-tune your transformation or a string reference to a file. The latter
  // acts as a simple pass-through: file in, source string out.
  let src = typeof opts === 'string' ? opts : opts.src;
  if (!src) {
    console.error('You must provide a source file!');
    return;
  }

  // String inputs are assumed to be file paths to read.
  // Other types will be assigned as-is (assuming raw files passed through a build tool).
  let raw = typeof src === 'string' ? fs.readFileSync(src) : src;
  let ast = parseSource(raw);
  let updatedAst = magic(ast);
  let code = escodegen.generate(ast);

  let dest = opts.dest;
  if (dest) {
    fs.writeFile(dest, code, (err) => {
      if (err) {
        console.error(err);
      }
      else {
        console.log(`${dest} written to disk`);
      }
    });
  }

  return code;
}

function parseSource(source) {
  return esprima.parse(source, { tokens: true, loc: true });
}

// Get all tokens that have the value 'window' (for now ... could filter by other values too).
function filterDOMTokens(ast) {
  return ast.tokens.filter(token => token.value === 'window');
}

function getLineNumbers(nodes) {
  return nodes.map(node => node.loc.start.line);
}

// Nodes generated using wrap() will not have a line number.
// Performs a deep search.
function getNodeByLine(root, lineNumber) {
  return root.find((node) => {
    return node.loc && node.loc.start.line === lineNumber;
  });
}

function wrap(node) {
  return esprima.parse('if (typeof window !== "undefined") { ' + node + ' }');
}

// Remove references to DOM objects such as window and document so node can be happy.
// Uses magic.
// Needs to be much more robust. This falls apart pretty quickly but works for a POC.
function magic(ast) {
  var body = ast.body;
  var domTokens = filterDOMTokens(ast);
  var problemLineNumbers = getLineNumbers(domTokens);

  console.log(problemLineNumbers)

  // These indicies don't work past the first because we're modifying stuff.
  // Will need a better way to iterate and mutate.
  problemLineNumbers.forEach((lineNumber) => {
    let problemNode = getNodeByLine(body, lineNumber);
    if (problemNode) {
      let problemIndex = body.indexOf(problemNode);
      let gen = escodegen.generate(problemNode);
      body.splice(problemIndex, 1, wrap(gen));
    }
  });

  return ast;
}

// Was this instantiated from the CLI? If so, parse the given file.
if (require.main === module) {
  generate({
    src: process.argv[2],
    dest: process.argv[3]
  });
}

module.exports = generate;
