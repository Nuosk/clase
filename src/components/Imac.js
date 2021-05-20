import React from 'react'

export default function Imac() {
    return (
        <div className="contenedor">
            <div className="texto">
                <h2 className="headline">iMac</h2>
                <h3 className="subhead" role="presentation">Dile hola.</h3>
                <div className="avail-wrapper">
                            <p className="parrafo">Consulta la disponibilidad más adelante</p>
                </div>
                <div className="link">
                    <a className="icon" href="/la/iphone-12/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about iPhone 12" aria-label="Más información sobre iPhone 12">Más información</a>
                </div>
            </div>
            <div className="imagen">
            <img className="img" src="https://www.apple.com/la/home/images/heroes/imac/hero_imac_avail__zbofyl96mzmm_medium.jpg" />
            </div>
        </div>
        
    )
}