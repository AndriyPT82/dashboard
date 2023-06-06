import { useSelector } from 'react-redux';
import s from './Favorites.module.scss';
import { CardGallery, FilterContainer } from 'components';


const links = ['paint', 'grout color'];

function Favorites() {

  const uploads = useSelector(state => {
    return state.user.uploads || {}
  }
  )

  return (
    <>
    <FilterContainer>
      <h3>Favorites</h3>
    </FilterContainer>
      {

        Object.keys(uploads).filter(key => links.includes(key)).map(key => (
          <CardGallery cards={uploads[key].list} title={uploads[key].name} />
        ))
      }
    </>
  );
}

export default Favorites;