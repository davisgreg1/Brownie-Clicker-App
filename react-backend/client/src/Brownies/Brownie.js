import React from 'react'
import ReactInterval from 'react-interval'
import Modal from 'react-modal'

const styles ={
  img:{
    width: "200px",
    height: "300px"
  }
}

class Brownie extends React.Component{
  constructor(){
    super()

    this.state={
      count: 0,
      date: Date.now(),
      grandma: 0,
      factory: 0,
      temple: 0,
      laboratory: 0,
      grandmaPrice: 20,
      factoryPrice: 500,
      templePrice: 5000,
      laboratoryPrice: 100000,
      multiplerPrice: 100,
      multipler: 1,
      hasGrandma: false,
      hasFactory: false,
      hasTemple: false,
      hasLaboratory: false,
      isOpen: false
    }
  }

  handleOpenModal = () => {
    this.setState({ isOpen: !this.state.isOpen })
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
        count: count - templePrice,
        hasTemple: true,
        temple: temple + 1,
        templePrice: templePrice * temple
      })
    }
  }

  purchaseLaboratory = () =>{
    const { count, laboratory, laboratoryPrice, hasLaboratory} = this.state
    if(count < laboratoryPrice){
      console.log('YOU BROKE FAM')
    }
    else {
      this.setState({
        count: count - laboratoryPrice,
        hasLaboratory: true,
        laboratory: laboratory + 1,
        laboratoryPrice: laboratoryPrice * laboratory
      })
    }
  }

  purchaseMultipler = () =>{
    const { count, multipler, multiplerPrice } = this.state
    if(count < multiplerPrice){
      console.log('YOU BROKE BUY THAT')
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

  render(){
    const { count, grandma, factory, temple, hasGrandma, hasFactory, hasTemple, laboratory, hasLaboratory } = this.state

    return(
      <div>
        <ReactInterval
        timeout={3000}
        enabled={hasGrandma}
        callback={() => this.setState({ count: count + (10 * grandma)})}
        />
        <ReactInterval
        timeout={3000}
        enabled={hasFactory}
        callback={() => this.setState({ count: count + (100 * factory)})}
        />
        <ReactInterval
        timeout={3000}
        enabled={hasTemple}
        callback={() => this.setState({ count: count + (1000 * temple)})}
        />
        <ReactInterval
        timeout={3000}
        enabled={hasLaboratory}
        callback={() => this.setState({ count: count + (10000 * laboratory)})}
        />
        <div className='brownieDiv'>
          <img
          styles={styles.img}
          src='http://www.makeitlikeaman.com/wp-content/uploads/2014/03/Brownies-How-To-Make-Easily.png'
          alt='brownie'
          onClick={this.clickBrownie}
          />
          <p>BROWNIES: {this.state.count}</p>
          <p>MULTIPLER: {this.state.multipler}x!!!</p>
          <div>
          </div>
          <div>
            <button onClick={this.handleOpenModal}> Open Brownie Store </button>
                <Modal
                  isOpen={this.state.isOpen}
                  onRequestClose={this.handleOpenModal}
                  >
                  <button onClick={this.purchaseGrandma}>Grandma</button>
                  <button onClick={this.purchaseFactory}>Factory</button>
                  <button onClick={this.purchaseTemple}>Temple</button>
                  <button onClick={this.purchaseMultipler}>Multipler</button>
                  <button onClick={this.purchaseLaboratory}>Laboratory</button>
                  <button onClick={this.handleOpenModal}>CLOSE</button>
                  </Modal>
            </div>
            <div>
              <label>
                Grandmas:
                {grandma}
              </label>
              {" "}
              <label>
                Factories:
                {factory}
              </label>
              {" "}
              <label>
                Temples:
                {temple}
              </label>
              {" "}
              <label>
                Laboratories:
                {laboratory}
              </label>
              {" "}
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
