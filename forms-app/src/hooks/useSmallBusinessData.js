import { useState, useEffect } from 'react';

export const useSmallBusinessData = () => {

    const [ smallBusinessData, setSmallBusinessData ] = useState([]);

    useEffect(function loadBusinessDataAfterRender() {
        fetch('http://localhost:3060/smallbizAppetiteGuide')
            .then(res => res.json())
            .then(smallBusinessData => setSmallBusinessData(smallBusinessData));
    }, [])

    return { smallBusinessData };
};