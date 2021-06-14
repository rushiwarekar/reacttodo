import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ToDoList = (props) =>{
    return(
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden="ture" 
                onClick={()=>{
                    props.onSelect(props.id);
                }}>
                <DeleteForeverIcon /> </i>
                <li>{ props. text}</li>
            </div>
        </>
    );
};
 export default ToDoList;