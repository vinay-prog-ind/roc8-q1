import { useState } from "react";

export async function FetchAllEmails (){

    const [emails, setEmails] = useState([]);

    const url = "https://flipkart-email-mock.vercel.app/";

    const data = await fetch(url);
    const response = await data.json();
    
    return response;
} 