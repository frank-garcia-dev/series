import { Calculate } from "@/classes/Calculate";
import { expect, test } from "vitest";

const calculate = new Calculate();

test("Should return the first 10 prime numbers", () => {
  expect(calculate.numberPrime(1)).toBe(2);
  expect(calculate.numberPrime(2)).toBe(3);
  expect(calculate.numberPrime(3)).toBe(5);
  expect(calculate.numberPrime(4)).toBe(7);
  expect(calculate.numberPrime(5)).toBe(11);
  expect(calculate.numberPrime(6)).toBe(13);
  expect(calculate.numberPrime(7)).toBe(17);
  expect(calculate.numberPrime(8)).toBe(19);
  expect(calculate.numberPrime(9)).toBe(23);
  expect(calculate.numberPrime(10)).toBe(29);
});

test("Should return the first 10 triangular numbers", () => {
  expect(calculate.numberTriangular(1)).toBe(1);
  expect(calculate.numberTriangular(2)).toBe(3);
  expect(calculate.numberTriangular(3)).toBe(6);
  expect(calculate.numberTriangular(4)).toBe(10);
  expect(calculate.numberTriangular(5)).toBe(15);
  expect(calculate.numberTriangular(6)).toBe(21);
  expect(calculate.numberTriangular(7)).toBe(28);
  expect(calculate.numberTriangular(8)).toBe(36);
  expect(calculate.numberTriangular(9)).toBe(45);
  expect(calculate.numberTriangular(10)).toBe(55);
});

test("Should return the first 10 fibonacci numbers", () => {
  expect(calculate.numberFibonacci(1)).toBe(0);
  expect(calculate.numberFibonacci(2)).toBe(1);
  expect(calculate.numberFibonacci(3)).toBe(1);
  expect(calculate.numberFibonacci(4)).toBe(2);
  expect(calculate.numberFibonacci(5)).toBe(3);
  expect(calculate.numberFibonacci(6)).toBe(5);
  expect(calculate.numberFibonacci(7)).toBe(8);
  expect(calculate.numberFibonacci(8)).toBe(13);
  expect(calculate.numberFibonacci(9)).toBe(21);
  expect(calculate.numberFibonacci(10)).toBe(34);
});

test("Should return the result of the formula", () => {
  expect(calculate.calculate(1)).toBe(-0);
  expect(calculate.calculate(2)).toBe(0);
  expect(calculate.calculate(3)).toBe(84);
  expect(calculate.calculate(4)).toBe(378);
  expect(calculate.calculate(5)).toBe(2520);
  expect(calculate.calculate(6)).toBe(8820);
  expect(calculate.calculate(7)).toBe(34650);
  expect(calculate.calculate(8)).toBe(91728);
  expect(calculate.calculate(9)).toBe(259896);
  expect(calculate.calculate(10)).toBe(603288);
});
