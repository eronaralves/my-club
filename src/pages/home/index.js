import React, { useEffect, useState } from 'react'

// Styles
import {
  Container,
  Content,
  ContentCampo,
  BoxCampo,
  BoxEscalation,
  ContainerCampo,
  ContainerPerfilPlayers,
  ContainerModal,
  PerfilScaled
} from './styles'

// Components
import { Header } from '../../components/Header'
import { PerfilPlayer } from '../../components/PerfilPlayer'
import { PerfilPlayerScaled } from '../../components/PerfilPlayerscaled'

// Images
import Campo from '../../assets/images/campo.png'

export const SIGLA_POSICOES = {
  goleiro: 1,
  lateral: 2,
  zagueiro: 3,
  meioCampo: 4,
  atacante: 5
}
let timeCompleto = [
  {
    id: 1,
    posicao_id: SIGLA_POSICOES.goleiro,
    posicao: 'Goleiro',
    apelido: 'Fabio',
    clube_id: '',
    clube: 'Fluminense',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  },
  {
    id: 2,
    posicao_id: SIGLA_POSICOES.zagueiro,
    posicao: 'Zagueiro',
    apelido: 'Zagueiro',
    clube_id: '',
    clube: '',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  },
  {
    id: 3,
    posicao_id: SIGLA_POSICOES.zagueiro,
    posicao: 'Zagueiro',
    apelido: 'Zagueiro',
    clube_id: '',
    clube: '',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  },
  {
    id: 4,
    posicao_id: SIGLA_POSICOES.lateral,
    posicao: 'Lateral',
    apelido: 'Lateral',
    clube_id: '',
    clube: '',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  },
  {
    id: 5,
    posicao_id: SIGLA_POSICOES.lateral,
    posicao: 'Lateral',
    apelido: 'Lateral',
    clube_id: '',
    clube: '',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  },
  {
    id: 6,
    posicao_id: SIGLA_POSICOES.meioCampo,
    posicao: 'Meia',
    apelido: 'Meia',
    clube_id: '',
    clube: '',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  },
  {
    id: 7,
    posicao_id: SIGLA_POSICOES.meioCampo,
    posicao: 'Meia',
    apelido: 'Meia',
    clube_id: '',
    clube: '',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  },
  {
    id: 8,
    posicao_id: SIGLA_POSICOES.meioCampo,
    posicao: 'Meia',
    apelido: 'Meia',
    clube_id: '',
    clube: '',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  },
  {
    id: 9,
    posicao_id: SIGLA_POSICOES.atacante,
    posicao: 'Atacante',
    apelido: 'Atacante',
    clube_id: '',
    clube: '',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  },
  {
    id: 10,
    posicao_id: SIGLA_POSICOES.atacante,
    posicao: 'Atacante',
    apelido: 'Atacante',
    clube_id: '',
    clube: '',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  },
  {
    id: 11,
    posicao_id: SIGLA_POSICOES.atacante,
    posicao: 'Atacante',
    apelido: 'Atacante',
    clube_id: '',
    clube: '',
    fotoClube: '',
    fotoPlayer: '',
    isScaled: false
  }
]

export function Home() {
  const [athletes, setAthletes] = useState([])
  const [club, setClube] = useState([])
  const [positions, setPositions] = useState([])
  const [isModal, setIsModal] = useState(false)
  const [playerScaled, setPlayerScaled] = useState(timeCompleto)
  const [listPlayersModal, setListPlayersModal] = useState()
  const [posicaoIdSelect, setPosicaoIdSelect] = useState('')
  const [testando, setTeste] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        'https://api.cartola.globo.com/atletas/mercado'
      )
      const data = await response.json()

      setAthletes(data.atletas)
      setClube(data.clubes)
      setPositions(data.posicoes)
    }

    fetchApi()
  }, [])

  function handleSelectPlayer(posicao, id) {
    const listPlasyersSlect = athletes.filter(
      item => item.posicao_id === posicao
    )

    setListPlayersModal(listPlasyersSlect)
    setPosicaoIdSelect(id)
    setIsModal(true)
  }

  function handleScaled(apelido, posicao_id, clube, fotoPlayer, fotoClube) {
    const data = [...playerScaled] // imutabilidade

    let posicao_selecionada = data.findIndex(
      item => item.id === posicaoIdSelect
    )

    data[posicao_selecionada] = {
      ...data[posicao_selecionada],
      apelido,
      posicao_id,
      clube,
      fotoPlayer,
      fotoClube,
      isScaled: true
    }

    console.log(data)
    // console.log(filtro)
    setPlayerScaled(data)
    console.log(data)
  }

  return (
    <Container>
      <Header />
      <Content>
        <ContainerCampo>
          <ContentCampo>
            <BoxCampo>
              <img src={Campo} />
              {playerScaled.map((item, index) => (
                <PerfilPlayer
                  key={index}
                  urlPlayer={item?.fotoPlayer}
                  isChoose={item.isScaled}
                  posicao_id={item.posicao_id}
                  idPlayer={index + 1}
                  apelido={item.apelido}
                  onClick={() => handleSelectPlayer(item.posicao_id, item.id)}
                />
              ))}
            </BoxCampo>
            <BoxEscalation>
              <h2>Jogadores:</h2>
              <ContainerPerfilPlayers>
                {playerScaled.map((item, index) => (
                  <PerfilPlayerScaled
                    key={index}
                    name={item.apelido}
                    isChoose={item.isScaled}
                    urlPlayer={item.fotoPlayer}
                    urlCLube={item.fotoClube}
                    clube={item.clube}
                    posicao={item.posicao}
                  />
                ))}
              </ContainerPerfilPlayers>
            </BoxEscalation>
          </ContentCampo>
        </ContainerCampo>
      </Content>

      {isModal && (
        <ContainerModal onClick={() => setIsModal(false)}>
          {listPlayersModal.map((item, index) => (
            <Content key={index}>
              <div>
                <PerfilPlayerScaled
                  onClick={() =>
                    handleScaled(
                      item.apelido,
                      item.posicao_id,
                      club[item.clube_id].nome,
                      item?.foto.replace('FORMATO', '220x220'),
                      club[item.clube_id].escudos['60x60']
                    )
                  }
                  name={item.apelido}
                  isChoose
                  urlCLube={club[item.clube_id].escudos['60x60']}
                  clube={club[item.clube_id].nome}
                  posicao={positions[item.posicao_id]?.nome}
                  urlPlayer={item?.foto}
                />
              </div>
            </Content>
          ))}
        </ContainerModal>
      )}
    </Container>
  )
}
