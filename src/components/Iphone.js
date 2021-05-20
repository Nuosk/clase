import React from 'react'

export default function Iphone() {
    return (
        <div className="contenedor">
            <div className="texto">
                <h2 className="headline">iPhone 12</h2>
                <h3 className="subhead" role="presentation">Morado. Soñado.</h3>
                <div className="avail-wrapper">
                            <p className="parrafo">Muy pronto disponible en morado</p>
                </div>
                <div className="link">
                    <a className="icon" href="/la/iphone-12/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about iPhone 12" aria-label="Más información sobre iPhone 12">Más información</a>
                </div>
            </div>
            <div className="imagen">
            <img className="img" src="https://www.apple.com/v/home/z/images/heroes/iphone-12-purple/hero_iphone_12_purple__eybnx2ju5mky_medium.jpg" />
            </div>
        </div>
        
    )
}
