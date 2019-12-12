import { expect } from "chai";
import { Given, When, Then } from "cucumber";

Given("a calculator", function(): void {
  this.calculator = {
    divide(n1: number, n2: number): number {
      return n1 / n2;
    },
  };
});

When("I divide {int} by {int}", function(n1: number, n2: number): void {
  this.actual = this.calculator.divide(n1, n2);
});

Then("the result is {int}", function(expected: number): void {
  expect(this.actual).to.be.equal(expected);
});
