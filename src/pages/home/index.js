import React, { useEffect, useState } from 'react'

// Styles
import {Container, Content, ContentCampo, BoxCampo} from './styles'

// Components
import {Header} from '../../components/Header'
import {PerfilPlayer} from "../../components/PerfilPlayer"

// Images
import Campo from '../../assets/images/campo.png'

export const SIGLA_POSICOES = {
  goleiro: 'GOL',
  zagueiro: 'ZAG',
  lateralEsquerdo: 'LE',
  lateralDireito: 'LD',
  meioCampo: 'MC',
  atacante: 'ATA'
}

export function Home() {
  const [athletes, setAthletes] = useState([])
  const [club, setClube] = useState([])
  useEffect(() => {
    fetch('https://api.cartola.globo.com/atletas/mercado')
    .then(res => res.json())
    .then(data => {
      setAthletes(data.atletas)
      setClube(data.clube)

      console.log(data)
    })
  }, [])


  const timeCompleto = [
    {
      id: 1,
      posicao: SIGLA_POSICOES.goleiro
    },
    {
      id: 2,
      posicao: SIGLA_POSICOES.zagueiro
    },
    {
      id: 3,
      posicao: SIGLA_POSICOES.zagueiro
    },
    {
      id: 4,
      posicao: SIGLA_POSICOES.lateralEsquerdo
    },
    {
      id: 5,
      posicao: SIGLA_POSICOES.lateralDireito
    },
    {
      id: 6,
      posicao: SIGLA_POSICOES.meioCampo
    },
    {
      id: 7,
      posicao: SIGLA_POSICOES.meioCampo
    },
    {
      id: 8,
      posicao: SIGLA_POSICOES.meioCampo
    },
    {
      id: 9,
      posicao: SIGLA_POSICOES.atacante
    },
    {
      id: 10,
      posicao: SIGLA_POSICOES.atacante
    },
    {
      id: 11,
      posicao: SIGLA_POSICOES.atacante
    }
  ]

  return (
    <Container>
      <Header/>
      <Content>
        <ContentCampo>
          <BoxCampo>
            <img src={Campo}/>
            {timeCompleto.map(item => (
              <PerfilPlayer posicao_id={item.posicao} idPlayer={item.id}/>
            ))}
          </BoxCampo>
        </ContentCampo>
      </Content>
    </Container>
  )
} 