
//21.7 Conditional rendering

// function Greeting({ language }) {
//     if (language === "es") {
//       return <h1>Hola!</h1>;
//     }
//     return <h1>Hello!</h1>;
//   }



// function Greeting({ language }) {
//     return <h1>{language === "es" ? "Hola" : "Hello"}!</h1>;
//   }



  function Greeting({ language }) {
    switch (language) {
      case "es":
        return <h1>Hola!</h1>;
      case "fr":
        return <h1>Bonjour!</h1>;
      case "en":
      default:
        return <h1>Hello!</h1>;
    }
  }


  export default Greeting;