import React from "react";
import {useState} from 'react';
 import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";


function AddUser(props){
    const[enteredUname,setEnteredUname] =useState('');
    const[enteredAge,setEnteredAge]=useState('');

    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredAge.trim().length ===0 || enteredUname.trim().length===0){
            return;
        }
        if(+enteredAge<1){
            return;
        }
        
        props.onAddUser(enteredUname,enteredAge);
        setEnteredUname('');
        setEnteredAge('');
        

    }
    function changeHandler (event){
        setEnteredUname(event.target.value);
        
    }
    function ageChangeHandler (event){
        setEnteredAge(event.target.value);
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username :</label>
                <input id="username" type="text" value={enteredUname} onChange={changeHandler} />

                <label htmlFor="age">Age(Years) :</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

                <Button type="submit" >Add User</Button>
            </form>
        </Card>
        
    )
};
export default AddUser;