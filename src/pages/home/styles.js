import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

`

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  height: calc(100vh - 90px);

  margin: 0 auto;
  text-align: center;

`

export const ContentCampo = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
`
export const BoxCampo = styled.div`
  position: relative;


  & > img {
    width: 100%;
    max-width: 800px;

    height: auto;
  }
`
