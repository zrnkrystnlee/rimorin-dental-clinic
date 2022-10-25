import React from "react";
import Header from "../components/dashboard-header.jsx";
import Sidebar from "../components/sidebar.jsx";
// import Footer from "../components/footer.jsx";
import "../styles/calendar.css";
//import '../styles/dashboard.css';
//import "/GitHub Repositories/React JS/Test-Repo/dentist-client/public/Calendar/css/style.css"
import Calendar from "../components/Calendar";
// import Calendar from "../components/CalendarComponent";

//import "/GitHub Repositories/React JS/Test-Repo/dentist-client/public/assets/css/style.css"

function DentistCalendar(){
    return(
        <div>
            <main id="main" className="main">
            <div id='calendar-container'>
                <div id='calendar'></div>
            </div>


                {/* Breadcrumbs */}
                <div className="calendar-breadcrumb">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/dashboardpage">Home</a></li>
                            <li className="breadcrumb-item active">Calendar</li>
                        </ol>
                    </nav>
                </div>

                {/* Checkboxes */}
                <div className="calendar-checkbox">
                    <div className="form-check">
                        <input className="form-check-input1" type="checkbox" id="gridCheck1"/>
                        <label className="form-check-label1" htmlFor="gridCheck1">Pending</label>
                        <span className="badge bg-warning"><i></i></span>

                        <input className="form-check-input2" type="checkbox" id="gridCheck2"/>
                        <label className="form-check-label2" htmlFor="gridCheck2">Accepted</label>
                        <span className="badge bg-info"><i></i></span>

                        <input className="form-check-input3" type="checkbox" id="gridCheck3"/>
                        <label className="form-check-label3" htmlFor="gridCheck3">Finished</label>
                        <span className="badge bg-success"><i></i></span>

                        <input className="form-check-input4" type="checkbox" id="gridCheck4"/>
                        <label className="form-check-label4" htmlFor="gridCheck4">Cancelled</label>
                        <span className="badge bg-danger"><i></i></span>
                    </div>
                </div>
            </main>

            <Header />
            <Sidebar />
            <Calendar />

            {/* <div className={'Calendar__wrapper'}>
                <Calendar isDark={false} />
            </div> */}

        </div>
    )
}

export default DentistCalendar;