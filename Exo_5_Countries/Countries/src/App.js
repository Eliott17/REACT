import React from "react"
import "./bootstrap/dist/css/bootstrap.min.css"
import Button from "./Component/Button.js"
import Card from "./Component/Card";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      name: "",
      flag: "",
      capital: "",
      region: "",
      population: "",
    }
  }

  componentDidMount() {

    fetch("https://restcountries.eu/rest/v2/name/germany")
      .then((res) => res.json())
      .then((data) => {
        const country = data[0]
        this.setState({
          name: country.name,
          flag: country.flag,
          capital: country.capital,
          region: country.region,
          population: country.population,
        })
      })
  }

  getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((res) => res.json())
      .then((data) => {
        const country = data[0]
        this.setState({
          name: country.name,
          flag: country.flag,
          capital: country.capital,
          region: country.region,
          population: country.population,
        })
      })
  }

  render() {

    return (
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Country Selector :</h1>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "50px" }}>
          <div style={{ display: "flex", justifyContent: "space-around", width: "900px" }}>
            <Button onClick={() => this.getCountry("france")} >France</Button>
            <Button onClick={() => this.getCountry("brazil")} >Brazil</Button>
            <Button onClick={() => this.getCountry("croatia")} >Croatia</Button>
            <Button onClick={() => this.getCountry("germany")} >Germany</Button>
            <Button onClick={() => this.getCountry("Afghanistan")} >Afghanistan</Button>
            <Button onClick={() => this.getCountry("Montenegro")} >Montenegro</Button>
            <Button onClick={() => this.getCountry("Nepal")} >Nepal</Button>
            <Button onClick={() => this.getCountry("luxembourg")} >Luxembourg</Button>
            <Button onClick={() => this.getCountry("surinam")} >Surinam</Button>
          </div>
        </div>
        <Card info={this.state} />
      </div>
    )
  }
}

export default App;