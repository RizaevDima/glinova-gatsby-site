import styled from "styled-components"

export const Wrapper = styled.header`
  background: #605f5f;
  height: 70px;
  position: fixed;
  width: 100%;
  z-index: 10000;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 20px;

  img {
    width: 200px;
    margin: 0;
    padding: 12px 0 0 0;
  }
  .header-phone-link {
    color: #fff;
    font-size: 20px;
    transition: all 0.3s;
    :hover {
      color: #ee2562;
    }
  }
`
