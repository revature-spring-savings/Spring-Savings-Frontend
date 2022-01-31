import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'
import IdleTime from '../IdleTime'

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <div id="dashTitle">
                <h1 className="pageTitle">Dashboard</h1>
            </div>
                <IdleTime/>
            <div id="acctCards">
                <AccountByUserID />
            </div>
        </div>
    )
}