import {Container, Content} from './styles'

// Components
import {Header} from '../../components/Header'

// Images
import Campo from '../../assets/images/campo.png'

export function Home() {
  return (
    <Container>
      <Header/>
      <Content>
        <img src={Campo}/>
      </Content>
    </Container>
  )
} 