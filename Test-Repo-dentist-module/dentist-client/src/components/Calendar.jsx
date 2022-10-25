import React from 'react';
import Kalend, {CalendarView} from 'kalend'// import component
import 'kalend/dist/styles/index.css'; //import styles

function Calendar() {
    return(
        <div className='calendarContainer'>

            <Kalend
                onEventClick={onEventClick}
                onNewEventClick={onNewEventClick}
                events={[]}
                initialDate={new Date().toISOString()}
                hourHeight={60}
                initialView={CalendarView.WEEK}
                disabledViews={[CalendarView.Day]}
                timeFormat={'24'}
                weekDayStart={'Monday'}
                calendarIDsHidden={['work']}
                language={'en'}
            />
        </div>
    );
}
var  onEventClick = () => {

};

var onNewEventClick = () => {

};

var onSelectView = () => {

};




export default Calendar;