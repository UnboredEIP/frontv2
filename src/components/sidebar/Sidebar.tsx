import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import './Sidebar.css'

interface MenuItem {
    name: string;
    links?: string;
}

interface SidebarProps {
    items?: MenuItem[]
}

export const Sidebar: React.FC<SidebarProps> = ({items}) => {
    const { user } = useContext(AuthContext)
    const [unrolled, setUnrolled] = useState(false);

    const unrolledProfile = () => {
        setUnrolled(!unrolled);
    }

    if (items) {
        return (
            <div className='Sidebar d-flex flex-column col-12 h-100'>
                <div style={{height: '45%'}}/>
                {items.map((item, index) => {
                    return (
                        <div className="SidebarText d-flex flex-row w-100 py-3">
                            <a key={index} href={item.links} className="col-12 text-center">
                                {item.name}
                            </a>
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
        <div className='Sidebar d-flex flex-column position-absolute col-2'>
            <div style={{height: '80px'}} />

            <div className="SidebarText d-flex flex-row w-100">
                <i className="fas fa-home col-3 text-center pt-1"></i>
                <p className="col-9 text-start">
                    Accueil
                </p>
            </div>

            <div onClick={unrolledProfile} className="SidebarText d-flex flex-row w-100">
                <i className="fa-solid fa-user col-3 text-center pt-1"></i>
                <p className="col-6 text-start">
                    Profile
                </p>
                <i className={`col-3 pt-1 fa-solid ${unrolled ? 'fa-caret-up' : 'fa-caret-down'} text-start`}></i>
            </div>

            {
                unrolled ?
                <div style={{marginLeft: "10%"}} className="d-flex flex-column">
                    <div className="SidebarText d-flex flex-row w-100">
                        <i className="fa-solid fa-user col-3 text-center pt-1"></i>
                        <p className="col-9 text-start">
                            Mise à jour profile
                        </p>
                    </div>
                    <div className="SidebarText d-flex flex-row w-100">
                        <i className="fa-solid fa-user col-3 text-center pt-1"></i>
                        <p className="col-9 text-start">
                            Profile Info
                        </p>
                    </div>
                </div>
                :
                <>
                </>
            }

            {
                user.users.role === 'User' ? <></>
                :
                <div className="SidebarText d-flex flex-row w-100">
                    <i className="fa-solid fa-user-tie col-3 text-center pt-1"></i>
                    <p className="col-9 text-start">
                        Menu Pro
                    </p>
                </div> 

            }

            <div className="SidebarText d-flex flex-row w-100">
                <i className="fa-solid fa-calendar col-3 text-center pt-1"></i>
                <p className="col-9 text-start">
                    Calendrier
                </p>
            </div>
        </div>
    )
}

export default Sidebar;