import React,{useState} from 'react'


export default function Textform(props) {
  const handleupClick = () =>{
    // console.log("UpperCase was clicked "+text)
    let newText  = text.toUpperCase();
    setText(newText)
    props.showalert("converted to uppercase","success")
    document.title = "TextUtils-uppercase"
  }
  const handlelowClick = () =>{
    // console.log("UpperCase was clicked "+text)
    let newText  = text.toLowerCase();
    setText(newText)
    props.showalert("converted to lowercase","success")
    document.title = "TextUtils-Lowercase"

  }
  const handleonChange = (event) =>{
    // console.log(event.target)
    setText(event.target.value);
    
  }

    let msg = new SpeechSynthesisUtterance();
const speak = (msg) =>{
  msg.text=text
  window.speechSynthesis.speak(msg)
  props.showalert("Now your text is speaking","success")
  document.title = "TextUtils-Speaking"

}

const handlecopy=()=>{
  var text = document.getElementById("myBox")
  text.select()
  navigator.clipboard.writeText(text.value)
  props.showalert("Your text is copied to clipboard","success")
  document.title = "TextUtils-copy"


}

const handleExtraspaces=()=>{
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showalert("Extra Spaces are removed from your text","success")
  document.title = "TextUtils-Remove Extra"

}

const countWords = (text)=>{
  // document.title = "TextUtils-count words"
  
  let words
  if(text===""||text.length===0){
    words = 0
  }
  else{
    words=text.trim().split(/\s+/).length
    return words
  }

}

  const [text, setText] = useState('');
  // text = "gshycushgdb" we cannot update like this in React
  // setText("new text");we have to update like this
  return (
    <>
 <div className = "container" style={{color:props.mode==='dark'?'white':'black'}} >  
  <h1>{props.heading} </h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'grey'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to Upper case</button>
  <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lower case</button>
  <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
  <button className="btn btn-primary mx-2" onClick={() => speak(msg)}>Speak</button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>Your text summary</h2>
        <p>
 
 {countWords(text)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes to read</p>

      </div>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to Preview it here"}</p>
   </> 
  )
}
   
 