import React from "react";


export default function PhoneNumberForm(){

    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const phoneNumber = form.elements['phone'].value;
        alert(phoneNumber); 
        console.log(phoneNumber);
    }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="phone">Enter your Phone Number</label>
            <input type="number" name="phone" id="phone" />
            <button type="submit">Submit</button>
        </form>
    )
}