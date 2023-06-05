import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CardGallery, FilterContainer } from "../index";
import s from './Uploads.module.scss';
import { useSelector } from "react-redux";

const isActive = (query, value) => (
  `${s.link} ${query === value ? s.active : ''}`
);

const links = [
  'All', 'Tile', 'Paint', 'Hardwood', 'Carpet Slab', 'Vinyl'
];

function Uploads() {

  const [searchParams, setSearchParams] = useSearchParams()

  const currentQuery = (query) => setSearchParams({ query })
  const searchParam = useMemo(() => searchParams.get('query'), [searchParams])


  useEffect(() => {
    currentQuery('all')
    // currentQuery(links[0].toLowerCase())
  }, [])

  const uploads = useSelector(state => {
    console.log(searchParam, state);
    return state.user.uploads || {}
  }
  )



  return (
    <>
      <div className={s.links}>
        {links.map(title => {
          const lowerTitle = title.toLowerCase()
          return <button
            key={title}
            className={isActive(searchParam, lowerTitle)}
            onClick={() => currentQuery(lowerTitle)}
          > {title} </button>
        })}
      </div>

      {/* <FilterContainer > */}
        {/* <>
          {links.map(title => {
            const lowerTitle = title.toLowerCase()
            return <button
              key={title}
              className={isActive(searchParam, lowerTitle)}
              onClick={() => currentQuery(lowerTitle)}
            > {title} </button>
          })}
        </> */}
      {/* </FilterContainer> */}
      {
        !!uploads &&
          uploads[searchParam]
          ? <CardGallery cards={uploads[searchParam].list} title={uploads[searchParam].name} />
          : Object.values(uploads).map(obj => (
            <CardGallery cards={obj.list} title={obj.name} />
          ))
      }
    </>
  );
}

export default Uploads;
