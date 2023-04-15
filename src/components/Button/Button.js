import './button.css'

function Button(props) {
  return (
    <button className={`button ${(props.className || '')}`}>{props.name}</button>
  )
}

export default Button
