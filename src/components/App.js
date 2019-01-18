import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleCakes from "../sample-cakes";
//import cakes from "./Cakesdata";
import Cake from "./Cakes";
//import sampleFishes from "../sample-fishes";



class App extends React.Component{

    // setting the state can be done in 2 ways: property approach
    // or the state is initialised as an object in a constructor (){ super()... this.state = {}}
    // the below depicts the property approach
    
    state = {
        cakes: {},
        order: {}
    }

    addCake = (cake) =>{
        // take a copy of the  existing state
        const cakes = {...this.state.cakes}

        // add our new cake to the cakes variable
        cakes[`cake${Date.now()}`] = cake;

        // set the new fish object to state
        this.setState({ 
            // setState is actually an instruction which says "please update these states"
            // to use it one must have declared/ set a state.
            cakes:cakes
        });

    }


    addToOrder = key =>{
        
    // 1. take a copy of this.state
    const order = {...this.state.order};
    // 2. Add to order or update the number in order
    order[key] = order[key] + 1 || 1;  //order.cakes = order.cakes + 1 || 1
    // 3. call setState to update the state object
    this.setState({order: order});

    }


    loadSampleCakes = () =>{
        // alert("Loading the ol cakes yo!");
        this.setState =({
            cakes:sampleCakes
        });
    };




    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Today's Freshly Baked Cake" price = {200} />
                    {/* <Fish/> <Fish/> <Fish/> <Fish/> <Fish/> <Fish/> <Fish/> */}
                    <ul className="fishes">
                        {Object.keys(this.state.cakes).map(key =>
                                <Cake key={key} index={key} details={this.state.cakes[key]} addToOrder={this.addToOrder}/>
                        )}
                    </ul>
                </div>
                <Order /> 
                <Inventory addCake={this.addCake} loadSampleCakes = {this.loadSampleCakes}/>
            </div>       
        );
    }
}

export default App;