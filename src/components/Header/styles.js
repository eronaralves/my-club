import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;

  padding-inline: 50px;
  background-color: #007330;

`

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;

  img {
    width: 192px;
  }
  
`