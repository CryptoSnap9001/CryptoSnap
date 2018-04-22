import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import KioskComponent from './Kiosk';
import InfoComponent from './Info';
import ReceiptComponent from './Receipt';
import TransactionComponent from './Transaction';

class Kiosk extends Component {
    
    render() {
        return (
        <Router>
            <Switch>
                <Route exact path='/' component={ KioskComponent } />
                <Route path={ `/info/:user_id` } component={ InfoComponent } />
                <Route path={ `/transaction/:user_id/:amount`} component={ TransactionComponent } />
                <Route path={ `/receipt/:user_id/:amount`} component={ ReceiptComponent } />
            </Switch>
        </Router>
        )
    }
}

export default Kiosk;