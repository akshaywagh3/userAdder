import React from "react";
import {useState,useRef} from 'react';
 import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import Error from '../UI/Error';

function AddUser(props){
    const nameRef=useRef();
    const ageRef=useRef();
    const[error,setError]=useState();
 
    const addUserHandler = (event)=>{
        event.preventDefault();
        const enteredName=nameRef.current.value;
        const enteredAge=ageRef.current.value;
        if(enteredAge.trim().length ===0 || enteredName.trim().length===0){
            setError({
                title: "invalid Input",
                message: "Please Enter valid name and age"
            });
            return;
        }
        if(+enteredAge<1){
            setError({
                title: "invalid Input",
                message: "Please Enter valid  age (>0)"
            });
            return;
        }
        
        props.onAddUser(enteredName,enteredAge);
        nameRef.current.value=''; //not good method to reset values so,should not do this always
        ageRef.current.value='';
    
    }
    const myErrorHandler =()=>{
        setError(null);
    };
    

    return (
        <div>
            {error && <Error title={Error.title} message={error.message} onConfirm={myErrorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username :</label>
                    <input id="username" type="text"  ref={nameRef} />

                    <label htmlFor="age">Age(Years) :</label>
                    <input id="age" type="number"  ref={ageRef} />

                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </div>
        
    )
};
export default AddUser;