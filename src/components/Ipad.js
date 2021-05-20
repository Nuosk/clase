import React from 'react'

export default function Ipad() {
    return (
        <div className="contenedor">
            <div className="texto">
                 <h2 class="head">iPad Pro</h2>
                 <h3 class="sub" role="presentation">Con los superpoderes del chip&nbsp;M1 de&nbsp;Apple.</h3>
                <div className="avail-wrapper">
                            <p className="parrafo">Consulta la disponibilidad más adelante</p>
                </div>
                <div className="link">
                    <a className="icon" href="/la/iphone-12/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about iPhone 12" aria-label="Más información sobre iPhone 12">Más información</a>
                </div>
            </div>
            <div className="imagen">
            <img className="img" src="https://www.apple.com/v/home/z/images/heroes/ipad-pro/hero_ipad_pro__gl982dtu49im_medium.jpg" />
            </div>
        </div>
        
    )
}