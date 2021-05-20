import React from 'react'

export default function Grid1() {
    return (

        <div> 
            <div className="texto-grid">
                <h4 className="headgrid">iPhone 12 Pro</h4>
                <h5 className="subgrid" role="presentation">Un salto al siguiente nivel.</h5>
        
            <div className="link-grid">
             <a className="icon-grid" href="/la/iphone-12/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about iPhone 12" aria-label="Más información sobre iPhone 12">Más información</a>
             </div>
            </div>
        <div className="imagen-grid">
             <img className="img-grid" src="https://www.apple.com/v/home/z/images/promos/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_medium.jpg" />
         </div>
         </div>     
    )
}