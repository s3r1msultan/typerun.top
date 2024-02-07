import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const words = useRef<HTMLElement | null>(null);
  const typedWords = useRef<HTMLElement | null>(null);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setInput(event.currentTarget.value);
    if (
      words.current &&
      typedWords.current &&
      words.current.textContent?.includes(typedWords.current?.textContent || "")
    ) {
      typedWords.current.textContent = event.currentTarget.value;
      console;
      words.current.textContent = words.current.textContent.slice(
        typedWords.current.textContent.length,
        -1
      );
    }
  }
  return (
    <div className="bg-gray-300">
      <p>
        <span
          className="text-green-600"
          ref={typedWords}
        ></span>
        <span
          className="text-blue-600"
          ref={words}
        >
          I want something just like this
        </span>
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
