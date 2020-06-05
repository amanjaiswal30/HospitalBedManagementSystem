import React, { Component } from 'react'
import AppBar from "./HomeAppBar";
import DashBoardData from './DashboardData'
export default class DashBoard extends Component {
    render() {
        return (
            <div>
                <AppBar/>
                <DashBoardData/>
            </div>
        )
    }
}
