import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CardGallery } from "../index";
import s from './Saved.module.scss';

const isActive = (query, value) => (
  `${s.link} ${query === value ? s.active : ''}`
);

const links = ['All', 'Templated', 'Downloads']


function Saved({ cards, title = "Saved" }) {

  const [searchParams, setSearchParams] = useSearchParams()

  const currentQuery = (query) => setSearchParams({ query })
  const searchParam = useMemo(() => searchParams.get('query'), [searchParams])

  useEffect(() => {
    currentQuery(links[0].toLowerCase())
  }, [])

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
      <CardGallery cards={cards} title="Saved Tile" />
      <CardGallery cards={cards} title="Saved Rooms" />
    </>
  );
}

export default Saved;
