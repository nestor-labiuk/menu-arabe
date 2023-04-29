import './button.css'

function Button({ className, name, onClick }) {
  return (
    <button
      className={`button ${(className || '')}`}
      onClick={onClick}
      >{name}</button>
  )
}

export default Button
