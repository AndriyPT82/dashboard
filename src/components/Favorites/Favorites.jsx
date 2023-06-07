import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './Favorites.module.scss';
import { CardGallery, FilterContainer, Search } from 'components';

const links = ['paint', 'grout color'];

function Favorites() {
  const [activeField, setActiveField] = useState('Uploads')
  const uploads = useSelector(state => {
    return state.user.uploads || {}
  }
  )

  const handleActiveField = (e) => {
    const value = e.target.value
    setActiveField(value)
    console.log(` Show ${value} items`);
  }

  return (
    <>
      <FilterContainer>

        <div className={s.wrapper}>

          <h3>Favorites</h3>
          <Search />
        </div>
        <div className={s.toggle_container}>
          <div
            className={s.toggle}
            style={{
              left: activeField === 'Uploads' ? '1px' : '67px'
            }}

          ></div>
          <button
            className=""
            value="Uploads"
            onClick={handleActiveField}
            style={{ color: activeField === 'Uploads' ? '#fff' : 'rgb(214, 218, 222, 1)' }}
          >
            Uploads
          </button>

          <button
            className=""
            value="Catalog"
            onClick={handleActiveField}
            style={{ color: activeField === 'Catalog' ? '#fff' : 'rgb(214, 218, 222, 1)' }}>
            Catalog
          </button>
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

export default Favorites;