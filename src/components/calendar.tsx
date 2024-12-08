// import React, { useState } from 'react';
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css'; // Import calendar styles

// const CustomCalendar = () => {
//   const [date, setDate] = useState(new Date());

//   const handleDateClick = (selectedDate) => {
//     setDate(selectedDate);

//     // Format date to YYYY-MM-DD (Google Calendar format)
//     const formattedDate = selectedDate.toISOString().split('T')[0];

//     // Redirect to Google Calendar with prefilled date
//     const googleCalendarUrl = `https://calendar.google.com/calendar/r/day/${formattedDate}`;
//     window.open(googleCalendarUrl, 'https://calendar.google.com/calendar/embed?src=2d0cc9707dc3ddd4a159f92c563a48cc187a1fa13b5fa07295e7ed2c30150c8f%40group.calendar.google.com&ctz=Asia%2FKuala_Lumpur');
//   };

//   return (
//     <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }}>
//       <div><iframe src="https://calendar.google.com/calendar/embed?src=2d0cc9707dc3ddd4a159f92c563a48cc187a1fa13b5fa07295e7ed2c30150c8f%40group.calendar.google.com&ctz=Asia%2FKuala_Lumpur"  width="800" height="600" frameborder="0" scrolling="no"></iframe></div>
//       {/* <h2>Select a Date</h2>
//       <Calendar
//         onChange={handleDateClick}
//         value={date}
//         tileContent={({ date, view }) =>
//           view === 'month' ? (
//             <span style={{ fontSize: 'small', color: '#888' }}>📅</span>
//           ) : null
//         }
//       /> */}
//     </div>
//   );
// };

// export default CustomCalendar;

const GCalendar = () => {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        height: "600px",
      }}
    >
      <h2 className="text-3xl text-black font-bold text-center mb-8">
        Calendar
      </h2>

      <div>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=ac6e7018fdc986a48b26c09bf48d7c0144cf7584ce2154c85c5dce9cdd0b78e1%40group.calendar.google.com&ctz=Asia%2FKuala_Lumpur"
          width="800"
          height="600"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default GCalendar;
