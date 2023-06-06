import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CardGallery, FilterContainer } from "../index";
import { useSelector } from "react-redux";
import UploadsNav from "components/UploadsNav/UploadsNav";



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
        <UploadsNav
          title="Uploads"
          searchParam={searchParam}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
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
