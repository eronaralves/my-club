import React, { useEffect, useState } from 'react'

// Styles
import {Container, Content, ContentCampo, BoxCampo} from './styles'

// Components
import {Header} from '../../components/Header'
import {PerfilPlayer} from "../../components/PerfilPlayer"

// Images
import Campo from '../../assets/images/campo.png'


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

  return (
    <Container>
      <Header/>
      <Content>
        <ContentCampo>
          <BoxCampo>
            <img src={Campo}/>

            {athletes.map((item, index) => (
              index < 30 &&
                <PerfilPlayer item={item}/>
            ) )}
          </BoxCampo>
        </ContentCampo>
      </Content>
    </Container>
  )
} 