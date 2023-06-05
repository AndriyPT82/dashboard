import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CardGallery, FilterContainer } from "../index";
import s from './Uploads.module.scss';
import { useSelector } from "react-redux";

const isActive = (query, value) => (
  `${s.link} ${query === value ? s.active : ''}`
);

const links = [
  'Tile', 'Paint', 'Hardwood', 'Carpet Slab', 'Vinyl'
];
function Uploads() {

  const [searchParams, setSearchParams] = useSearchParams()

  const currentQuery = (query) => setSearchParams({ query })
  const searchParam = useMemo(() => searchParams.get('query'), [searchParams])


  const uploads = useSelector(state => {
    return state.user.uploads || {}
  }
  )

  console.log(searchParam);

  return (
    <>
      <div className={s.links}>
        <button
          key={'all'}
          className={isActive(searchParam, null)}
          onClick={() => {
            console.log(searchParam);
            searchParams.delete(`query`)
            setSearchParams(searchParams);
          }}
        >
          {'All'}
        </button>
        {
          links.map(title => {
            const lowerTitle = title.toLowerCase()
            return <button
              key={title}
              className={isActive(searchParam, lowerTitle)}
              onClick={() => currentQuery(lowerTitle)}
            > {title} </button>
          })
        }
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
