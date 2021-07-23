import { useState, useEffect } from "react";

export const useLeads1 = () => {

    const [leads, setLeads] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3060/leadIntakeForm1')
            .then(res => res.json())
            .then(storedLeads => setLeads(storedLeads));

    }, []);

    const removeLead = (lead) => {
        return fetch('http://localhost:3060/leadIntakeForm1/' + lead.target.id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(() => fetch('http://localhost:3060/leadIntakeForm1'))
            .then(res => res.json())
            .then(leads => setLeads(leads));
    };

    const addLead = (lead) => {

        return fetch('http://localhost:3060/leadIntakeForm1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lead),
        })
            .then(() => fetch('http://localhost:3060/leadIntakeForm1'))
            .then(res => res.json())
            .then(leads => setLeads(leads));

    };

    return { leads, removeLead, addLead };


};
