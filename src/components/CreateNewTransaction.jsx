import { useState } from "react";

export default function CreateNewTransaction(){
    const transactionsAPI = 'http://localhost:8081/transactions/'
    const [name1, setFirstName] = useState('');
    
    return(
        <>
        <p>New Transaction</p>
        </>
    )
}