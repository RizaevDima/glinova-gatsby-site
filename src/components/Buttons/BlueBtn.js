import React from "react"
import { BtnWraperBlue } from "./Btn.Styles"

const BlueBtn = ({ link, text }) => {
  return (
    <BtnWraperBlue href={link}>
      <span>{text}</span>
    </BtnWraperBlue>
  )
}

export default BlueBtn
