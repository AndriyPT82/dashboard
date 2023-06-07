import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CardGallery, FilterContainer, Search, UploadsNav } from "../index";
import { useSelector } from "react-redux"

import s from './Uploads.module.scss'



function Uploads() {

  const [searchParams, setSearchParams] = useSearchParams()
  const searchParam = useMemo(() => searchParams.get('query'), [searchParams])

  const uploads = useSelector(state => {
    return state.user.uploads || {}
  }
  )

  const links = ['tile', 'carpet slab', 'carpet'];

  return (
    <>
      <FilterContainer >
        <div className={s.wrapper}>

          <UploadsNav
            title="Uploads"
            searchParam={searchParam}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />


          <Search />

        </div>

      </FilterContainer>

      {
        !!uploads && uploads[searchParam]
          ? <CardGallery cards={uploads[searchParam].list} title={uploads[searchParam].name} />
          : Object.keys(uploads).filter(key => links.includes(key)).map(key => (
            <CardGallery cards={uploads[key].list} title={uploads[key].name} />
          ))

      }
    </>
  );
}

export default Uploads;
