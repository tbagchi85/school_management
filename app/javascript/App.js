import React, { Component } from "react";

import Footer from './components/Navigation/Footer/Footer'
import Header from './components/Navigation/Header/Header'

class App extends Component {
  render(){
    return(
      <main className='main-wrapper'>
        <Header />
        <div className='padding_wrapper'>{this.props.children}</div>
        <Footer />
      </main>
    )
  }
}

export default App
