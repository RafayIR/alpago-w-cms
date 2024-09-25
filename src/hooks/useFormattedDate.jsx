'use client'

import { useState, useEffect } from 'react';

const useFormattedDate = (date) => {
    const [formattedDate, setFormattedDate] = useState({ day: '', month: '', year: '' });

    useEffect(() => {
        const newDate = new Date(date);
        const day = newDate.getDate().toString().padStart(2, '0'); // format day with leading zero
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0'); // months are 0-indexed, so add 1
        const year = newDate.getFullYear();

        setFormattedDate({ day, month, year });
    }, [date]);

    return formattedDate;
};

export default useFormattedDate;