import React, { createContext, FC, useEffect, useState } from 'react';

export const SidebarContext = createContext<any>(null);

export const SidebarProvider: FC<{children: React.ReactNode}> = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(() => {
        const savedVisibility = sessionStorage.getItem('isSidebarVisible');
        return savedVisibility !== null ? JSON.parse(savedVisibility) : true;
    });

    const [isProfileUnrolled, setIsProfileUnrolled] = useState(() => {
        const savedVisibility = sessionStorage.getItem('isProfileUnrolled');
        return savedVisibility !== null ? JSON.parse(savedVisibility) : true;
    });


    const toggleSidebarVisibility = () => {
        setIsSidebarVisible((prevVisibility: boolean)=> {
            const newVisibility = !prevVisibility;
            sessionStorage.setItem('isSidebarVisible', JSON.stringify(newVisibility));
            return newVisibility;
        });
    };

    const toggleProfileVisibility = () => {
        setIsProfileUnrolled((prevVisibility: boolean)=> {
            const newVisibility = !prevVisibility;
            sessionStorage.setItem('isProfileUnrolled', JSON.stringify(newVisibility));
            return newVisibility;
        });
    }

    useEffect(() => {
        sessionStorage.setItem('isSidebarVisible', JSON.stringify(isSidebarVisible));
        sessionStorage.setItem('isProfileUnrolled', JSON.stringify(isSidebarVisible));

    }, [isSidebarVisible]);

    return (
        <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebarVisibility, isProfileUnrolled, toggleProfileVisibility }}>
            {children}
        </SidebarContext.Provider>
    );
};
