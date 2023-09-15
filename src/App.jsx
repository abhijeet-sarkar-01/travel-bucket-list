import Header from "./components/Header.jsx"
import Card from "./components/Card.jsx"
import Footer from "./components/Footer.jsx"
import Data from "../src/Data.jsx"

export default function App() {

  const cards = Data.map(item => {
    return (
      <Card 
        key = {item.id}
        img = {item.imageURL}
        title = {item.title}
        loc = {item.location}
        map = {item.mapsURL}
        exp = {item.expenses}
        lang = {item.language}
        desc = {item.description}
      />
    )
  })

  return (
    <>
      <Header />
      <section className="card-list">{cards}</section>
      <Footer />
    </>
  )
}

