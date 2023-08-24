
import Accordion from './components/Accordion';

const faqs = [
  {
    title: "What are classes in ES6?",
    text:
      "In Es6, Javascript classes are primarily syntactic sugar over Javascript's existing prototype-based inheritance."
  },
  {
    title: "What are closures?",
    text:
      "A closures is the combination of a function and its lexical environment within which that function was declared i.e it is an inner function that has access to the outer or enclosing function's variables."
  },
  {
    title: "What are modules?",
    text:
      "Modules are individual JavaScript files containing code that pertain to a single concept, functionality, or library."
  },
  {
    title: "What are the benefits of modules or why do we need modules?",
    text:
      "-Maintainability -Reusability -NameSpacing"
  },
  {
    title: "What is memoization?",
    text:
      "Memoization is a programming technique which attempts to increase a function's performance by caching its previosly computed results. Each time a memoized function is called, it parameters are used to index the cache, if the data is present then it can be returned, without executing the entire function, otherwise the function is executed and then the result is added to the cache."
  },
  {
    title: "What is Hoisting?",
    text:
      "Hoisting is a Javascript mechanism where variables, function declaration and classes are moved to the top of their scope before code execution."
  },
  {
    title: "What is the difference between call, apply and bind?",
    text:
      "The call() method invokes a function with a given this value and arguments provided one by one. The Apply() method invokes a function with a given this value with arguments as an array. While bind() returns a new function allowing you to pass any number of arguments."
  },
  {
    title: "What is a unary function?",
    text:
      "Unary functions are functions that accept only one arguments."
  },
  {
    title: "What is the currying function?",
    text:
      "currying is a process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument."
  },
  {
    title: "What is a higher order function?",
    text:
      "Higher order functions are functions that take another function as an argument or return a function as its return value or both."
  },
  {
    title: "What is first class function?",
    text:
      "In javascript First class function are treated as other variable - a function can be passed as an argument to other functions - can be returned by another function - can be assigned as a value to a variable."
  },
  {
    title: "What is IIFE?",
    text:
      "IIFE (immediately invoked function expression), these are functions that runs as soon as they are defined."
  },
  {
    title: "What are first order functions?",
    text:
      "First order functions are functions that do not accept another function as arguments nor do they return a function as its return value."
  },
  {
    title: "What is a pure function?",
    text:
      "A pure function is a function that given the same input will always return the same output without creating side effects."
  },
  {
    title: "What is indexedDB?",
    text:
      "IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data."
  },
  {
    title: "What is the use of refs in React?",
    text:
      "The ref is used to return a reference to the element. They can be useful when you need a direct access to the DOM element or an instance of a component"
  }
];

function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  )
}

export default App
