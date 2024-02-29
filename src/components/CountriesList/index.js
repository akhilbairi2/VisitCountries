import './index.css'

const CountriesList = props => {
  const {countriesList, onVisitBtn} = props
  const {name, isVisited, id} = countriesList
  const onVisit = () => {
    onVisitBtn(id)
  }
  const btnStyle = isVisited ? 'btn2' : 'btn1'
  const text = isVisited ? 'Visited' : 'Visit'

  return (
    <li className="li">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className={`${btnStyle}`}>{text}</p>
      ) : (
        <button type="button" className={`${btnStyle}`} onClick={onVisit}>
          {text}
        </button>
      )}
    </li>
  )
}
export default CountriesList
