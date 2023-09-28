import React from "react";
import sendOTP from "../SendOTP/sendotp";

export default function PhoneNumberForm() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const phoneNumber = form.elements['phone'].value;
        console.log(phoneNumber);
        try {
            const data = {
                content: {
                    sms: 'Hi ! Your code is {{code}}'
                },
                destination: phoneNumber,
                source: 'ShoutDEMO',
                transport: 'sms'
            }
            const response = await sendOTP.request(data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="phone">Enter your Phone Number</label>
            <input type="number" name="phone" id="phone" />
            <button type="submit">Submit</button>
        </form>
    )
}