import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './Catalog.module.scss';
import { CardGallery, CatalogSelect, FilterContainer } from 'components';


const titleBrands = ['Apple', 'Google', 'Ford', 'Trek', 'Rolex']
const titleTypes = ['Tile', 'Carpet Slab', 'Hardwood', 'Vinyl', 'Paint']

const brands = {
  'Apple': {
    name: "Apple",
    list:[
    'product', 'product', 'product', 'product',
  ]},
  'Google': {
    name: "Google",
    list:[
    'product', 'product', 'product', 'product',
  ]},
  'Ford': {
    name: "Ford",
    list:[
    'product', 'product', 'product', 'product',
  ]},
  'Trek': {
    name: "Trek",
    list:[
    'product', 'product', 'product', 'product',
  ]},
  'Rolex': {
    name: "Rolex",
    list:[
    'product', 'product', 'product', 'product',
  ]}
}
const types = {
  'Tile': {
    name: "Tile",
    list:[
    'product', 'product', 'product', 'product',
  ]},
  'Carpet Slab': {
    name: "Carpet Slab",
    list:[
    'product', 'product', 'product', 'product',
  ]},
  'Hardwood': {
    name: "Hardwood",
    list:[
    'product', 'product', 'product', 'product',
  ]},
  'Vinyl': {
    name: "Vinyl",
    list:[
    'product', 'product', 'product', 'product',
  ]},
  'Paint': {
    name: "Paint",
    list:[
    'product', 'product', 'product', 'product',
  ]}
}

const links = ['paint', 'grout color'];

function Catalog() {

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const uploads = useSelector(state => {
    return state.user.uploads || {}
  }
  )

  return (
    <>
      <FilterContainer>
        <h3>Catalog</h3>
        <div className={s.container}>
          <CatalogSelect
            title={'Brand'}
            data={titleBrands}
            id={'brand'}
            selected={selectedBrands}
            setSelected={setSelectedBrands }
          />
          <CatalogSelect
            title={'Type'}
            data={titleTypes}
            id={'type'}
            selected={selectedTypes}
            setSelected={setSelectedTypes}

          />
        </div>

      </FilterContainer>
      {

        selectedBrands.map((key => (
          <CardGallery cards={brands[key].list} title={brands[key].name} />
        )))
      }
      {
        selectedTypes.map((key => (
          <CardGallery cards={types[key].list} title={types[key].name} />
        )))

        // Object.keys(uploads).filter(key => links.includes(key)).map(key => (
          //   <CardGallery cards={uploads[key].list} title={uploads[key].name} />
          // ))
        }

    </>
  );
}

export default Catalog;