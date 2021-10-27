

// function App() {
//   const name = "Alice";
//   const element = <p>Hello, {name}!</p>;

//   return element;
// }





// function App() {
//   const url = "https://www.thinkful.com/";
//   const linkText = "Visit Thinkful";
//   const element = <a href={url}>{linkText}</a>;

//   return element;
// }



// function App() {
//   const name = "Alice";
// const url = "https://www.thinkful.com/";
// const linkText = "Thinkful";
// const element = (
//   <p>
//     {" "}
//     Hey, {name}! Please visit <a href={url}>{linkText}</a>.
//   </p>
// );

// return element;
// }




//21.6 Components and props

// function WelcomeBack() {
//   return <p>Welcome back, valued customer!</p>;
// }

// function App() {
//   return (
//   <>
//     <WelcomeBack />
//     <WelcomeBack />
    
//   </>
//   )
// }




// Adding Props
// function WelcomeBack({ name = "valued customer", adjective = "nice" }) {
//   return (
//     <p>
//       Welcome back, {adjective} {name}!
//     </p>
//   );
// }

// function App() {
//   return (
//     <>
//       <WelcomeBack name="Joe" adjective="funny" />
//       <WelcomeBack name="Anna" adjective="clever" />
//       <WelcomeBack />
//     </>
//   );
// }

import "./App.css";
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
// import Footer from "./Footer";
import Greeting from "./Greeting";
import Notifications from "./Notifications";
import GroceryList from "./GroceryList";
import Todo from "./Todo";
import Quote from "./Quote";


const notifications = ["You received a package", "The weather is sunny"];
   

const groceryList = [
  { quantity: 6, item: "Bananas" },
  { quantity: 3, item: "Apples" },
  { quantity: 10, item: "Oranges" },
];

const todos = [
  { completed: false, description: "Finish the Lists & Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

const quote = {
  text:
    "I am great believer in luck, and I find the harder I work, the more I have of it.",
  author: "Thomas Jefferson",
};

// const handleClick = () => {
//   console.log("Subscribing!");
//   alert("You subscribed!");
// };

const handleClick = (e) => console.log(e.target);

function App() {
  return (
    <>
      <Header />
      <Greeting language="es" />
      <WelcomeBack name="Joe" />
      <WelcomeBack name="Anna" />
      <Quote quote={quote} />
      <Notifications notifications={notifications} />
      <GroceryList items={groceryList} />
      <Todo items={todos} />
      <button onClick={handleClick}>Subscribe</button>;

      {/* <Footer /> */}
    </>
  );
}

export default App;

