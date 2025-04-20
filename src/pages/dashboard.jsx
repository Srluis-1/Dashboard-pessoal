import React from "react";
import { Bill } from "../components/bill/Bill";
import { Header } from "../components/Header/Header";
import "../styles/dashboard.css"

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <div>
                <Header/>
            </div>
            <h1>Dashboard</h1>
            <Bill />
        </div>
    );
}
