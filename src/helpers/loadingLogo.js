import React from "react";
import loadIcon from './img-loading/fruit-vector.svg'
import './loadingLogo.scss'

export const Loading = () => {

    //acá solo tenemos el icono del loading para ser usado por separado
    return (
        <div className="container">
            <img className="loadIcon" src={loadIcon} alt="Loading" />
        </div >
    )
}