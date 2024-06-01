import { useState } from 'react';
import './Selectbar.css'

interface SelectbarProps {
    onSelect?: any;
}

export const Selectbar: React.FC<SelectbarProps> = ({onSelect}) => {
    
    const items = [
        ["Tout les thèmes", "fa-solid fa-star-of-life"], 
        ["Sport", "fa-solid fa-dumbbell"],
        ["Music", "fa-solid fa-music"],
        ["Art", "fa-solid fa-paintbrush"],
        ["Théâtre","fa-solid fa-masks-theater"],

        ["Soirée", "fa-solid fa-champagne-glasses"],
        ["Jeux", "fa-solid fa-gamepad"],
        ["Nature", "fa-solid fa-tree"],
        ["Tech", "fa-solid fa-microchip"],
        ["Danse", "fa-solid fa-shoe-prints"],

        ["Danse", "fa-solid fa-shoe-prints"],
        ["Danse", "fa-solid fa-shoe-prints"],
    ]

    const [hoveredItem, setHoveredItem] = useState<number>(-1);
    const [startIndex, setStartIndex] = useState<number>(0);


    const itemsPerPage = 5;


    const handleMouseHover = (type: string, index: number) => {
        if (type === "enter")
            setHoveredItem(index);
        else
            setHoveredItem(index);
    };

    const handlePageIndex = (to: string) => {
        if (to === "next") {
            const nextIndex = (startIndex + itemsPerPage);
            setStartIndex(nextIndex);
        } else {
            const prevIndex = startIndex - itemsPerPage;
            setStartIndex(prevIndex);
        }

    }

    const handleClick = (itemIndex: number) => {
        onSelect(items[startIndex + itemIndex][0]);
    };


    return (
        <div className="Selectbar col-12 align-items-center">
            {startIndex > 0 && <div className="arrow left-arrow fa-solid fa-caret-left" onClick={() => handlePageIndex("prev")}></div>}
            
            <div className={`SelectbarObjects col-12 h-100 w-100 d-flex align-items-center flex-center flex-row justify-content-center`}>
                {items.slice(startIndex, startIndex + itemsPerPage).map((item, index) => {
                    const isHovered = index === hoveredItem;
                    return (
                        <div key={index}
                        className={`col-1 d-flex flex-column justify-content-center SelectbarOptions mx-1 ${isHovered ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseHover("enter", index)} onMouseLeave={() => handleMouseHover("leave", -1)}  onClick={() => handleClick(index)}>
                            <p className="SelectbarOptionsTitle my-0">
                                {item[0]}
                            </p>
                            <p className={item[1] + " my-0"}>
                            </p>
                        </div>
                    );
                })}
            </div>

            {startIndex + itemsPerPage < items.length && (
                <div className="arrow right-arrow fa-solid fa-caret-right" onClick={() => handlePageIndex("next")}></div>
            )}
        </div>
    )
}

export default Selectbar;