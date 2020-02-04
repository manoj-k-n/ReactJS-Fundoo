import React, { Component } from 'react'

export class LogOut extends Component {
    logout=()=>
    {
        localStorage.removeItem('loginto1ken')
        
    }
    render() {
        return (
            <div>
                <button onClick={this.logout}>LOGOUT</button>
            </div>
        )
    }
}

export default LogOut
