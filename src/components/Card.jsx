/* eslint-disable react/prop-types */
import location from "../assets/location.svg"
import map from "../assets/map.svg"


 
export default function Card(props) {
  return(
    <div className="card">
      <div className="card-img">
        <img src={`./public/images/${props.img}`} alt="Tokyo, Japan" title={props.loc} />
      </div>

      <div className="card-desc">
        <h2>{props.title}</h2>

        <div className="loc">
          <img src={location} alt="" />
          <p>&nbsp;{props.loc}</p>&nbsp;•&nbsp;<a className = "maps" href={props.map} target="_blank" rel="noreferrer">See on Google Maps&nbsp;<img src={map} alt="" /></a>
        </div>

        <p><strong>Expenses: </strong>&nbsp;{props.exp}</p>
        <p><strong>Languages:</strong>&nbsp;{props.lang}</p>

        <div className="desc">
          <p className="description">{props.desc}</p>
        </div>
      </div>
    </div>
  )
}