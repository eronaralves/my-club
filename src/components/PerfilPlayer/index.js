import {ContainerPlayer, DescriptionPlayer} from './styles'
import PlayerVazio from '../../assets/images/player-vazio.png'


export function PerfilPlayer(props) {
  const urlPlayer = (props.urlPlayer?.replace("FORMATO", "220x220"))
  return (
    <ContainerPlayer {...props} posicao={props.posicao_id} idPlayer={props.idPlayer}>
      {!props.isChoose ? <img src={PlayerVazio} alt=""/> : <img src={urlPlayer}/>}
        
        {/* <img src={props.item.foto.replace('FORMATO', "220x220")}/> */}
        <DescriptionPlayer>
          {/* <img src={club[item.clube_id].escudos['30x30']}/> */}
          <h2>{props.apelido}</h2>
        </DescriptionPlayer>   
      </ContainerPlayer>
  ) 
}