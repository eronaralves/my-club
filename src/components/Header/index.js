import {Container, Content} from './styles'

// Images
import Logo from '../../assets/images/logo.png'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo}/>
      </Content>
    </Container>
  )
} 