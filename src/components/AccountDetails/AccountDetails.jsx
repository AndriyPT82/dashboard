import Input from 'components/Input/Input';
import s from './AccountDetails.module.scss'
import { SmallAccountDetails } from 'components';


function AccountDetails() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Account Details</h2>
      <div className={s.user_card}>
        <SmallAccountDetails />
      </div>
      <div className={s.form}>
        <div className={s.user_data}>
          <Input title={"First Name"} value={"James"} isDisabled={true} />
          <Input title={"Last Name"} value={"Franko"} isDisabled={true} />
          <Input title={"Email"} value={"james@gmail.com"} isDisabled={true} />
          <Input title={"Phone"} value={"310-685-3335"} isDisabled={true} />
        </div>
        <button onClick={() => console.log('redirect to edite page')}>Edit</button>
      </div>
      <div className={s.pricing_plans_block}>
        <h2>Pricing Plans</h2>
        <p>It's still under development</p>
      </div>
    </div>
  );
}

export default AccountDetails;
