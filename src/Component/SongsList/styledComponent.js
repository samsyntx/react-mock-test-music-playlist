import styled from 'styled-components'

export const SongsListItemComplete = styled.li`
  margin: 20px 0px 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
`

export const SongsListContainerImageContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SongsListImage = styled.img`
  width: 150px;
  margin-right: 10px;
`

export const SongsListTitleContainer = styled.div`
  margin-right: 5px;
`

export const SongsListHeading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  @media all and (min-width: 700px) {
    font-size: 30px;
  }
`

export const SongsListCategory = styled.p`
  color: #3b82f6;
  font-size: 15px;
  font-weight: 500;
  @media all and (min-width: 700px) {
    font-size: 20px;
  }
`
export const SongsListDeleteDuration = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SongsListTime = styled.p``

export const SongsListDeleteButton = styled.button`
  margin-left: 15px;
  border: none;
  background: none;
  color: white;
`
