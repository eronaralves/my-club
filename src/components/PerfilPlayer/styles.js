import styled , {css} from "styled-components"

export const ContainerPlayer = styled.div`
  padding: 10px;
  position: absolute;

  img {
    width: 50px;
    display: block;
  }

  ${props => {
    if(props.posicao === 1) {
      return css`
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translate(-50%, 0);

      `
    } else if(props.posicao === 2) {
      return css`
        position: absolute;
        right: 120px;
        top: 50px;
      `
    }
  }}

`

export const DescriptionPlayer = styled.div`
  background-color: #FFCB0A;
  
  h2 {
    font-size: 8px;
  }
`