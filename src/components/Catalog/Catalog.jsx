import { useSelector } from 'react-redux';
import s from './Catalog.module.scss';
import { CardGallery, CatalogSelect, FilterContainer } from 'components';


const links = ['paint', 'grout color'];

function Catalog() {

  const uploads = useSelector(state => {
    return state.user.uploads || {}
  }
  )

  return (
    <>
    <FilterContainer>
      <h3>Catalog</h3>
      {/* <CatalogSelect /> */}
    </FilterContainer>
      {

        Object.keys(uploads).filter(key => links.includes(key)).map(key => (
          <CardGallery cards={uploads[key].list} title={uploads[key].name} />
        ))
      }
    </>
  );
}

export default Catalog;