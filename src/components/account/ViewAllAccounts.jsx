import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

export default function ViewAllAccounts() {
    const [allAccounts, setAllAccounts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/accounts")
            .then((response) => {
                console.log(response.data);
                setAllAccounts(response.data);
            })
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Account ID#</th>
                        <th>User ID#</th>
                        <th>Transaction ID#</th>
            
                    </tr>
                </thead>
                {allAccounts.map(d => {
                    return (
                        <tr>
                            <td>{d.accountID}</td>
                            <td>{d.userID}</td>
                            <td>{d.transactionID}</td>
                           
                        </tr>
                    )
                })}
            </table>
        </>
    )
}
