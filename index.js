'use strict';

const fs = require('fs');
const esprima = require('esprima');
const escodegen = require('escodegen');

const inDir = 'demo/in/';
const outDir = 'demo/out/';

// Generates a JS file using escodegen and writes it to /demo/out.
// Outputs the full generated source to log for instant gratification.
function generate(ast) {

  var code = escodegen.generate(ast);
  console.log(code);

  fs.writeFile(outDir + fileName, code, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(`${outDir + fileName} written to disk!`);
    }
  });
}

// Get all tokens that have the value 'window' (for now ... could filter by other values too).
function filterDOMTokens(ast) {
  return ast.tokens.filter(token => token.value === 'window');
}

function getLineNumbers(nodes) {
  return nodes.map(node => node.loc.start.line);
}

function getNodeByLine(root, lineNumber) {
  return root.find(node => node.loc.start.line === lineNumber);
}

function wrap(node) {
  return esprima.parse('if (typeof window !== "undefined") { ' + node + ' }');
}

// Remove references to DOM objects such as window and document so node can be happy.
// Uses magic.
// Needs to be much more robust. This falls apart pretty quickly but works for a POC.
function magic(ast) {
  let body = ast.body;
  let domTokens = filterDOMTokens(ast);
  let problemLineNumbers = getLineNumbers(domTokens);

  // These indicies don't work past the first because we're modifying stuff.
  // Will need a better way to iterate and mutate.
  problemLineNumbers.forEach((lineNumber) => {
    let problemNode = getNodeByLine(body, lineNumber);
    let problemIndex = body.indexOf(problemNode);
    let gen = escodegen.generate(problemNode);
    body.splice(problemIndex, 1, wrap(gen));
  });

  return ast;
}

// Get the source file (hardcoded for now).
let fileName = 'test.js';
//let fileName = 'node_modules/mediaelement/build/mediaelement-and-player.js';
let source = fs.readFileSync(inDir + fileName);

// AST-parse!
let ast = esprima.parse(source, { tokens: true, loc: true });

// Do the magic.
let updatedAst = magic(ast);

// Finally, generate the resulting ast into a real file, Pinocchio-style.
generate(updatedAst);
