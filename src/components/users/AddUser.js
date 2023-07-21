import React from "react";
import {useState} from 'react';
 import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import Error from '../UI/Error';

function AddUser(props){
    const[enteredUname,setEnteredUname] =useState('');
    const[enteredAge,setEnteredAge]=useState('');
    const[error,setError]=useState();

    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredAge.trim().length ===0 || enteredUname.trim().length===0){
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
        
        props.onAddUser(enteredUname,enteredAge);
        setEnteredUname('');
        setEnteredAge('');
    }
    const myErrorHandler =()=>{
        setError(null);
    };
    function changeHandler (event){
        setEnteredUname(event.target.value);
        
    };
    function ageChangeHandler (event){
        setEnteredAge(event.target.value);
    };
    return (
        <div>
            {error && <Error title={Error.title} message={error.message} onConfirm={myErrorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username :</label>
                    <input id="username" type="text" value={enteredUname} onChange={changeHandler} />

                    <label htmlFor="age">Age(Years) :</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </div>
        
    )
};
export default AddUser;