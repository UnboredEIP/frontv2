import React, { useContext } from 'react';
import './Pagination.css';
import { EventContext } from '../../contexts/EventContext';

const Pagination = () => {
    const { pageSize, page, setPage, loading, total } = useContext(EventContext);

    const totalPages = Math.ceil(total / pageSize);

    const goToPage = (page: number) => {
        if (!loading) {
            setPage(page);
        }
    };

    const generatePageNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (page <= 3) {
                for (let i = 1; i <= 5; i++) {
                    pageNumbers.push(i);
                }
            } else if (page > totalPages - 2) {
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                for (let i = page - 2; i <= page + 2; i++) {
                    pageNumbers.push(i);
                }
            }
        }
        return pageNumbers;
    };

    return (
        <div className="col-12 Pagination d-flex align-items-center justify-content-center">
            {generatePageNumbers().map(number => (
                <div key={number} 
                onClick={() => goToPage(number)} 
                className={`mx-1 ${page === number ? 'PaginationButtonActive' : 'PaginationButton'}`}
                >
                    {number}
                </div>
            ))}
        </div>
    );
}

export default Pagination;
