import React from 'react'

import img1 from '../images/footer/footstars.jpg'
import img2 from '../images/footer/natStats.png'
import img3 from '../images/footer/ofsted.png'
import img4 from '../images/footer/pv.png'
import img5 from '../images/footer/suffolkcc.png'
import img6 from '../images/footer/thinkUKnow.png'

function Footer () {
    return (
        <div className="bg-green-200 p-4 text-center">
            <div className="flex justify-between bg-white p-4 mb-4 rounded-lg">
               <div className="h-24 w-24 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${img1})`}} />
               <div className="h-24 w-24 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${img2})`}} />
               <div className="h-24 w-24 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${img3})`}} />
               <div className="h-24 w-24 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${img4})`}} />
               <div className="h-24 w-24 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${img5})`}} />
               <div className="h-24 w-24 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${img6})`}} />
            </div>
            <div>
                Copyright © Stutton Primary School 2020
            </div>
        </div>
    )
}

export default Footer