import { CardGallery, FilterContainer } from "components";
import { useSelector } from "react-redux";

function Textures() {

  const uploads = useSelector(state => {
    return state.user.uploads || {}
  }
  )

  console.log(uploads);


  return (
    <>
      <FilterContainer >

        <h3>Textures</h3>
      </FilterContainer>
      {<>
        <CardGallery cards={uploads['tile'].list} title={uploads['tile'].name} />
        <CardGallery cards={uploads['carpet slab'].list} title={uploads['carpet slab'].name} />
      </>
      }
    </>
  );
}

export default Textures;
