import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 70px);

`

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  margin: 0 auto;
  text-align: center;

`

export const ContentCampo = styled.div`
  height: calc(100vh - 90px);

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

export const BoxEscalation = styled.div`

`
