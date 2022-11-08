import styled , {css} from "styled-components"

import {SIGLA_POSICOES} from '../../pages/home'

export const ContainerPlayer = styled.div`
  padding: 10px;
  position: absolute;
  cursor: pointer;

  img {
    width: 70px;
    display: block;
  }

  :hover {
    transform:  translateY(1px) scale(1.1);
    transition: all ease .2s;
  }

  ${props => {
    if(props.posicao === 'GOL') {
      return css`
        bottom: 13%;
        left: 50%;
        transform: translate(-50%, 0) ;

        :hover {
          transform: translate(-50%, 0) translateY(1px) scale(1.1);
          transition: all ease .2s;
        }
      `
    } else if(props.posicao === 'LD') {
      return css`
        right: 12%;
        bottom: 30%;
      `
    }
    else if(props.posicao === 'LE') {
      return css`
        position: absolute;
        left: 12%;
        bottom: 30%;
      `
    }
    else if(props.posicao === 'ZAG') {
      if(props.idPlayer === 2) {
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
    else if(props.posicao === 'MC') {
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

      if(props.idPlayer === 7) {
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
    else if(props.posicao === 'ATA') {

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
    img {
      width: 50px;
      display: block;
    }
  }

  @media(max-width: 390px) {
    img {
      width: 40px;
      display: block;
    }

    ${props => {
      if(props.posicao === 'MC') {
        return css`
          bottom: 50%;
        `
      }
    }}
  }

`

export const DescriptionPlayer = styled.div`
  width: 100%;
  height: 9px;
  padding: 4px 8px;

  background-color: #FFCB0A;
  
  h2 {
    font-size: 8px;
  }
`