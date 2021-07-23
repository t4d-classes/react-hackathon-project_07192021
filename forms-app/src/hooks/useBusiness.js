import { useState, useEffect } from 'react';

export const useBusiness = () => {

  const [
    businesses, /* first element: state data */
    setBusiness /* second element: update function, this func both updates the state and triggers the re-render */
  ] = useState([] /* initial state value before we call the REST API */);

  useEffect(function loadBusinessAfterRender() {

    fetch('http://localhost:3060/business')
      .then(res => res.json())
      .then(businesses => setBusiness(businesses));

  }, [] /* empty array means to run after first render */)

  const appendBusiness = (business) => {

    return fetch('http://localhost:3060/business', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(business),
    })
      .then(() => fetch('http://localhost:3060/business'))
      .then(res => res.json())
      .then(businesses => setBusiness(businesses));

  };

  return { businesses, appendBusiness };

};