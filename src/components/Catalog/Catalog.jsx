import { useSelector } from 'react-redux';
import s from './Catalog.module.scss';
import { CardGallery, CatalogSelect, FilterContainer } from 'components';


const brands = ['Apple', 'Google', 'Ford', 'Trek', 'Rolex']
const types = ['Tile', 'Carpet Slab', 'Hardwood', 'Vinyl', 'Paint']

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
        <div className={s.container}>
          <CatalogSelect title={'Brand'} data={brands} id={'brand'}/>
          <CatalogSelect title={'Type'} data={types} id={'type'}/>
        </div>

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