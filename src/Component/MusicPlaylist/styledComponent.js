import styled from 'styled-components'

export const MainMusicPlayerContainer = styled.div``

export const MusicPlayerMainImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  background-position: center center;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
`
export const PlaylistMainHeading = styled.h1`
  color: white;
`

export const PlaylistMainParagraph = styled.p`
  color: white;
`
export const SongsPlaylistContainer = styled.div`
  background-color: #152850;
  min-height: 50vh;
  padding: 20px;
`
export const SearchBoxContainerHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const SearchBoxAndIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0.1px solid #cbd5e1;
  color: #cbd5e1;
  border-radius: 10px;
  padding: 5px;
`

export const SearchInput = styled.input`
  outline: none;
  width: 250px;
  background: none;
  border: none;
  padding: 5px;
  color: #cbd5e1;
`
export const SongsUnOrderListContainer = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 30px 0px 25px 0px;
`
