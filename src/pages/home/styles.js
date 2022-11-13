import styled, { css } from "styled-components";
import { PerfilPlayerScaled } from "../../components/PerfilPlayerscaled";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: inline-flex;
  position: relative;

  margin-top: 70px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  text-align: center;

`

export const ContainerCampo = styled.div`
margin-top: 70px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  
  
`

export const ContentCampo = styled.div`
  height: 670px;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 1024px) {
    height: 100%;
    flex-direction: column;
  }

`

export const BoxCampo = styled.div`
  position: relative;
  width: 1000px;

  & > img {
    width: 100%;
    max-width: 700px;

    height: auto;
  }

  @media(max-width: 1024px) {
    width: 100%;
    max-width: 700px;
  }
`

export const BoxEscalation = styled.div`
  width: 100%;
  max-width: 680px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  
  padding-inline: 16px;

  h2 {
    font-size: 33px;
  }
`

export const ContainerPerfilPlayers = styled.div`
  width: 100%;
  max-width: 400px;
  height: 85%;

  display: grid;
  

  overflow: scroll;
  
`

export const ContainerModal = styled.div`
  width: 100%;

  background-color: aqua;
  z-index: 10;
  position: absolute;
  right: 0;

  div {
    
    
  }
`
