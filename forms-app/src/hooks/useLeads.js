import { useState, useEffect } from "react";

export const useLeads = () => {

    const [leads, setLeads] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3060/leadIntakeForm')
            .then(res => res.json())
            .then(storedLeads => setLeads(storedLeads));

    }, []);

    const removeLead = (lead) => {

        return fetch('http://localhost:3060/leadIntakeForm', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lead),
        })
            .then(() => fetch('http://localhost:3060/leadIntakeForm'))
            .then(res => res.json())
            .then(leads => setLeads(leads));
    };

    return { leads, removeLead };


};