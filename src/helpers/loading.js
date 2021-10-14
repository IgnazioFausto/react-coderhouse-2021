import React from "react";
import loadIcon from './img-loading/fruit-vector.svg'
import './loading.scss'

export const Loading = () => {
    return (
        <div className="container">
            <img className="loadIcon" src={loadIcon} alt="React Logo" />
        </div >
    )
}