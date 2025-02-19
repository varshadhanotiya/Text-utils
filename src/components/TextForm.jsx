import React, { useState } from "react";

export default function Textform({ color, backgroundColor, showAlert }) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => setText(e.target.value);

  const convertToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to uppercase!", "success");
  };

  const convertToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to lowercase!", "success");
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    showAlert("Text Cleared!", "success");
  };

  const convertToTitleCase = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((lower) => lower.charAt(0).toUpperCase() + lower.slice(1))
      .join(" ");
    setText(newText);
    showAlert("Converted to titlecase!", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to Clipboard!", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.replace(/\s\s+/g, " ");
    setText(newText);
    showAlert("Extra spaces removed!", "success");
  };

  const reverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    showAlert("Text reversed!", "success");
  };

  return (
    <>
      <div className="container" style={{ color: color }}>
        <h1 className="mb-4">
          TextUtils - word counter, character counter, remove extra spaces
        </h1>
        <div className="mb-3">
          <label htmlFor='myBox'> Paste your text here👇 </label>
          <textarea
            style={{ backgroundColor, color }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={convertToUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={convertToLowerCase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={convertToTitleCase}
        >
          Convert to TitleCase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={reverseText}
        >
          Reverse Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={copyText}
        >
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Current text summary:</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
