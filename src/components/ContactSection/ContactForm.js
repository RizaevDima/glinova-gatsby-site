import React, { useState } from "react"

import { ContactFormWrapper, BtnWraperPink } from "./ContactSection.styles"

import FormMessage from "./FormMessage"
import setFormObj from "../../hooks/formUtils"
const initialData = {
  yourName: "",
  yourPhone: "",
  commentTextarea: "",
}
const ContactForm = () => {
  const [userName, setUserName] = useState("")
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault()

    const errorsNew = validate(formData)
    console.log(`formData`, formData)
    setErrors(errorsNew)
    console.log(`errors`, errorsNew)
    if (Object.keys(errorsNew).length === 0) {
      const signData = new FormData()
      signData.append("yourName", formData.yourName)
      signData.append("yourPhone", formData.yourPhone)
      signData.append("commentTextarea", formData.commentTextarea)
      fetch(
        "https://devtemp.no/glinova.ua/site-admin/wp-json/contact-form-7/v1/contact-forms/11/feedback",
        {
          method: "POST",
          body: signData,
        }
      )
        .then(response => {
          console.log(`response first`, response)
          if (response.status === 200) {
            return response.json()
          } else {
            throw new Error("Something went wrong on api server!")
          }
        })
        .then(response => {
          console.log(`response`, response)
        })
        .catch(err => {
          console.log("response==>>>>>>> error", err)
        })
        .finally(res => {
          console.log(`response finally`, res)
        })
    }
  }

  const validate = formData => {
    const errors = {}

    if (!formData.yourName) errors.name = "Username cannot be blank"
    if (!formData.yourPhone) errors.phone = "Phone number cannot be blank"
    if (!formData.commentTextarea) errors.textarea = "Comment cannot be blank"

    return errors
  }

  return (
    <ContactFormWrapper>
      <form
        id="contact-form"
        className="footer-form"
        action="https://devtemp.no/glinova.ua/site-admin/wp-json/contact-form-7/v1/contact-forms/11/feedback"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className={errors.name ? "error field" : "field"}>
          <input
            className="form-input"
            value={formData.yourName}
            onChange={setFormObj(formData, setFormData)}
            type="text"
            name="yourName"
            id="yourName"
            placeholder="Ім'я"
          />
          {errors.name && <FormMessage>{errors.name}</FormMessage>}
        </div>
        <div className={errors.phone ? "error field" : "field"}>
          <input
            className="form-input"
            value={formData.yourPhone}
            onChange={setFormObj(formData, setFormData)}
            type="text"
            name="yourPhone"
            id="yourPhone"
            placeholder="Тел."
          />
          {errors.phone && <FormMessage>{errors.phone}</FormMessage>}
        </div>
        <div className={errors.textarea ? "error field" : "field"}>
          <textarea
            className="form-input"
            value={formData.commentTextarea}
            id="commentTextarea"
            name="commentTextarea"
            placeholder="Яка процедура вас цікавить?"
            rows="5"
            onChange={setFormObj(formData, setFormData)}
          />
          {errors.textarea && <FormMessage>{errors.textarea}</FormMessage>}
        </div>
        <div className="field sign-field-submit">
          <BtnWraperPink
            onClick={handleSubmit}
            // disabled={!isFormValid}
          >
            Відправити
          </BtnWraperPink>
        </div>
      </form>
    </ContactFormWrapper>
  )
}

export default ContactForm
