import styled , {css} from "styled-components"

import {SIGLA_POSICOES} from '../../pages/home'

export const ContainerPlayer = styled.div`
  width: 100%;
  max-width: 80px;
  position: absolute;

  cursor: pointer;
  padding: 10px;
  

  img {
    width: 100%;
    display: block;
  }

  :hover {
    transform:  translateY(1px) scale(1.1);
    transition: all ease .2s;
  }

  ${props => {
    if(props.posicao === 1) {
      return css`
        bottom: 13%;
        left: 50%;
        transform: translate(-50%, 0) ;

        :hover {
          transform: translate(-50%, 0) translateY(1px) scale(1.1);
          transition: all ease .2s;
        }
      `
    } else if(props.posicao === 2) {
      if(props.idPlayer === 4) {
        return css`
          right: 12%;
          bottom: 30%;
          
        `
      }
      return css`
        position: absolute;
        left: 12%;
        bottom: 30%;
      `
    }
    else if(props.posicao === 3) {
      if(props.idPlayer === 3) {
        return css`
          bottom: 30%;
          left: 32%;
        `
      }

      return css`
        bottom: 30%;
        right: 32%;
      `
    }
    else if(props.posicao === 4) {
      if(props.idPlayer === 6) {
        return css`
          bottom: 52%;
          left: 50%;
          transform: translate(-50%, 0);

          :hover {
          transform: translate(-50%, 0) translateY(1px) scale(1.1);
          transition: all ease .2s;
        }
        `    
      }

      if(props.idPlayer === 8) {
        return css`
          bottom: 52%;
          left: 16%;
        `
      }
      
      return css`
        bottom: 52%;
        right: 16%;
      `
    }
    else if(props.posicao === 5) {

      if(props.idPlayer === 9) {
        return css`
          top: 10%;
          left: 50%;
          transform: translate(-50%, 0);

          :hover {
          transform: translate(-50%, 0) translateY(1px) scale(1.1);
          transition: all ease .2s;
        }
        `
      }
      if(props.idPlayer === 10) {
        return css`
          top: 10%;
          left: 20%;
        `
      }

      return css`
        top: 10%;
        right: 20%;
      `
    }
  }}

  @media(max-width: 530px) {
    width: 100%;
    max-width: 60px;

    img {
      width: 100%;
      display: block;
    }
  }

  @media(max-width: 390px) {


    ${props => {
      if(props.posicao === 4) {
        return css`
          bottom: 50%;
        `
      }
    }}
  }

`

export const DescriptionPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 14px;
  
  border-radius: 0px 0px 4px 4px;
  
  background-color: #FFCB0A;
  
  h2 {
    font-size: 8px;
  }
`