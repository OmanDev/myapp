import React from "react";

const UpdateComp = OriginComp =>{
    class NewComp extends React.Component{
        render(){
            return <OriginComp name ="The user"/>;
        }
    }
    return NewComp;
}
export default UpdateComp