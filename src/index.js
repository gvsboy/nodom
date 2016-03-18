'use strict';

const fs = require('fs');
const esprima = require('esprima');
const escodegen = require('escodegen');

// Generates a JS file using escodegen and writes it to /demo/out.
// Outputs the full generated source to log for instant gratification.
function generate(input, output) {

  let source = fs.readFileSync(input);
  let ast = parseSource(source);
  let updatedAst = magic(ast);
  let code = escodegen.generate(ast);

  if (!output) {
    output = `${input}-nodom.js`;
  }

  // For testing!
  console.log(code);

  fs.writeFile(output, code, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(`${output} written to disk`);
    }
  });
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
let argFile = process.argv[2];
if (argFile) {
  generate(argFile, process.argv[3]);
}

module.exports = generate;
