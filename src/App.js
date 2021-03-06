

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
import Content from "./Content";
import WelcomeBack from "./WelcomeBack";
// import Footer from "./Footer";
import Greeting from "./Greeting";
import Notifications from "./Notifications";
import GroceryList from "./GroceryList";
import Todo from "./Todo";
import Quote from "./Quote";
import CoinTossCounter from "./CoinTossCounter";
import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import SubscriberForm from "./SubscriberForm";
import SubscriberView from "./SubscriberView";
import SubscriberList from "./SubscriberList";



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
  const handleSubscribe = (e) => console.log("User has been subscribed...");

  const [subscribed, setSubscribed] = useState(false);
  const [subscribedCount, setSubscribedCount] = useState(0);
  const [alerts, setAlerts] = useState(false);

  //Header & Content
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  //Subscriber Create/Delete
  const [subscribers, setSubscribers] = useState([]);
  const createSubscriber = (newSubscriber) =>
    setSubscribers((currentSubscribers) => [
      newSubscriber,
      ...currentSubscribers,
    ]);
  const deleteSubscriber = (indexToDelete) =>
    setSubscribers((currentSubscribers) =>
      currentSubscribers.filter((post, index) => index !== indexToDelete)
    );
  
  

  return (
    <>
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} text="My content."/>
    </div>
      <Greeting language="es" />
      <WelcomeBack name="Joe" />
      <WelcomeBack name="Anna" />
      <Quote quote={quote} />
      <Notifications notifications={notifications} />
      <GroceryList items={groceryList} />
      <Todo items={todos} />

      <button onClick={handleClick}>Subscribe</button>;

      
      <section>
      <p>Please click to subscribe to my updates!</p>
      <button onClick={handleSubscribe}>Subscribe</button>
      </section>

      <section>
      <p>Please click to subscribe to my updates!</p>
      <p>Subscriber Count: {subscribedCount}</p>
      <button
        onClick={() => {
          setSubscribed(!subscribed);
          setSubscribedCount((currentCount) => currentCount + 1);
          setSubscribedCount((currentCount) => currentCount + 1);
          if (!alerts) setAlerts(true);
        }}
      >
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
      </section>
      <br></br>
      <CoinTossCounter />
      <br></br>
      <RegistrationForm />
      <br></br>
      <br></br>
      <SubscriberForm />
      <br></br>
      <br></br>
      <SubscriberForm createSubscriber={createSubscriber} />
      <SubscriberList subscribers={subscribers} deleteSubscriber={deleteSubscriber} />

      
    </>
  );
}

export default App;

