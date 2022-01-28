import  ViewAllTransactions  from '../transaction/ViewAllTransactionsByUserID'
import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'
import IdleTime from '../IdleTime'
import { useContext } from 'react';
import { ThemeContext } from '../Themes/Themes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
 



export default function Dashboard(){
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    console.log("theme",theme);

    return(
        <>
            <div id="acctCards">
                <h1 class="pageTitle">Dashboard</h1>
                <h3 class="title">Hello, User 2!</h3>
                <AccountByUserID />
                <br/><br/>
            </div>
            <div id="latestTransactions">
                <h3 class="title">Recent Transactions</h3>
                <ViewAllTransactions />
                <p onClick={toggleTheme}><FontAwesomeIcon icon={faLightbulb} style={{backgroundColor:"white",color:"orange"}}></FontAwesomeIcon></p>
                <IdleTime/>
                
            </div>
        </>
    )
}