import { useNavigate } from 'react-router-dom';
import s from './CatalogSelects.module.scss';



function CatalogSelects() {

  const navigation = useNavigate()

  return (
    <li className={s.link_wrapper} key={'index'}>
      <button
      // to={path}
      className={s.link}
      // className={({ isActive }) => handleSelectedLink(isActive, 'sidebar__link')}
      // style={{ backgroundImage: `url(${icon})` }}
      >
        {/* {title} */}
        fdsdsdfsdfsd
      </button>
    </li>

  );
}

export default CatalogSelects;