import axios from "axios";

const options = {
    method: 'POST',
    url: 'https://otp.dev/api/verify/',
    headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Apikey {SHOUTOUT APIKEY}',
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'shoutout-otp1.p.rapidapi.com'
    },
    // data: {
    //     content: {
    //         sms: 'Hi Duke! Your code is {{code}}'
    //     },
    //     destination: '94777123456',
    //     source: 'ShoutDEMO',
    //     transport: 'sms'
    // }
};

const sendOTP = axios.create({
    ...options
})


export default sendOTP;


