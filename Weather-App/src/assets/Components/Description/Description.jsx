import React from 'react';
import './Description.css';
import { Icon } from '@iconify/react';

const Description = ({stats}) => {
    return (
        <>
            <div className='container'>
                <div className="box">
                    <div className="heading">
                        <Icon icon="line-md:emoji-smile-wink" width="20" height="20" />
                        <span>Feels Like</span>
                    </div>
                    <div className="info">
                        <h4>{stats.feel}°C</h4>
                    </div>
                </div>

                <div className="box">
                    <div className="heading">
                        <Icon icon="meteocons:dust-wind" width="24" height="24" />
                        <span>Wind Speed</span>
                    </div>
                    <div className="info">
                        <h4>{stats.wind} Km/H</h4>
                    </div>
                </div>

                <div className="box">
                    <div className="heading">
                        <Icon icon="carbon:pressure-filled" width="16" height="16" />
                        <span>Pressure</span>
                    </div>
                    <div className="info">
                        <h4>{stats.pressure} mb</h4>
                    </div>
                </div>

                <div className="box">
                    <div className="heading">
                    <Icon icon="hugeicons:humidity" width="16" height="16" />
                        <span>Humidity</span>
                    </div>
                    <div className="info">
                        <h4>{stats.humidity} %</h4>
                    </div>
                </div>
                <div className="box">
                    <div className="heading">
                    <Icon icon="dashicons:visibility" width="16" height="16" />
                        <span>Visibility</span>
                    </div>
                    <div className="info">
                        <h4>{stats.visibility} Km</h4>
                    </div>
                </div>
                <div className="box">
                    <div className="heading">
                    <Icon icon="wi:cloudy-gusts" width="16" height="16" />
                        <span>Gust</span>
                    </div>
                    <div className="info">
                        <h4>{stats.gust} Km/h</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Description;