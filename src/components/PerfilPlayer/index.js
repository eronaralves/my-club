import {ContainerPlayer, DescriptionPlayer} from './styles'


export function PerfilPlayer(props) {

  return (
    <ContainerPlayer posicao={props.item.posicao_id}>
        <img src={props.item.foto.replace('FORMATO', "220x220")}/>
        <DescriptionPlayer>
          {/* <img src={club[item.clube_id].escudos['30x30']}/> */}
          <h2>{props.item.apelido}</h2>
        </DescriptionPlayer>   
      </ContainerPlayer>
  ) 
}