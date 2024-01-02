import React, { createContext, useState } from 'react';

export const CarouselContext = createContext();

export const CarouselProvider = ({ children }) => {
    const [index, setIndex] = useState(0);

    const changeIndex = newIndex => {
        setIndex(newIndex);
    };

    return (
        <CarouselContext.Provider value={{ index, changeIndex }}>
            {children}
        </CarouselContext.Provider>
    );
};
