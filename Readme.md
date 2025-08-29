6. Answer the following questions clearly:

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
Answer: 
getElementById -> can access a single element of a unique id, used to read or edit an HTML element.

getElementsByClassName ->can access can access all the elements of  a single  class , returns html Collections  

querySelector -> can access first element that matches a CSS selector,returns a single element

querySelectorAll ->used to return all matches (not only the first) a of CSS selector, returns a nodeList 

2.How do you create and insert a new element into the DOM?

Answer:  I create and insert a new element into the DOM  in 3 steps .such that -
 
    1.Creating a new element using createElement() : By  giving the tag name of the type element we want to  create as string.
    example :     const newElement1 = document.createElement("h3");
    example :     const newElement2 = document.createElement("p");
 
    2. Adding the value od content of the element  using innerText() or innerHTML() : Inserting the value of the element using innerText() and the html code using the innerHTML() .

    example :   newElement1.innerText = " Hello World";
    example :   newElement2.innerHTML = "I am a <b>web developer</b> ";

    3.Inserting the element in to the DOM (or website) using appendChild() :  connect the new element to the DOM .

     example : document.body.appendChild(newElement1); 

     example : document.getElementById("detail").appendChild(newElement2);
             

3.What is Event Bubbling and how does it work?
 
 Answer:Event bubbling is an event .If we click on a small part inside a element of a section , this click event is first handled by the small part and then by its parent elements , then "bubble up" to the page itself. 

   Its working process: 
    1. Event (like click etc ) happens on an element : 
    when we click on a specific child element , like a <p>I am a web developer</p>
    Example : If we click on the <p> I am a web developer </p>  tag element.

    2. The event (click) bubbles up :  this click action moves up from the clicked <p> I am a web developer </p> its parent , then to the next parent till it reaches the top of the page ;

    3. parent Element Reacts :  Any parent that has  a listener for that event will react as the event bubbles up.


      

4.What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
Event Delegation is  useful because its a  pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.



5.What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
preventDefault() -> Prevent the default action of browsers taking on that event.
stopPropagation()->Prevent further propagation of current events by parent or child elements.


