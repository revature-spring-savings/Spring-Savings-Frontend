import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function ViewAllOutgoingTransactionsByAccountID(props) {
    const [transactions, setTransactions] = useState([]);
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
        axios.get(`http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/transactions/accountID/${accountID}`)
            .then((response) => {
                // console.log(response.data);
                setTransactions(response.data);
            })
    }, []);

    const withdrawTransactions = transactions.slice(pageVisited, pageVisited + transactionsPerPage).map(t => {
        if (t.transactionType === "WITHDRAW" || t.transactionType === "withdraw") {
            return (
                <>
                    <tr>
                        <td>{t.transactionID}</td>
                        <td>${t.amount}</td>
                        <td>{t.transactionDate}</td>
                        <td>{t.transactionNote}</td>
                    </tr>
                </>
            )
        }
    })

    return (
        <>
            <table class="transactionsTable">
                <thead>
                    <tr>
                    <th id="tid">ID</th>
                        <th id="amt">Amount</th>
                        <th id="tdate">Date</th>
                        <th id="tnote">Note</th>
                    </tr>
                </thead>
                {withdrawTransactions}
            </table>
            <div><center>
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
        </center>
            </div>
        </>
    )
}