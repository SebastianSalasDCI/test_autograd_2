
const rewire = require("rewire")
const solution = rewire("../solution.js")

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe('Objects Part 1', () => {
  test("1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.", () => {
    const sol = require('../solution')
    const person = solution.__get__("person");
    for(prop in person){
      if(prop !== "printValues"){
        expect(consoleSpy).toHaveBeenCalledWith(`person.${prop} : ${person[prop]}`)
      }
    }
  });
  test("2. Get Values. Create a function that returns an array of all values of an object's properties.", () => {
    const testObj = {a:"a",b:"b",c:"c"};
    const getValues = solution.__get__("getValues")
    expect(getValues(testObj)).toEqual(Object.values(testObj));
  });
  test("3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.", () => {
    const sol = require('../solution')
    const person = solution.__get__("person");
    expect(consoleSpy).toHaveBeenCalledWith(`${person.name} is a citizen of ${person.citizenship}. They are ${person.gender}, ${person.height}cm tall and have ${person['eye colour']} eyes.`);
  });
  test("4. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.", () => {
    const testObj = {a:"a",b:"b",c:"c"};
    const getKeyValuePairs = solution.__get__("getKeyValuePairs")
    expect(getKeyValuePairs(testObj)).toEqual(Object.entries(testObj));
  });
  test("5. List Properties. Create a function that returns an array of properties of a javascript object.", ()=>{
    const testObj = {a:"a",b:"b",c:"c"};
    const getProperties = solution.__get__("getProperties")
    expect(getProperties(testObj)).toEqual(Object.keys(testObj));
  });
  test("6. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.", ()=>{
    const testObj1 = {a:"a",b:"b",c:"c"};
    const testObj2 = {d:"d",e:"e",f:"f"};
    const mergeObjects = solution.__get__("mergeObjects")
    expect(mergeObjects(testObj1,testObj2)).toEqual({...testObj1,...testObj2});
  });
})
