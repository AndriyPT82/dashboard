import s from './UploadsNav.module.scss';

const isActive = (query, value) => (
  `${s.link} ${query === value ? s.active : ''}`
);

const links = [
  'Tile', 'Carpet Slab', 'Carpet'
];


function UploadsNav({ title, searchParam, searchParams, setSearchParams }) {

  const currentQuery = (query) => setSearchParams({ query })

  return (
    <div className={s.container} >
      <h3>{title}</h3>
      <div className={s.links}>
        <button
          key={'all'}
          className={isActive(searchParam, null)}
          onClick={() => {
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

    </div>
  );
}

export default UploadsNav;