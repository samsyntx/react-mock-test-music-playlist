import {Component} from 'react'
import {
  MainMusicPlayerContainer,
  MusicPlayerMainImageContainer,
  PlaylistMainHeading,
  PlaylistMainParagraph,
  SongsPlaylistContainer,
  SearchBoxContainerHeading,
  SearchInput,
} from './styledComponent'

class MusicPlaylist extends Component {
  render() {
    return (
      <MainMusicPlayerContainer>
        <MusicPlayerMainImageContainer>
          <PlaylistMainHeading>Ed Sheerna</PlaylistMainHeading>
          <PlaylistMainParagraph>Singer</PlaylistMainParagraph>
        </MusicPlayerMainImageContainer>
        <SongsPlaylistContainer>
          <SearchBoxContainerHeading>
            <PlaylistMainHeading>Songs Playlist</PlaylistMainHeading>
            <SearchInput type="search" placeholder="Search" />
          </SearchBoxContainerHeading>
        </SongsPlaylistContainer>
      </MainMusicPlayerContainer>
    )
  }
}

export default MusicPlaylist
