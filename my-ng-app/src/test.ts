// define the test environment set for JSDOM (headless DOM) loaded in memory with window object
// and HTML DOM in it with CSS if applied
// importing the jest-preset-angular will make sure that Angular COmponent's and its depencies will be
// strictly monitored by the jest during tests
import 'jest-preset-angular';

// defining the window object with with CSS selector to access DOM element during test
// using CSS
// this will allow the test to access DOM element from Memory to be accessible using CSS selector
Object.defineProperty(window,  'CSS', {value:null});
// creating an entry point to HTML document 
// this will be used to enter into the DOM created inmemory 
// for the component when it is loaded
Object.defineProperty(document, 'doctype', {
  value: '!<DOCTYPE html>'
});
// iterate over the DOM
// target to elements inside then body so that they can be
// used to read/write values and also dispatching events
Object.defineProperty(document.body.style, 'transform', {
  value:()=>{
    return {
      enumerable:true, // monitor any DOM changes with enumeration on it and modifying DOM updates
      configurable:true // allow the binding to execute in memory so that element will change
    }
  }
});
