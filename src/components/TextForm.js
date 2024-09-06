import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
        props.showAlert("success","Converted to Upper Case");
    }
    const handleLowClick=()=>{
        console.log("Lowercase was clicked" + text);
        setText(text.toLowerCase());
        props.showAlert("success","Converted to Lower Case");
    }
    const handleClick=()=>{
        console.log("Clear Text was clicked" + text);
        setText('');
        props.showAlert("success","Text has been cleared");
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(document.getElementById("myBox").value);
        props.showAlert("success","Text has been copied to clipboard");
    }
    const handleSpaces=()=>{
        setText(text.replace(/[ ]+/g," "));
        props.showAlert("success","Extra spaces have been removed");
    }
    const [text,setText]=useState("");
    return (
    <>
        <div className="container" style={{color:props.mode==="dark" ? "white" : "black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark" ? "#000000" : "white",color:props.mode==="dark" ? "white" : "black"}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==="dark" ? "white" : "black"}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} letters</p>
            <p>{text.split(" ").length*0.008} minutes to read</p>
            <h2>Preview</h2>
            <p>{text || "please enter any text to preview"}</p>
        </div>
    </>
  )
}
