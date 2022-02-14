import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'
import IdleTime from '../IdleTime'
import { useLogin } from '../../Context/LoginProvider';
//import ReactDOM from 'react-dom';

export default function Dashboard() {
    const {loginUsername} = useLogin();

    return (
        <div id="dashboard-container">
            <div id="dashTitle">
                <h1 className="pageTitle">Dashboard</h1>
                <h3 className="title">Hello, {loginUsername}</h3>
            </div>
                <IdleTime/>
            <div id="acctCards">
                <AccountByUserID />
                
            </div>      
        </div>
    )
}