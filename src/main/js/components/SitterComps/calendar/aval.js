
import React from 'react';
import BookingCalendar from 'react-booking-calendar';
import { Button, Modal, Panel } from 'react-bootstrap';


const bookings = [
  new Date(2017,9, 1),
  new Date(2017, 9, 2),
  new Date(2017, 9, 3),
  new Date(2017, 9, 9),
  new Date(2017, 9, 10),
  new Date(2017, 9, 11),
  new Date(2017, 9, 12),
];

export class Aval extends React.Component {
    render(){
        return (
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <label><b>Date Start</b></label>
              <input type="date" placeholder="Start Date" name="startdate" required/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <label><b>Date End</b></label>
              <input type="date" placeholder="Start End" name="enddate" required/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="submit" bsStyle="success" >Submit</Button>


            <BookingCalendar bookings={bookings} />
            </div>
        );
    }
}
