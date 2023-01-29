import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import classes from "./CalendarPage.module.css";
import "react-calendar/dist/Calendar.css";
import Bin from './../public/bin.svg';

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [viewChanged, setViewChanged] = useState(false);
  const [monthClicked, setMonthClicked] = useState(false);

  const [addTerminOpen, setAddTerminOpen] = useState(false);

  const onChange = (date) => {
    setDate(date);
  };

  var today = date.getDay();
  switch (today) {
    case 0:
      today = "sonntag";
      break;
    case 1:
      today = "montag";
      break;
    case 2:
      today = "dienstag";
      break;
    case 3:
      today = "mittwoch";
      break;
    case 4:
      today = "donnerstag";
      break;
    case 5:
      today = "freitag";
      break;
    case 6:
      today = "samstag";
      break;
    case err:
      console.log(err);
  }

  const [form, setForm] = useState({
    title: '',
    location: '',
    day: null
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [meetings, setMeetings] = useState([

   ]);

    useEffect(() => {
      // Find all date tile elements
      const dateTiles = document.querySelectorAll(".react-calendar__tile");
      
      // Loop through all meetings
      meetings.forEach(meeting => {
          // Get the meeting date
          const meetingDate = new Date(meeting.date);
          
          // Set the hours, minutes, seconds, and milliseconds to 0
          meetingDate.setHours(0, 0, 0, 0);
          
          // Loop through all date tiles
          dateTiles.forEach(tile => {
              // Get the tile date
              const tileDate = tile.getElementsByTagName("abbr")[0].getAttribute("aria-label");
              
              // Set the hours, minutes, seconds, and milliseconds to 0
              
  
  
              // If the tile date matches the meeting date, set the background color and font weight
              const options = { year: 'numeric', month: 'long', day: 'numeric' };
              if (meetingDate.toLocaleDateString('de-DE', options) === tileDate) {
                tile.classList.add("scheduled");
                console.log(true)
              }
  
              console.log(meetingDate.toLocaleDateString('de-DE', options))
              console.log(tileDate)
          });
        });
    }, [meetings, date, viewChanged]);

  const handleSubmit = (event) => {
    setMeetings([...meetings, { ...form, date: date }]);
    setForm({ title: "", location: "", });
  };

  const deleteMeeting = (index) => {
    setMeetings(meetings.filter((meeting, i) => i !== index));
  }

  var noMeetings = true;
  return (
    <div className={`${classes.container} calendar-container`}>
      {addTerminOpen == true && <div className={classes.addbackground}>
        <div className={classes.addcontent}>
        <div className={classes.today}>{today}{" "}{date.toLocaleDateString()}</div>
        <input name="title" onChange={handleChange} className={classes.input} value={form.title} placeholder="Titel" />
        <input name="location" onChange={handleChange} className={classes.input} value={form.location} placeholder="Ort" />
        <button type="submit" className={classes.add} onClick={() => {
          handleSubmit();
          setAddTerminOpen(false);
        }}>Termin hinzufügen</button>
        <button type="submit" className={classes.add} onClick={() => setAddTerminOpen(false)}>Schließen</button> 
        </div>  
      </div>}
      <div className={classes.heading}>Kalender</div>
      <div className={classes.topdescription}>Hier können Sie Ihre Meetings und Termine einfach und übersichtlich verwalten. Durch die visuelle Darstellung des Monats und die Möglichkeit, Ihre Meetings zu erstellen, bearbeiten und löschen, haben Sie alles im Blick. </div>
      <div className={classes.calendar}>
        <Calendar
          onChange={onChange}
          value={date}
          className={classes.innercalendar}
          onClickWeekNumber={() => setViewChanged(d => !d)}
          onClickMonth={() => setViewChanged(d => !d)}
          onClickYear={() => setViewChanged(d => !d)}
          onDrillUp={() => setViewChanged(d => !d)}
          onViewChange={() => setViewChanged(d => !d)}
          goToRangeStartOnSelect={() => setViewChanged(d => !d)}
          // tileContent={onActiveDateChange}
          />
      </div>
      <div className={classes.daydescription}>
        <div className={classes.calendarheading}>
          <span className={classes.today}>{today}</span>{" "}
          {date.toLocaleDateString()}
        </div>
        <div className={classes.daycontent}>
          {meetings.length != 0 && meetings.map((meeting, index) => {
            if (meeting.date.toDateString() === date.toDateString()) {
              noMeetings = false;
              return (
                <div key={index} className={classes.item}>
                  <div className="flex items-center">
                    <p className={classes.model}>{meeting.title}</p>
                    <p className={classes.model}>{meeting.location}</p>
                  </div>
                  <Bin className={classes.bin} onClick={() => deleteMeeting(index)} />
                </div>
              );
            } else {
              
            }
          })}
          {noMeetings ? <div className={classes.nomeetings}>Sie haben heute keine Termine.</div> : null}
          <div className={classes.add} onClick={() => setAddTerminOpen(true)}>Termin hinzufügen</div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
