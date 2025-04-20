import React from "react";
import { Bill } from "../components/bill/Bill";
import "../styles/dashboard.css"

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Bill />
        </div>
    );
}
