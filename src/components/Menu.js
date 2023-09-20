import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
    const handleClick = value => { console.log("path", value)
        navigate(value)
    }

    return(
        <div className="container">
            <style>{`
            .container {
                display: flex;
                flex-direction: column;
                padding: 24px;
                align-items: center;
                height: 95vh;
                background-color: #282c34;
            }

            .card {
                border-radius: 8px;
                padding: 40px;
                margin: 8px;
                width: 250px;
                border: 1px solid #efefef;
                text-align:center;
                box-shadow: 4px 4px #efefef;
                color: white;
            }
            .card:hover {
                cursor: pointer;
                background: #efefef;
                color: #282c34;
            }
            `}</style>
            {
                menus.map(item => (
                    <div className="card" onClick={() => handleClick(item.path)}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}

const menus = [
    {
        name: "TODO LIST",
        path: "/todo-list"
    },
    {
        name: "COLOR CHANGING BOX",
        path: "/color-changing-box"
    },
    {
        name:"FETCHING & DISPLAYING",
        path: "/fetching-and-displaying"
    },
    {
        name: "SIMPLE FORM",
        path: "simple-form"
    }
]
export default Dashboard;