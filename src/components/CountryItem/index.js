import './index.css'

const CountryItem = props => {
  const {countryItem, onRemoveBtn} = props
  const {name, imageUrl, id} = countryItem
  const onRemove = () => {
    onRemoveBtn(id)
  }
  return (
    <li className="li-container2">
      <img src={imageUrl} alt="thumbnail" className="img" />
      <div className="name-container">
        <p className="name">{name}</p>
        <button type="button" className="remove-btn" onClick={onRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default CountryItem
