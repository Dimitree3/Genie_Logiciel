import { test } from "node:test";
import assert from "node:assert";
import { parse } from './parser.js';

test('la commande 0X123 est convertie en moveForward', () => {
  assert.deepEqual(parse('0X123'), ['moveForward']);
});

test('la commande 0X789 est convertie en moveBackward', () => {
  assert.deepEqual(parse('0X789'), ['moveBackward']);
});

test('la commande 0XABC est convertie en stop', () => {
  assert.deepEqual(parse('0XABC'), ['stop']);
});

test('un flux de plusieurs commandes est converti en liste de commandes', () => {
  assert.deepEqual(
    parse('0X123 0X789 0XABC'),
    ['moveForward', 'moveBackward', 'stop']
  );
});