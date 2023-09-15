import Earth from "../assets/earth.svg"

export default function Header() {
  return (
    <div id="header">
      <img src={Earth} alt="" />
      <h1>My Travel Bucket List.</h1>
    </div>
  )
}