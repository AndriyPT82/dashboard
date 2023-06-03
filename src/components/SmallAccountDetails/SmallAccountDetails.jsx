import s from './SmallAccountDetails.module.scss'
import james_franco from 'utils/images/james_franco.png'

function SmallAccountDetails() {
  return (
      <div className={s.container}>
        <img className={s.user_img} src={james_franco} alt="user logo" />
        <div className={s.info_block}>
          <h4>James Franco</h4>
          <p>Enterprice plane</p>
        </div>
      </div>
  );
}

export default SmallAccountDetails;
