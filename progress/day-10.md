# Day 10

JavaScript is the most widely used programming language on Earth. Because it is the only default official programming language of the web, that can run in all major web browsers. Therefore it has the largest ecosystem until today.

The official standard name of JavaScript is ECMAScript defined under Standard ECMA-262. ECMAScript is the official standard specification, not the actual programming language. Because of the popular version mentions, sometimes people called it ECMAScript, ES6, or modern JavaScript. The difference is that some of the modern features (like what specified in ES6 or above) are only available on modern or latest updated browsers.

### Browser

- As a frontend or client-side application.
- Connect and manipulate HTML and CSS.
- Perform interactivity to the web page.
- Give event feedback when there is a UI action.
- Have to be aware of the user's browsers capability and features availability, application lives in client-side.
- Supported by all web browsers.

### Non Browser

- As a backend or server-side application.
- Perform data processing to the client-side application.
- Give a response when there is a request from the client-side.
- Connect and manipulate database management system (DBMS).
- Don't have to worry about the user's browsers, application lives on the server-side.
- High-level programming language, easy to understand in English.
- Scripted or interpreted, not compiled. You can just run JavaScript directly in the browser or console, without having to install anything else.
- Dynamic typing, you cannot force the data type to be consistent yet.

### Modern Syntax

```
const animal = "Cat";

const runOutside = () => {
// local constiables
const animal1 = "Dog";
const animal2 = "Bird";
const animal3 = "Fish";

function runInside() {
let animal4 = "Monkey";
animal4 = "Penguin";
}

runInside();

return animal;
};

runOutside();
```

### Typescript

**Interface** is struct or structure data

### Dev Tools

Using Chrome Dev Tools.

Some variety of consoles are to ease the communication between developers.
console.log
console.info
console.error
console.warn
console.table

### Embed in HTML

```
<!-- index.html -->
<script>
  // JavaScript code here
  alert("Hello JavaScript on Alert");
  console.log("Hello JavaScript on Console");
</script>
```

### Javascript Variable Name

- The name must contain only letters, numbers/digits, or the symbols $and \_.
- The first character must not be a number/digit.
- There cannot be a space in the variable name.

### Reserve Name

There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
For example: let, class, return, and function are reserved.

### Name things right

- Use human-readable names like userName or shoppingCart.
- Stay away from abbreviations or short names like a, b, c, foo, bar, baz, test unless you know what you’re doing.
- Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context - of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your mind. If a site visitor is called a "user" then we should name related variables currentUser or newUser instead of currentVisitor or newMember.

### Debugging

#### Key steps:

- Identification: Recognize that an error has occurred, often via failed tests or error messages.
- Isolation: Pinpoint the specific part of the code or system causing the problem.
- Analysis: Understand why the problem occurred by analyzing the code and conditions.
- Resolution: Correct the code or configuration to fix the error.
- Verification: Test to ensure the fix works and doesn’t create new issues.
- Documentation: Record what was wrong, how it was fixed, and any changes made.

#### Common techniques:

- Print Statements: Output variable values and program states.
- Logging: Record detailed information about program execution.
- Breakpoints: Pause execution at specific points to inspect program state.
- Step Through Code: Use an IDE to execute code line by line.
- Unit Testing: Test individual units of code.
- Static Analysis: Analyze code for errors without running it.
