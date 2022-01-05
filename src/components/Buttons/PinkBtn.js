import React from "react"
import { BtnWraperPink } from "./Btn.Styles"
import styled from "styled-components"

// const BtnWraperPink = styled.a`
//   position: relative;
//   font-size: 24px;
//   margin: 0 auto;
//   padding: 25px 50px;
//   border-radius: 50px;
//   background-color: #cd7f8b;
//   color: #fff;
//   font-weight: 600;
//   display: inline-block;
//   margin-left: 25px;
//   margin-top: 40px;
//   transition: all 0.3s;
//   :hover {
//     background-color: #d25985;
//   }
// `

const PinkBtn = ({ link, text }) => {
  return (
    <BtnWraperPink href={link}>
      <span>{text}</span>
    </BtnWraperPink>
  )
}

export default PinkBtn
