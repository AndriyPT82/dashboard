import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import s from './ContactUs.module.scss';
import Input from "components/Input/Input";

// const validateNameLastName = (fieldName, str) => {

// }

const checkForError = (errorsList, fieldName) => {
  return errorsList.includes(fieldName) ? '#f28585' : '';
}


function ContactUs() {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    message: '',
  })
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (['firstName', 'lastName'].includes(name)) {
      if ((/[^\p{L}\s]/u.test(value))) return;

      if (!value.trim() && !state[name].length) return;

      if (value.at(-1) === ' ' && state[name].at(-1) === ' ') return;


      if (!state[name].length) {
        setState(prev => ({ ...prev, [name]: value.toUpperCase() }))
        return;
      }


      setState(prev => {
        if (prev[name].at(-1) === ' ') {
          const firstLetter = value.at(-1).toUpperCase();
          const str = value.slice(0, -1) + firstLetter
          return { ...prev, [name]: str }
        }
        return { ...prev, [name]: value }
      })

      return;
    }

    if (name === 'email') {
      setState(prev => ({ ...prev, [name]: value }))
      return;
    }

  }


  const btnIsDisabled = () => {
    return errors.length || state?.values().some(value => !value.lengt);
  }

  const handleSubmit = useCallback((e) => { console.log(123); }, [])

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
          setErrors(prev => [...prev, name])
        }
        break;
      case 'tel':
        if (!(/^[+]?[0-9]{9,12}$/).test(value)) {
          setErrors(prev => [...prev, name])
        }
        break
      case 'firstName':
      case 'lastName':
        if (value.trim().length < 2) {
          setErrors(prev => [...prev, name])
        }
      default:
        break;
    }
  }, [])

  const handleFocus = (e) => {
    const { name } = e.target;
    if (errors.includes(name)) {
      setErrors(prev => prev.filter(errorName => errorName !== name))
    }
  }

  const inputFilds = [

    { title: 'First Name', key: 'firstName', placeholder: 'First Name' },
    { title: 'Last Name', key: 'lastName', placeholder: 'Last Name' },
    { title: 'E-mail', key: 'email', placeholder: 'email' },
    { title: 'Phone number', key: 'tel', placeholder: "+1 (666) 000-0000" },

  ]

  return (
    <div className={s.container}>
      <h2 className={s.title}>Contact Us</h2>
      <h4 className={s.subtitle}>Our friendly team would love to hear from you!</h4>
      <div className={s.form}>
        {inputFilds.map(({ title, key, placeholder }) => (
          <Input
            title={title}
            value={state[key]}
            placeholder={placeholder}
            name={key}
            id={key}
            cls={`s.${[key]}`}
            handleFocus={handleFocus}
            handleChange={handleChange}
          />
        ))}
        <div className={s.textarea_block}>
          <label htmlFor="textarea">Message</label>
          <textarea rows="4" cols="50"
            name="textarea"
            id="textarea"
          />
        </div>

        <button disabled={btnIsDisabled} onSubmit={handleSubmit}> Send message </button>
      </div>
    </div>
  );
}


export default ContactUs;
