import React from "react";


 
// stateless functional component approach to creating a components

const Header = props =>(
    
       <header className="top">
                <h1>Day
                    <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">The</span>
                    </span> 
                    Bake
                </h1>
                    <h3 className="tagline">
                        <span>{props.tagline}</span>
                    </h3>
        </header>
  
);



// class Header extends React.Component{

//     render(){
//         return(
//             <header className="top">
//                 <h1>Catch 
//                     <span className="ofThe">
//                     <span className="of">of</span>
//                     <span className="the">The</span>
//                     </span> 
//                     Day
//                 </h1>
//                     <h3 className="tagline">
//                         {/* <span>Today's Fresh Produce</span> */}
//                         <span>{this.props.tagline}</span>
//                         {/* this refers to the component instance. The component here is Header.js */}
//                         {/*and the Header  component tag  is in App.js component  */}
//                     </h3>
//             </header>
            
//         )
//     }
// }

export default Header;