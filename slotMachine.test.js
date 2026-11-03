import { test } from "node:test";
import assert from "node:assert";
import { slotMachine } from "./slotMachine.js";

 function validateTwoFirstSymbols() {
    //init
    const bet = 5;
    const result = ['+', '+', '%'];

    //exec
    

    //assert
    assert.equal(slotMachine(bet, result),10);
}

test("change name", function () {
    assert.equal(1, 1);
});

test("validate two first symbols", validateTwoFirstSymbols);
