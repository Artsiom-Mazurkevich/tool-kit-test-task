import React, {useEffect} from 'react';
import {usePagination} from "../utils/usePagination";
import classnames from 'classnames';
import './Paginator.scss';
import {useAppDispatch, useAppSelector} from "../Redux/store";
import {setAfterID, setBeforeID} from "../Redux/paramsReducer";


type PaginationPropsType = {
    onPageChange: (n: number) => void
    totalCount: number
    siblingCount?: number,
    currentPage: number
    pageSize: number
    className: string
}


export const Paginator = (props: PaginationPropsType) => {
    const dispatch = useAppDispatch()
    const {name_repositories} = useAppSelector(state => state.cardsReducer.search_results)


    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });


        // If there are less than 2 times in pagination range we shall not render the component
        // if (currentPage === 0 || paginationRange!.length < 2) {
        //     return null;
        // }

        const onNext = () => {
            onPageChange(currentPage + 1);
        };

        const onPrevious = () => {
            onPageChange(currentPage - 1);
        };

        let lastPage = paginationRange![paginationRange!.length - 1];

        return (paginationRange && <ul className={classnames('pagination-container', {[className]: className})}>
                {/* Left navigation arrow */}
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrow left"/>
                </li>
                {paginationRange.map(pageNumber => {

                    // If the pageItem is a DOT, render the DOTS unicode character
                    if (pageNumber === 'DOTS') {
                        return <li key={pageNumber} className="pagination-item dots">&#8230;</li>;
                    }

                    // Render our Page Pills
                    return (
                        <li key={pageNumber}
                            className={classnames('pagination-item', {
                                selected: pageNumber === currentPage
                            })}
                            onClick={() => {
                                if (pageNumber > currentPage) {
                                    console.log('after')
                                    console.log(name_repositories)
                                    console.log(name_repositories.length)
                                    dispatch(setAfterID(name_repositories[name_repositories.length - 1].cursor))
                                    dispatch(setBeforeID(''))
                                }
                                if (pageNumber < currentPage) {
                                    dispatch(setBeforeID(name_repositories[0].cursor))
                                    dispatch(setAfterID(''))
                                }
                                onPageChange(Number(pageNumber))
                            }}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                {/*  Right Navigation arrow */}
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === lastPage
                    })}
                    onClick={onNext}
                >
                    <div className="arrow right"/>
                </li>
            </ul>
        || <div>error-pagination</div>);
};

