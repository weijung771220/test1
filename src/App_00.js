import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hasData: false,
      data: './images/cat.gif',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hasData: true,
        data: '資料來了!',
      })
    }, 5000)
  }

  render() {
    if (!this.state.hasData) {
      return (
        <>
          <img src={this.state.data} alt=""></img>
        </>
      )
    }
    return (
      <>
        <h1>{this.state.data}</h1>
      </>
    )
  }
}

export default App
