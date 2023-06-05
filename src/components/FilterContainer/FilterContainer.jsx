
import s from './FilterContainer.module.scss';



function FilterContainer({children}) {

  return (
    <div className={s.container} >
      {children}
    </div>
  );
}

export default FilterContainer;