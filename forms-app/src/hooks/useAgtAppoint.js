import { useState, useEffect } from "react";

export const useAgtAppoint = () => {

  const [agtAppoints, setAgtAppoints] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3060/agencyAppointmentRequest')
      .then(res => res.json())
      .then(appoints => setAgtAppoints(appoints));

  }, []);

  const deleteAgtAppoint = (appointId) => {

    return fetch('http://localhost:3060/agencyAppointmentRequest/'+appointId, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => fetch('http://localhost:3060/agencyAppointmentRequest'))
      .then(res => res.json())
      .then(appoints => setAgtAppoints(appoints));

  };

  return { agtAppoints, deleteAgtAppoint };


};