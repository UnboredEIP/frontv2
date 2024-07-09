import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/sass/styles';
import "./Calendar.css"
import { useContext } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

const localizer = momentLocalizer(moment)


export const UnboredCalendar = () => {
    const {userCalendar} = useContext(ProfileContext);

    const unboredEvents = userCalendar?.map((reservation: any) => {
        // console.log(reservation.start_date);
        // console.log(reservation.end_date);

        const startDate = new Date(reservation?.start_date);
        const endDate = new Date(reservation?.end_date);
        return (
            {
                start: startDate,
                end: endDate,
                title: reservation?.name
            }
        )
    })

    return (
        <div className='col-12 d-flex justify-content-center'>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                events={unboredEvents}
                style={{ height: "600px", display: "flex", justifyContent:"center", width: "80%" }}
            />
        </div>
    )
}
export default UnboredCalendar;