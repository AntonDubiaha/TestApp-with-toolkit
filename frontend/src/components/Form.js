
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const AddForm = () => {
    const dispatch = useDispatch()
    return (

        <div className='card card-body mt-4 mb-4'>
            <h2>Add sub_categories</h2>
            <form>
                <div className='form-group'>
                    <label>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        name='name'
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Second category id</label>
                    <input
                        type='text'
                        className='form-control'
                        name='sub_categories'
                        onChange={(e) => setSub_categories(e.target.value)} />
                </div>
                <div className='form-group'>
                    <button type='submit'
                        className='btn btn-primary'
                    >Add</button>
                </div>
            </form>
        </div>
    )
}