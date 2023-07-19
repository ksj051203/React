import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const adduserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;

        }
        if (+enteredAge < 1) {
            return;
        }

        const UserInfo = {
            id: Math.random().toString(),
            name: enteredUsername,
            age: enteredAge
        }
        props.userInformation(UserInfo)
        setEnteredUsername('');
        setEnteredAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const AgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);

    }


    return (
        <Card className={classes.input}>
            <form onSubmit={adduserHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />

                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={AgeChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}
export default AddUser;