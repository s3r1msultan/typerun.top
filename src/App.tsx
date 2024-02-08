import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [words, setWords] = useState("I need somebody who can love me at my worst");
  const [leftLetters, setLeftLetters] = useState(words);
  const [wrongLetters, setWrongLetters] = useState("");
  const [typedLetters, setTypedLetters] = useState("");

  function handleInputAdd(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    const currentValue = event.currentTarget.value;
    setInput(currentValue);
    if (leftLetters.charAt(0) === currentValue.charAt(currentValue.length - 1)) {
      setTypedLetters((prev) => prev + leftLetters.charAt(0));
      setLeftLetters((prev) => prev.slice(1, prev.length));
    } else {
      setWrongLetters((prev) => prev + leftLetters.charAt(0));
      setLeftLetters((prev) => prev.slice(1, prev.length));
    }
  }

  function handleInputDelete(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Backspace" && typedLetters.length === input.length) {
      setLeftLetters((prev) => typedLetters.charAt(typedLetters.length - 1) + prev);
      setTypedLetters((prev) => prev.slice(0, prev.length - 1));
    }
  }

  return (
    <div className="bg-gray-300">
      <p>
        <span className="text-green-500">{typedLetters}</span>
        <span className="text-red-600">{wrongLetters}</span>
        <span className="text-blue-600">{leftLetters}</span>
      </p>
      <input
        className="text-red-700 w-full text-center bg-transparent outline-none"
        type="text"
        placeholder="Enter something"
        value={input}
        onChange={handleInputAdd}
        onKeyDown={handleInputDelete}
      />
      <p>{input}</p>
    </div>
  );
}

export default App;
