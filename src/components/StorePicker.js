// import React, {Fragment} from 'react';
import React from 'react';
import {getFunName} from "../helpers";



class StorePicker extends React.Component{

    myInput = React.createRef();

    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    
    goToStore = event => {
        // 1. stop the form from submitting
        // because the default behaviour of 
        // form is to submit to a server or
        // a backend somewhere.
        event.preventDefault();
        // 2. get text from that input

        //console.log(this.myInput.value.value);
        
        const storeName = this.myInput.current.value;
        //3. change page to /store-to-whatever-they-entered

        this.props.history.push(`/store/${storeName}`);

    //    alert('going to store')

    }




    render(){
        // return <p>Hello World!</p>
        
        return (
            
            // <Fragment></Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    {/* <h3 type="text" value="Enter a header"/> */}
                    <h2>Please Enter a Store</h2>
                    <input type="text" 
                    ref={this.myInput} 
                    required placeholder="Store Name" 
                    defaultValue={getFunName()} />
                    <button type="submit">Visit Store →</button>
                </form>  
        ); 
        
    }

}

export default StorePicker;