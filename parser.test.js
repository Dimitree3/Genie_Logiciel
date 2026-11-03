import { test } from "node:test";
import assert from "node:assert";
import { parse } from './parser.js';

test('la commande 0X123 est convertie en moveForward', () => {
  assert.deepEqual(parse('OX789'), ['moveBackward']);
});
