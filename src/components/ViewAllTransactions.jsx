export default function ViewAllTransactions() {
    //instead of showing description, can show green or red according to whether it is deposit or withdraw
    //list by most recent date
    const transactionsAPI = 'http://localhost:8081/transactions/'

    axios.get(inventoryAPI)
        .then((response) => {
            displayTransactions(response.data);
        })

    function displayTransactions(data) {

        const element = (

            <table>
                <thead>
                    <tr>
                        <th>Transaction #</th>
                        <th>User</th>
                        <th>Account #</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Note</th>
                    </tr>
                </thead>

                {data.map(d => {
            return (
              <tr>
                <td>{d.transactionID}</td>
                <td>{d.userID}</td>
                <td>{d.accountID}</td>
                <td>${d.amount}</td>
                <td>{d.transactionDate}</td>
                <td>{d.transactionType}</td>
                <td>{d.transactionNote}</td>
              </tr>
            )         
        })}
            </table>
                );
        ReactDOM.render(element, document.getElementById('datahere'));
}


return(
    <>
        <div id="datahere"></div>
    </>
)







}