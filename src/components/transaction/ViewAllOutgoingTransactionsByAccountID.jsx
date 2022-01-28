import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function ViewAllOutgoingTransactionsByAccountID(props) {
    const [transactions, setTransactions] = useState([]);
    const [userID, setUserID] = useState(2);
    const [accountID, setAccountID] = useState(props.accountID);
    const [pageNumber, setPageNumber] = useState(0);

    // Jeremy: conditionally render ONLY withdraws on this page pls
    const transactionsPerPage = 5;
    const pageVisited = pageNumber * transactionsPerPage;

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const pageCount = Math.ceil(transactions.length / transactionsPerPage);

    useEffect(() => {
        axios.get(`http://localhost:8081/transactions/accountID/${accountID}`)
            .then((response) => {
                console.log(response.data);
                setTransactions(response.data);
            })
    }, []);

    return (
        <>
            <table class="transactionsTable">
                <thead>
                    <tr>
                        <th>Transaction #</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Note</th>
                    </tr>
                </thead>
                {transactions.slice(pageVisited, pageVisited + transactionsPerPage).map(d => {
                    return (
                        <tr>
                            <td>{d.transactionID}</td>
                            <td>${d.amount}</td>
                            <td>{d.transactionDate}</td>
                            <td>{d.transactionNote}</td>
                        </tr>
                    )
                })}
            </table>
            <div>
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisable"}
            activeClassName={"paginationActive"}
        />
            </div>
        </>
    )
}