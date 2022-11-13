import React from "react";

// Assets
import PlayerVazio from '../../assets/images/player-vazio.png'
import Campinho from '../../assets/images/campinho.svg'

// Styles
import {
  Container,
  BoxInfoPlayer,
  ContentInfo,
  BoxInfoClube,
  ContentPosicao
} from './styles'


export function PerfilPlayerScaled(props) {
  const urlPlayer = (props.urlPlayer?.replace("FORMATO", "220x220"))

  return (
    <Container {...props}>
      <ContentInfo>
          {!props.isChoose ? <img src={PlayerVazio}/> : (
            <img src={urlPlayer}/>
          )}
        <BoxInfoPlayer>
          <span>{props.name}</span>
          <BoxInfoClube className={props.className}>
          {!props.isChoose ? <img src={props.fotoClube}/> : (
            <img src={props.urlCLube}/>
          )}
            <span>{props.clube}</span>
          </BoxInfoClube>
        </BoxInfoPlayer>
      </ContentInfo>
      <ContentPosicao>
        <span>{props.posicao}</span>
        <img src={Campinho}/>
      </ContentPosicao>
    </Container>
  )
}