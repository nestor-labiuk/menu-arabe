import './button.css'

function Button({ className, name, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`button ${(className || '')}`}
      onClick={onClick}
      >{name}</button>
  )
}

export default Button
