import {AiFillDelete} from 'react-icons/ai'

import {
  SongsListItemComplete,
  SongsListContainerImageContent,
  SongsListImage,
  SongsListTitleContainer,
  SongsListHeading,
  SongsListCategory,
  SongsListTime,
  SongsListDeleteButton,
  SongsListDeleteDuration,
} from './styledComponent'

const SongsList = props => {
  const {eachItemDetail} = props
  const {id, imageUrl, name, genre, duration} = eachItemDetail

  return (
    <SongsListItemComplete>
      <SongsListContainerImageContent>
        <SongsListImage src={imageUrl} alt={id} />
        <SongsListTitleContainer>
          <SongsListHeading>{name}</SongsListHeading>
          <SongsListCategory>{genre}</SongsListCategory>
        </SongsListTitleContainer>
      </SongsListContainerImageContent>
      <SongsListDeleteDuration>
        <SongsListTime>{duration}</SongsListTime>
        <SongsListDeleteButton>
          <AiFillDelete />
        </SongsListDeleteButton>
      </SongsListDeleteDuration>
    </SongsListItemComplete>
  )
}

export default SongsList
