import React, {useState} from 'react'

const Filter = () => {

    const [searchKey, setSearchKey]=useState('')
    const [sort, setSort]=useState('popular')
    const [category, setCategory]=useState('all')

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-3'>
                    <input type='text' placeholder='search products' className='form-control'/>
                </div>
                <div className='col-md-2'>
                    <select className='form-control'>
                        <option value=''>Popular</option>
                        <option value=''>High to Low</option>
                        <option value=''>Low to High</option>
                    </select>
                </div>
                <div className='col-md-2'>
                <select className='form-control'>
                        <option value=''>All</option>
                        <option value=''>Electronics</option>
                        <option value=''>Fashion</option>
                        <option value=''>Games</option>
                    </select>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-dark filterBtn'>Filter</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
