import styled from 'styled-components'

export const Container = styled.div`
  width: 401px;
  height: 85px;

  display: flex;
  justify-content: space-between;
  gap: 16px;

  padding-right: 18px;
  border-radius: 5px;
  overflow: hidden;

  margin-bottom: 8px;

  background-color: #fff;

  @media(max-width: 430px) {
    width: 100%;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  gap: 8px;

  & > img {
    width: 88px;
    height: 88px;
  }

`

export const BoxInfoPlayer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > span {
    text-align: left;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 500;
    color: #4A5860;
  }
`

export const BoxInfoClube = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  span {
    font-size: 13px;
    color: #959FA8; 
  }

  img {
    width: 15px;
    height: auto;
  }
`

export const ContentPosicao = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    background-color: #2DCC70;
  }

  span {
    color: #959FA8;
    font-size: 12px;
  }
  
`