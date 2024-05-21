import './Search.css'
import { Icon } from '@iconify/react';

import React from 'react'

function Search({setCity,stats}) {
    const inputHandle=(e)=>{
        // e.preventDefault();
        // console.log(e.target.value);
        setCity(e.target.value)
    }
    
    return (
        <>
            <div className='inp'>
                <div className="time">
                    {/* <Icon icon="marketeq:clock-alt" width="25" height="25" /> */}
                    <h5>Today : {stats.time} | {stats.location},{stats.region}</h5>
                </div>

                <form className='int'>
                    <input type="text" name='City' placeholder='Enter City.....' onChange={inputHandle}/>
                    <button><Icon icon="icon-park:search" width="22" height="22" /></button>
                </form>
            </div>
        </>
    )
}

export default Search;