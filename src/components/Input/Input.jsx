import s from './Input.module.scss'

function Input({
  title,
  type='text',
  value='',
  placeholder='',
  name='',
  id='',
  isDisabled=false,
  handleFocus,
  handleChange
}) {
  return (
    <div className={s.input}>
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        id={id}
        style={{
          // borderColor: checkForError(errors, 'firstName')
        }}
        disabled={isDisabled}
        onFocus={handleFocus}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
