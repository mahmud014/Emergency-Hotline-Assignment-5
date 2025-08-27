1. What is the difference between getElementById, getElementByClassName and querySelector/querySelectorAll?

Ans:getElementById
-> "getElementById" is a unique element. Only one element can be found using it.
-> It just returns a DOM element.
-> document.getElementById("anyThing");

getElementByClassName
-> It can select multiple elements of the same class name.
-> It returns an array-like object.
-> document.getElementByClassName("anyClass");

querySelector/querySelectorAll
-> "querySelector" selects the first element on the Selector.
-> "querySelectorAll" selects the all elements on the Selector. This also works like an array.

2. How do you create and insert a new element into the DOM?
   Ans:
   We will create a new DOM element using document.createElement("div"). We can place various types of elements, HTML, text, and images in this div.

3. What is Event Bubbling and how does it work?
   Ans:
   An event bubble is a bubble that flows from a DOM element's child element to its parent element. It works from bottom to top.

4. What is Event Delegation in JavaScript? Why is it useful?
   Ans:
   Event delegation is a way to add event listeners in JavaScript. It allows multiple child elements to be assigned event listeners at once, eliminating the need to add event listeners separately. If an event listener is assigned to a parent element, the listener also handles events on the child elements inside that element.
   This works because of event bubbling: when an event listener on a child element is triggered, the event reaches the parent, where it can "catch" it.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans: preventDefault()-
   When an event listener is added to a form, the page reloads by default. To prevent this automatic reload, the preventDefault() method is used.

   stopPropagation():-
   When multiple events are added to the DOM, stopPropagation() is used to prevent this event from bubbling up. That is, where stopPropagation() is used. Only that event will be seen. Events above it will no longer work.
