const single = 'Javascript allows you to use single quotations, ';
const double = "double quotations, ";
const backtick = `and backticks when assigning strings.`;
console.log(single+double+backtick);
console.log("However, they should be used in pairs as using otherwise will throw an error in your code.");
const btplus = `Strings declared in backticks are special. They become template literal.
Aside from adding a new line of code, it is also used in embedding js in them.
It's also a good idea to use single quotations/backticks when you want to "quote something."
If you want to use single quotations but need the \' for some words like I\'m, add a backslash before the \'`;
console.log(btplus);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // Concatenation means a series of interconnected things or events, in this case, it's the strings.

