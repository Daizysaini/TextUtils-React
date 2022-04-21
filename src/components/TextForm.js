import React from 'react'
import {useState} from 'react'

export default function TextForm(props) {
  
  const [text, setText]= useState("");
  const handleUpClick =()=>{

    //console.log('upperCase was clicked' + text)
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick =()=>{

    //console.log('upperCase was clicked' + text)
    let newText = text.toLowerCase();
    setText(newText);
  }
    const handleClearClick =()=>{

      //console.log('upperCase was clicked' + text)
      let newText = "";
      setText(newText);
  }
  const handleOnChange= (event)=>{
    //console.log('on change');
    setText(event.target.value)
  }

  return (
    <>
    <div className="container "  style={{color: props.mode==='dark'?'white':'black'}}>
       <h1 className = "my-4 ">{props.heading} </h1>
        <div className="mb-3">
       
        <textarea className="form-control" id="textBox" style={{backgroundColor: props.mode==='dark'?'#20c997':'white' , color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="8"></textarea>
        <button className = " btn btn-primary " onClick={handleUpClick}>Conver to UpperCase</button>
        <button className = " btn btn-primary mx-2" onClick={handleLoClick}>Conver to LowerCase</button>
        <button className = " btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        </div>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p> Words:{text.split(" ").length} and Characters: {text.length} </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter text in textbox above to preview it here'}</p>
    </div>
    </>
  )
}

