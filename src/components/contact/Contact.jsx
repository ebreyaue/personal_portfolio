import "./contact.css"

import Email from "../../img/email.png"
import In from "../../img/linkedin-plain.svg"
import Gthub from "../../img/github-original.svg"
import Twt from "../../img/twitter-original.svg"


import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {ThemeContext} from "../../context";

const Contact = () => {
const formRef = useRef();
const [done, setDone] = useState(false)
const theme = useContext(ThemeContext);
//const darkMode = theme.state.darkMode;

  const handleSubmit = (e) =>{
  e.preventDefault();
 
  emailjs.sendForm(
  "service_hfh4qac",
  "template_brg70ht",
  formRef.current,
  "iWE55jbBlGIt8jgDm"
  )  

  .then((result) =>{
  console.log(result.text);
  setDone(true)
  },
  (error)=>{
 console.log(error.text) 
  }
  );
  };


return (
<div className="c">
<div className="c-bg"></div>

<div className="c-wrapper">
<div className="c-left">
<h1 className="c-title">Lets discuss your Proyect</h1>

<div className="c-info">
<div className="c-info-item">
<img src={Email} alt="" className="c-icon"/>
hello@emmanuelbreyaue.com
</div>
</div>

<div className="c-info">
<div className="c-info-item">
<img src={In} alt="" className="c-icon"/>
linkedin.com/in/emmanueldbreyaue
</div>
</div>

<div className="c-info">
<div className="c-info-item">
<img src={Gthub} alt="" className="c-icon"/>
github.com/ebreyaue
</div>
</div>


<div className="c-info">
<div className="c-info-item">
<img src={Twt} alt="" className="c-icon"/>
@ebreyaue
</div>
</div>
</div>

<div className="c-right">
<p className="c-desc"><b>Whats is your story?</b> Always available for freelancing if the right proyect comes along me.</p>

<form ref={formRef} onSubmit={handleSubmit}>
<input type="text" placeholder="Name" name="user_name"/>
<input type="text" placeholder="Subject" name="user_subject"/>
<input type="text" placeholder="Email" name="user_email"/>
<textarea rows="5" placeholder="Message" name="message"/>
<button>Submit</button>
{done && "Thank you..."}
</form>
</div>
</div>
</div>
  );
};
export default Contact