import s from './Input.module.scss'

function Input({
  title,
  value='',
  placeholder=``,
  name='',
  id='',
  cls='',
  isDisabled=false,
  handleFocus,
  handleChange
}) {
  return (
    <div className={s.input_container}>
      <label htmlFor={id}>{title}</label>
      <input
        value={value}
        placeholder={placeholder}
        name={name}
        id={id}
        className={s[id]}
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
