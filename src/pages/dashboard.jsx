import React from "react";
import { Bill } from "../components/bill/Bill";
import { Header } from "../components/Header/Header";
import { BillProvider } from "../context/Provider";
import Clima from "../components/clima/Clima";
import "../styles/dashboard.css"

const Dashboard = () => {
    return (
        <BillProvider>
        
        <div className="dashboard">
            <div>
                <Header/>
            </div>
            <h1>Dashboard</h1>
            <Bill />
            <Clima/>
        </div>
        </BillProvider>
    );
}
 
export default Dashboard;