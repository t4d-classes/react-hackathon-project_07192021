import { useState, useEffect } from 'react'

export const useLeads = () => {

  const [leads, setLeads] = useState([]);

  const URL = 'http://localhost:3060/'

  useEffect(() => {

    fetch(URL + 'leads')
      .then(res => res.json())
      .then(leads => setLeads(leads));
  }, [])

  const appendLeads = (lead) => {
    return fetch(URL + 'leads', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(lead),
    })
      .then(() => fetch(URL + 'leads'))
      .then(res => res.json())
      .then(leads => setLeads(leads))
  }

  const deleteLeads = (lead) => {
    return fetch(URL + 'leads/' + lead.id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    })
      .then(() => fetch(URL + 'leads/'))
      .then(res => res.json())
      .then(lead => setLeads(lead))
  }

  return { leads, appendLeads, deleteLeads };
}
