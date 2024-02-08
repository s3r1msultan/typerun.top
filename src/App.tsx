import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [words, setWords] = useState("I want something just like this");
  const [leftWords, setLeftWords] = useState(words);
  const [typedWords, setTypedWords] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = event.target.value;
    setInput(currentValue);
    if (leftWords.charAt(0) === currentValue.charAt(currentValue.length - 1)) {
      setTypedWords((prev) => prev + leftWords.charAt(0));
      setLeftWords((prev) => prev.slice(1, prev.length));
    }
  }
  return (
    <div className="bg-gray-300">
      <p>
        <span className="text-green-600">{typedWords}</span>
        <span className="text-blue-600">{leftWords}</span>
      </p>
      <input
        className="text-red-700 w-full text-center bg-transparent outline-none"
        type="text"
        placeholder="Enter something"
        value={input}
        onChange={handleInputChange}
      />
      <p>{input}</p>
    </div>
  );
}

export default App;
