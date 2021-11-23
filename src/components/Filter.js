import React, {useState} from 'react'

const Filter = () => {

    const [searchKey, setSearchKey]=useState('')
    const [sort, setSort]=useState('popular')
    const [category, setCategory]=useState('all')

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-3'>
                    <input type='text' value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}} placeholder='search products' className='form-control'/>
                </div>
                <div className='col-md-2'>
                    <select className='form-control' value={sort} onChange={(e)=>{setSort(e.target.value)}}>
                        <option value='Popular'>Popular</option>
                        <option value='htl'>High to Low</option>
                        <option value='lth'>Low to High</option>
                    </select>
                </div>
                <div className='col-md-2'>
                <select className='form-control' value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value='all'>All</option>
                        <option value='electronics'>Electronics</option>
                        <option value='fashion'>Fashion</option>
                        <option value='games'>Games</option>
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
