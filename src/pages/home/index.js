import React, { useEffect, useState } from 'react'

// Styles
import {Container, Content, ContentCampo, BoxCampo, BoxEscalation} from './styles'

// Components
import {Header} from '../../components/Header'
import {PerfilPlayer} from "../../components/PerfilPlayer"

// Images
import Campo from '../../assets/images/campo.png'

export const SIGLA_POSICOES = {
  goleiro: 1,
  lateral: 2,
  zagueiro: 3,
  meioCampo: 4,
  atacante: 5
}
const timeCompleto = [
  {
    posicao_id: SIGLA_POSICOES.goleiro,
    apelido: 'Goleiro'
  },
  {
    posicao_id: SIGLA_POSICOES.zagueiro,
    apelido: 'Zagueiro'
  },
  {
    posicao_id: SIGLA_POSICOES.zagueiro,
    apelido: 'Zagueiro'
  },
  {
    posicao_id: SIGLA_POSICOES.lateral,
    apelido: 'Lateral'
  },
  {
    posicao_id: SIGLA_POSICOES.lateral,
    apelido: 'Lateral'
  },
  {
    posicao_id: SIGLA_POSICOES.meioCampo,
    apelido: 'Meio'
  },
  {
    posicao_id: SIGLA_POSICOES.meioCampo,
    apelido: 'Meio'
  },
  {
    posicao_id: SIGLA_POSICOES.meioCampo,
    apelido: 'Meio'
  },
  {
    posicao_id: SIGLA_POSICOES.atacante,
    apelido: 'Atacante'
  },
  {
    posicao_id: SIGLA_POSICOES.atacante,
    apelido: 'Atacante'
  },
  {
    posicao_id: SIGLA_POSICOES.atacante,
    apelido: 'Atacante'
  }
]

export function Home() {
  const [athletes, setAthletes] = useState([])
  const [club, setClube] = useState([])
  const [positions, setPositions] = useState([])
  const [playerScaled, setPlayerScaled] = useState(timeCompleto)

  

  useEffect(() => {
    fetch('https://api.cartola.globo.com/atletas/mercado')
    .then(res => res.json())
    .then(data => {
      setAthletes(data.atletas)
      setClube(data.clubes)
      setPositions(data)
      console.log(data)
    })
    
  }, [])



  

  return (
    <Container>
      <Header/>
      <Content>
        <ContentCampo>
          <BoxCampo>
          <img src={Campo}/>
            {playerScaled.map((item, index) => (
                <PerfilPlayer posicao_id={item.posicao_id} idPlayer={index + 1} apelido={item.apelido}/>
            ))}
          </BoxCampo>
          {/* <BoxEscalation>
            <h2>Jogadores</h2>
            <div>

            </div>
          </BoxEscalation> */}
        </ContentCampo>
      </Content>
    </Container>
  )
} 