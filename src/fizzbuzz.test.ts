import { FizzBuzz } from "./fizzbuzz.ts";
import {expect} from "@std/expect";

Deno.test("given 3 return fizz", () => {
    expect(new FizzBuzz().execute(3)).toEqual("Fizz");
});

Deno.test("given 5 return buzz", () => {
    expect(new FizzBuzz().execute(5)).toEqual("Buzz");
});

Deno.test("given 6 return fizz", () => {
    expect(new FizzBuzz().execute(6)).toEqual("Fizz");
});

Deno.test("given 1 return fizz", () => {
    expect(new FizzBuzz().execute(1)).toEqual("1");
});

Deno.test("given 10 return buzz", () => {
    expect(new FizzBuzz().execute(10)).toEqual("Buzz");
});
Deno.test("given 15 return fizzbuzz", () => {
    expect(new FizzBuzz().execute(15)).toEqual("FizzBuzz");
});
Deno.test("given 30 return fizzbuzz", () => {
    expect(new FizzBuzz().execute(30)).toEqual("FizzBuzz");
});
