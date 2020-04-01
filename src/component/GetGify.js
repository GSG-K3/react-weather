import React, { Component } from 'react';
class GetGify extends Component {
   
    
    render() { 
         const {src}= this.props;
        return <div className="gifContainr">
            {
                <img src={this.props.src}/>
                // .map((src)=>{
                //     {}
                // })
            }
        </div>






   


    }

}
export default GetGify;