class Brownie extends React.Component{
  constructor(){
    super()

    this.state={
      count: 0,
      date: Date.now(),
      grandma: 0,
      factory: 0,
      temple: 0,
      grandmaPrice: 20,
      factoryPrice: 50000,
      templePrice: 500000,
      multiplerPrice: 750,
      multipler: 0,
      hasGrandma: false,
      hasFactory: false,
      hasTemple: false,
      grandmaMessage: '',
      factoryMessage: '',
      templeMessage: '',
      gameMessage: ''
    }
  }

  clickBrownie = () =>{
    const { count, multipler } = this.state

/* If multipler is not 0 aka falsey*/

    if(multipler){
      this.setState({
        count: count + (1 * multipler)
      })
    }
    else {
      this.setState({
        count: count + 1
      })
    }
  }


/*Sets timeout for passive powerups*/

  brownieGrandma = () =>{
    const { count, grandma, hasGrandma } = this.state
    if(hasGrandma){
      setInterval(this.setState({
        count: count + (4 * grandma)
      }), 2000)
    }
  }

  brownieFactory = () =>{
    const { count, factory, hasFactory } = this.state
    if(hasFactory){
      setInterval(this.setState({
        count: count + (100 * factory)
      }), 2000)
    }
  }

  brownieTemple = () =>{
    const { count, temple, hasTemple } = this.state
    if(hasFactory){
      setInterval(this.setState({
        count: count + (1000 * temple)
      }), 2000)
    }
  }

/*End of passive powerups*/

  brownieMultipler = () =>{
    const { multipler } = this.state
    this.setState({
      multipler: multipler + 1
    })
  }


/*Purchase powerup functions. Price is incremented by the price * the amount of the powerup you have*/

  purchaseGrandma = () =>{
    const { count, hasGrandma, grandma, grandmaPrice } = this.state
    if(count < grandmaPrice){
      console.log('YOU TOO BROKE FOR GRANDMA')
    }
    else if(!hasGrandma){
      this.setState({
        count: count - grandmaPrice,
        hasGrandma: true,
        grandma: 1,
        grandmaPrice: grandmaPrice * 2
      })
    }
    else {
      this.setState({
        count: count - grandmaPrice,
        hasGrandma: true,
        grandma: grandma + 1,
        grandmaPrice: grandmaPrice * grandma
      })
    }
  }

  purchaseFactory = () =>{
    const { count, hasFactory, factory, factoryPrice } = this.state
    if(count < factoryPrice){
      console.log('YOU TOO BROKE FOR FACTORY')
    }
    else if(!hasFactory){
      this.setState({
        count: count - factoryPrice,
        hasFactory: true,
        factory: 1,
        factoryPrice: factoryPrice * 2
      })
    }
    else {
      this.setState({
        count: count - factoryPrice,
        hasFactory: true,
        factory: factory + 1,
        factoryPrice: factoryPrice * factory
      })
    }
  }

  purchaseTemple = () =>{
    const { count, hasTemple, temple, templePrice } = this.state
    if(count < templePrice){
      console.log('YOU TOO BROKE FOR TEMPLE')
    }
    else if(!hasTemple){
      this.setState({
        count: count - templePrice,
        hasTemple: true,
        temple: 1,
        templePrice: templePrice * temple
      })
    }
    else {
      this.setState({
        count: count - factoryPrice,
        hasFactory: true,
        factory: factory + 1,
        factoryPrice: factoryPrice * factory
      })
    }
  }

  purchaseMultipler = () =>{
    const { count, multipler, multiplerPrice } = this.state
    if(count < multiplerPrice){
      console.log('YOU CAN'/T' BUY THAT')
    }
    else {
      this.setState({
        count: count - multiplerPrice,
        multipler: multipler + 1,
        multiplerPrice: multiplerPrice * multipler
      })
    }
  }
/*End of purchasing powerups*/

  grandmaMessage = () =>{
    const { grandma } = this.state
    if(grandma && grandma === 1){
      this.setState({
        grandmaMessage: 'Grandma starts making you delicious brownies!'
        gameMessage: 'You bought a grandma'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
    else if(grandma > 1 && grandma <= 20){
      this.setState({
        grandmaMessage: 'Your grandmas bake you brownies!'
        gameMessage: 'You bought a grandma'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
    else if(grandma > 20 && grandma <= 100){
      this.setState({
        grandmaMessage: 'Your army of grandmas make you brownies'
        gameMessage: 'You bought a grandma'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
    else {
      this.setState({
        grandmaMessage: 'Your legions of grandmas make you countless brownies'
        gameMessage: 'You bought a grandma'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
  }

  factoryMessage = () =>{
    const { factory } = this.state
    if(factory && factory === 1){
      this.setState({
        factoryMessage: 'Your factory starts making you delicious brownies!'
        gameMessage: 'You bought a factory'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
    else if(factory > 1 && factory <= 10){
      this.setState({
        factoryMessage: 'Your factories bake you brownies!'
        gameMessage: 'You bought a factory'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
    else if(factory > 10 && factory <= 50){
      this.setState({
        factoryMessage: 'Your vast network of factories bakes you all of the brownies'
        gameMessage: 'You bought a factory'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
    else {
      this.setState({
        factoryMessage: 'Your network of factories grows, clouding the land in smoke and batter'
        gameMessage: 'You bought a factory'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
  }

  templeMessage = () =>{
    const { temple } = this.state
    if(temple && temple === 1){
      this.setState({
        templeMessage: 'Your temple worshippers bake you brownies!'
        gameMessage: 'You bought a factory'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
    else if(temple > 1 && temple <= 5){
      this.setState({
        templeMessage: 'Your temples and its many worshippers bake you brownies!'
        gameMessage: 'You bought a factory'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
    else if(temple > 5 && temple <= 20){
      this.setState({
        templeMessage: 'Your army of brownie woshippers bake you brownies'
        gameMessage: 'You bought a factory'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
    else {
      this.setState({
        templeMessage: 'The gods take notice of your many temples and help you bake brownies'
        gameMessage: 'You bought a factory'
      })
      setTimeout(this.setState({
        gameMessage: ''
      }),3000)
    }
  }


  render(){
    return(
      <div>
        <div className='brownieDiv'>
          <img
          style={styles.img}
          src='http://www.makeitlikeaman.com/wp-content/uploads/2014/03/Brownies-How-To-Make-Easily.png'
          alt='brownie'
          onClick={this.clickBrownie}
          />
          <p>BROWNIES: {this.state.count}</p>
          <p>MULTIPLER: {this.state.multipler}x!!!</p>
          <div>
            <button onClick={this.purchaseGrandma} onClick={this.grandmaMessage}>Grandma</button>
            <button onClick={this.purchaseFactory} onClick={this.factoryMessage}>Factory</button>
            <button onClick={this.purchaseTemple} onClick={this.templeMessage}>Temple</button>
            <button onClick={this.purchaseMultipler}>Multipler</button>
          </div>
          <div>
            <h4>News Reel</h4>
            <p>{this.state.grandmaMessage}</p>
            <p>{this.state.factoryMessage}</p>
            <p>{this.state.templeMessage}</p>
            <p>{this.state.gameMessage}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Brownie
