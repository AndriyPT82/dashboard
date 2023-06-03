import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import './ContactUs.scss';

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

  const handleSubmit = useCallback((e) => { console.log(123);}, [])

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

  return (
    <div className="contact-us">
      <h2 className="contact-us__title">Contact Us</h2>
      <h4 className="contact-us__subtitle">Our friendly team would love to hear from you!</h4>
      <form className="contact-us__form">
        <div className="contact-us__personal-data">

          <div className="contact-us__input">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              value={state.firstName}
              placeholder="First Name"
              name="firstName"
              id="firstName"
              style={{
                borderColor: checkForError(errors, 'firstName')
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>

          <div className="contact-us__input">
            <label htmlFor="lasttName">Last Name</label>
            <input
              type="text"
              value={state.lastName}
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              style={{
                borderColor: checkForError(errors, 'lastName')
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="contact-us__input">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={state.email}
            placeholder="email"
            name="email"
            id="email"
            style={{
              borderColor: checkForError(errors, 'email')
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

        <div className="contact-us__input">
          <label htmlFor="tel">Phone number</label>
          <input
            type="tel"
            placeholder="+1 (666) 000-0000"
            name="tel"
            id="tel"
            style={{
              borderColor: checkForError(errors, 'tel')
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </div>

        <div className="contact-us__input">
          <label htmlFor="text">Message</label>
          <textarea rows="4" cols="50"
            type="text" resiz='none'
            name="text"
            id="text"
          />
        </div>

        <button disabled={btnIsDisabled}  onSubmit={handleSubmit}> Send message </button>
      </form>
    </div>
  );
}


export default ContactUs;
