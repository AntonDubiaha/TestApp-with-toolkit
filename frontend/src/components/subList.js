import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categoriesSlice';

export const CategoryList = () => {
    const ThirdCategory = useSelector(state => state.ThirdCategory)
    const distpach = useDispatch()
    useEffect(() => {
        distpach(fetchCategories())
    }, [])
    return (
        <div className='card card-body mt-4 mb-4'>
            <div>
                <h2>List of ThirdCategory</h2>
                {ThirdCategory.loading && <div>Loading...</div>}
                {!ThirdCategory.loading && ThirdCategory.error ? <div>Error: {ThirdCategory.error}</div> : null}
                {!ThirdCategory.loading && ThirdCategory.categories.length ? (
                    <div>
                        {ThirdCategory.categories.map(ThirdCategory => (
                            <ul key={ThirdCategory.id}>
                                <li>Name: {ThirdCategory.name}</li>
                                <li>Second categories id: {ThirdCategory.sub_categories}</li>
                            </ul>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    )
}
