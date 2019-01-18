import React from "react";
import AddCakeForm from './AddCakeForm';


class Inventory extends React.Component{

    render(){
        return(
            <div className="inventory">
                <h2>Inventory</h2>
                <AddCakeForm addCake={this.props.addCake}/>
                <button onClick={this.props.loadSampleCakes}>Load Sample Cakes</button>
            </div>
        )
    }
}

export default Inventory;