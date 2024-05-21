import './Temp.css'
import React from 'react'
import { Icon } from '@iconify/react';

function Temp({ stats }) {
    return (
        <>
            <div className="weather">
                <div className="icon">
                    {/* <h5>{stats.location}</h5> */}
                    <img src={stats.icon} />
                    <h6>{stats.condition}</h6>
                </div>

                <div className="temp">
                    <Icon icon="solar:temperature-broken" width="56" height="56" />
                    <h1>{stats.temp}°C</h1>
                </div>

            </div>


        </>
    )
}

export default Temp