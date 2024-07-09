import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import './Sidebar.css'
import { SidebarContext } from "../../contexts/SidebarContext";

interface MenuItem {
    name: string;
    links?: string;
}

interface SidebarProps {
    items?: MenuItem[]
    toggleSidebar?: any;
    toggleVisible?: any;
    unrolled?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({items}) => {
    const { user } = useContext(AuthContext)
    const { isSidebarVisible, toggleSidebarVisibility, isProfileUnrolled, toggleProfileVisibility } = useContext(SidebarContext);
    const [isHovering, setIsHovering] = useState(false);

    const toggleUnrolledProfile = () => {
        toggleProfileVisibility();
    };

    const toggleVisibility = () => {
        toggleSidebarVisibility();
    };

    const sidebarClass = isSidebarVisible ? 'Sidebar visible' : `Sidebar hidden ${isHovering ? 'reveal-sidebar' : ''}`;

    if (items) {
        return (
            <div className='Sidebar d-flex flex-column col-12 h-100'>
                <div style={{height: '45%'}}/>
                {items.map((item, index) => {
                    return (
                        <div key={index} onClick={() => {if (item.links)window.location.href = item.links}} className="SidebarText d-flex flex-row w-100 py-3">
                            <p className="col-12 text-center my-0">
                                {item.name}
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }

    if (!user) {
        return (
            null
        )
    }

    return (
        <>
            {!isSidebarVisible && ( <div className="hover-area" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={toggleVisibility}/> )}
            
            <div className={sidebarClass + ' d-flex flex-column position-fixed col-2'}>
                <div style={{ height: '80px' }} />

                <div className="SidebarText d-flex flex-row w-100 pb-3">
                    <i className="fas fa-home col-3 text-center pt-1"></i>
                    <a href="/" className="col-9 text-start"> Accueil</a>
                </div>

                <div className="SidebarText d-flex flex-row w-100 pb-3">
                    <i className="fas fa-ticket col-3 text-center pt-1"></i>
                    <a href="/events" className="col-9 text-start"> Evenements </a>
                </div>

                <div onClick={toggleUnrolledProfile} className="SidebarText d-flex flex-row w-100">
                    <i className="fa-solid fa-user col-3 text-center pt-1"></i>
                    <p className="col-6 text-start"> Profile </p>
                    <i className={`col-3 pt-1 fa-solid ${isProfileUnrolled ? 'fa-caret-up' : 'fa-caret-down'} text-start`}></i>
                </div>

                {isProfileUnrolled && (
                    <div style={{ marginLeft: "10%" }} className="d-flex flex-column">
                        <div className="SidebarText d-flex flex-row w-100 pb-3">
                            <i className="fa-solid fa-pen-to-square col-3 text-center pt-1"></i>
                            <a href="/update/profile" className="col-9 text-start">
                                Mise à jour profile
                            </a>
                        </div>
                        <div className="SidebarText d-flex flex-row w-100">
                            <i className="fa-solid fa-address-card col-3 text-center pt-1"></i>
                            <p className="col-9 text-start">
                                Informations
                            </p>
                        </div>
                    </div>
                )}

                {user.users.role !== 'User' && (
                    <div className="SidebarText d-flex flex-row w-100">
                        <i className="fa-solid fa-user-tie col-3 text-center pt-1"></i>
                        <p className="col-9 text-start"> Menu Pro </p>
                    </div>
                )}

                <div className="SidebarText d-flex flex-row w-100 pb-3">
                    <i className="fa-solid fa-calendar col-3 text-center pt-1"></i>
                    <a href="/calendar" className="col-9 text-start"> Calendrier </a>
                </div>

                <div className="SidebarText d-flex flex-row w-100" onClick={toggleVisibility}>
                    <i className={"col-10 text-end pb-2 fa-solid fa-caret-left text-start"}></i>
                </div>
            </div>
        </>
    
    )
}

export default Sidebar;