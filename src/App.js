import logo from "./logo.svg";
import "./App.css";
import ChatBot from "react-simple-chatbot";

function App() {
  const steps = [
    {
      id: "greet",
      message:
        "Hello there, Greetings from EnviroBot! I'm a smart recycling bot.You can ask me if an item can be recycled, find out about nearest recycling points, and I can also give useful information ",
      trigger: "what can be recycled",
    },
    {
      id: "what can be recycled",
      user: true,
      trigger: "things",
    },
    {
      id: "things",
      message: "Wohooo! You can recycle it! There are recycling bins nearby. ",
      trigger: "thing2",
    },
    {
      id: "thing2",
      user: true,
      trigger: "answer",
    },

    {
      id: "answer",
      message: "Ummm... I don't think you can recycle this.",
      trigger: "next",
    },
    {
      id: "next",
      user: true,
      trigger: "answer2",
    },

    {
      id: "answer2",
      message: "Deluxe Recycling(India) Pvt. Ltd",
      trigger: "next1",
    },
    {
      id: "next1",
      user: true,
      trigger: "answer3",
    },
    {
      id: "answer3",
      message:
        "Advanced E-Waste Recycler 41, Sikh Mohalla M.G. Road Near Kothari Market Square, Indore, Madhya Pradesh 452001 Recycling center Shantipath Road, Nagar Nigam Rd Naman Industries Indore 319/A-3 sector Industrial Area Manohar Waste Paper PRFW+M8J, Shankar Ganj, Indore, Madhya Pradesh 452005",
      trigger: "",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <ChatBot steps={steps} />
      </header>
    </div>
  );
}

export default App;
