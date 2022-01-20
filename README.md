# Objects: Part 1

Please print each of your answers to the console.

**1. Object Person.**
Create an object named person. Loop through the object and print both the property and value of the object. 

**2. Get Values.** 
Create a function that returns an array of all **values** of an object's properties. 
* Examples:
```javascript
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
```
* Expected output: 
```javascript
["tea", "coffee", "milk"] 
```

**3. Add A Method.**
Create an object and add a method to that object which prints the values of the objects in a string. 
* Example
```javascript
let person = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris"
}
```
* Example of Expected Output 
"Michael Smith is a 20 year old driver in Paris".

**4. Convert keys and values into an array.** 
Create a function that converts an object into an array of keys and values. 
* Examples:
```javascript
objectToArray({
  A: 1,
  B: 2,
  C: 3
}) 
```
* Expected output: 
```javascript
[["A", 1], ["B", 2], ["C", 3]]
```

```javascript
objectToArray({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) 
```
* Expected output: 
```javascript
[["cats", 1], ["dogs", 2], ["turtles", 4]] 
```

**5. List Properties.**
Create a function that returns an array of **properties** of a javascript object. 
* Example
```javascript
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
```
* Expected output: 
```javascript
["name", "class", "course"]
```

**6. Merge.**
Create a function that takes two objects as its parameters and merges them together into a new object. 
* Example
```javascript
let first = {firstName: "John"}
let last = {lastName: "Smith"}
```
* Expected output:
```javascript
{firstName: "John", lastName: "Smith"}
```

## Bonus Questions

**Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

**4. Switch Keys and Values.**
Create a function to get a copy of an object. The copy must switch the keys and values.
* Example: 
```javascript
let person = {
  name: "John", 
  job: "teacher"
}
```
* Expected Output: 
```javascript
{John: "name", teacher: "job"} 
```

**5. Return Keys and Values.**
Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

* Examples:
```javascript
{ a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
{key: true} ➞ [["key"], [true]]
```
[//]: # (autograding info start)
## Results
  [![Results badge](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-objects-pt1/actions)
  
  [Results Details](https://github.com/DigitalCareerInstitute/PB-objects-pt1/actions)
  
  ### Debugging your code
  > [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  There are two ways to see why tasks might not be completed:
  #### 1. Running tests locally
  - Run `npm install`
  - Run `npm test` in the terminal. You will see where your solution differs from the expected result.
  
  #### 2. Inspecting the test output on GitHub
  - Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/PB-objects-pt1/actions)
  - You will see a list of the test runs. Click on the topmost one.
  - Click on 'Autograding'
  - Expand the item 'Run DCI-EdTech/autograding-action@main'
  - Here you see all outputs from the test run
[//]: # (autograding info end)