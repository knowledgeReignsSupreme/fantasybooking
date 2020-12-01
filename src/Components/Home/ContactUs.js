import React, {useState} from 'react'
import emailjs from "emailjs-com";
import {useScroll} from '../../useScroll';
import {scrollReveal} from '../../Animation.js'
import {motion} from 'framer-motion';
import{ init } from 'emailjs-com';
init("user_tvT3XOjtXRjtzeC9w0SRj");

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [more, setMore] = useState("")
  const [formDone, setFormDone] = useState("")
  const [nameErr, setNameErr] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [startErr, setstartErr] = useState("")
  const [element, controls] = useScroll();

  let validEmail = () => {
    if (email.length === 0){
      return false
    }
    var filter = /^\s*[\w\-_]+(\.[\w\-_]+)*@[\w\-_]+\.[\w\-_]+(\.[\w\-_]+)*\s*$/;
    return String(email).search(filter) !== -1;
  }

  let validateInputs = (inputName,inputStart,inputEnd) => {
    validEmail() ? setEmailErr("") : setEmailErr("Email is invalid");
    inputName.trim().length > 3 ? setNameErr("") : setNameErr("Name is invalid");
    if (inputStart.length > 0 && inputEnd.length > 0){
      setstartErr('')
    }
    if (inputName.trim().length > 3){
      if (validEmail()){
        if (inputStart.length !== 0 && inputEnd.length !== 0){
          return true
        }
      }
    }
    if (inputStart.length === 0 || inputEnd.length === 0){
      setstartErr('Dates are invalid')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateInputs(name, start, end)){
      let template = {
        name: name,
        email: email,
        start: start,
        end: end,
        more: more
      }
      emailjs
        .sendForm("service_vu1mupn", "template_rsxllv5", e.target, "user_tvT3XOjtXRjtzeC9w0SRj")
        .then(
          (result) => {
            console.log(result.text);
            setFormDone("We will contact you soon! Thank you")
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    // validateInputs(name, start, end);

  }

  return (
    <motion.div className="contactinfo" variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
      <div className="contactinfo__text">
        <h3 className="contactinfo__text__header">Still <span>Curios?</span></h3>
        <h5 className="contactinfo__text__header-sub">Let's be in touch</h5>
      </div>
      <div className="contactinfo__form">
        <form action="/" onSubmit={(e) => handleSubmit(e)}>
          <div className="contactinfo__form__each">
        <label htmlFor="name" type="text">Name:</label>
        <input onChange={(e) => setName(e.target.value)} type="text" name="name"/>
        {setNameErr && <p className="input__error">{nameErr}</p>}

        </div>
        <div className="contactinfo__form__each">
        <label htmlFor="email" type="email">Email:</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email"/>
        {setEmailErr && <p className="input__error">{emailErr}</p>}

        </div>
        <div className="contactinfo__form__each">
        <label htmlFor="start" type="date">Start Date:</label>
        <input onChange={(e) => setStart(e.target.value)} type="date" name="start"/>
        </div>
        <div className="contactinfo__form__each">
        <label htmlFor="end" type="date">End Date:</label>
        <input onChange={(e) => setEnd(e.target.value)} type="date" name="end"/>
        {setstartErr && <p className="input__error">{startErr}</p>}
        </div>
        <div className="contactinfo__form__each">
        <label htmlFor="more" type="text">More:</label>
        <input onChange={(e) => setMore(e.target.value)} type="text" name="more" />
        {formDone && <p className="input__error">{formDone}</p>}
        </div>
        <button type="submit">Submit &rarr;</button>
        </form>
      </div>
    </motion.div>
  )
}
