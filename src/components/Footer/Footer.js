import React from "react"
import { Wrapper } from "./Footer.styles"

const Footer = () => {
  // const stripHtml = string => string.replace(/(<([^>]+)>)/gi, "")

  const normalizeResponse = (url, response) => {
    if (
      url.match(/wp-json\/contact-form-7\/v1\/contact-forms\/\d+\/feedback/)
    ) {
      return normalizeContactForm7Response(response)
    }

    return {
      isSuccess: false,
      message: "Are you submitting to the right URL?",
      validationError: {},
    }
  }
  const normalizeContactForm7Response = response => {
    const isSuccess = response.status === "mail_sent"
    const message = response.message
    const validationError = isSuccess
      ? {}
      : Object.fromEntries(
          response.invalid_fields.map(error => {
            const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1]

            return [key, error.message]
          })
        )

    return {
      isSuccess,
      message,
      validationError,
    }
  }
  const formSubmissionHandler = event => {
    event.preventDefault()

    const formElement = event.target,
      { action, method } = formElement,
      body = new FormData(formElement)
    console.log(`body`, body)
    console.log(`action`, action)
    console.log(`method`, method)
    fetch(action, {
      method,
      body,
    })
      .then(response => {
        let res = response.json()
        console.log(`response`, res)
        console.log(`response2`, response)
        return response.json()
      })
      .then(response => normalizeResponse(action, response))
      .then(response => {
        // alert(response.message)

        if (response.isSuccess) {
          formElement.reset()
        }
      })
      .catch(error => {
        alert("Check the console for the error details.")
        console.log(error)
      })
  }

  return (
    <Wrapper>
      <div className="row">
        <p className="footer-test">FOOTER</p>
        <p>
          Ремаркетинг Функція ремаркетингу дає змогу персоналізувати медійну
          рекламну кампанію для користувачів, які раніше відвідували ваш сайт, а
          також коригувати для них ставки й оголошення (за допомогою динамічного
          ремаркетингу), коли вони переглядають інформацію в Інтернеті або
          користуються додатками. Функція ремаркетингу дає змогу персоналізувати
          медійну рекламну кампанію для користувачів, які раніше відвідували ваш
          сайт, а також коригувати для них ставки й оголошення (за допомогою
          динамічного ремаркетингу), коли вони переглядають інформацію в
          Інтернеті або користуються додатками. Функція ремаркетингу дає змогу
          персоналізувати медійну рекламну кампанію для користувачів, які раніше
          відвідували ваш сайт, а також коригувати для них ставки й оголошення
          (за допомогою динамічного ремаркетингу), коли вони переглядають
          інформацію в Інтернеті або користуються додатками. Функція
          ремаркетингу дає змогу персоналізувати медійну рекламну кампанію для
          користувачів, які раніше відвідували ваш сайт, а також коригувати для
          них ставки й оголошення (за допомогою динамічного ремаркетингу), коли
          вони переглядають інформацію в Інтернеті або користуються додатками.
          Використовуйте цю функцію в кампаніях у Медійній мережі.
        </p>
      </div>
    </Wrapper>
  )
}

export default Footer
