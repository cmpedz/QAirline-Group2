import React from "react";
class ClassTypeChoice extends React.Component{
    render(){
        const {label_name} = this.props;
        return(
            <div class="flex flex-row justify-between py-2">
                <label>{label_name}</label>
                <input type="radio" class="h-5 w-5" name="class_type"></input>
            </div>
        );
    }
}

export default ClassTypeChoice;