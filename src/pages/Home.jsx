import React from 'react'

import img1 from '../images/Stutton-6-Edited-300x300.jpg'
import img2 from '../images/Stutton-48-Edited-300x300.jpg'
import img3 from '../images/Stutton-14-Edited-300x300.jpg'
import img4 from '../images/Stutton-42-Edited-300x300.jpg'
import img5 from '../images/Stutton-64-Edited-300x300.jpg'
import img6 from '../images/Stutton-69-Edited-300x300.jpg'

function Home () {
    return (
        <div>
            <div className="bg-green-200 p-12 flex justify-center items-center">
                <div>
                    <div className="text-xl italic font-semibold">Welcome to</div>
                    <h1 className="text-5xl font-bold text-center leading-tight px-6">Stutton CEVC Primary School</h1>
                    <div className="text-xl italic text-right font-semibold">an Asset Education School</div>
                </div>
            </div>
            <div className="bg-green-300 flex flex-col lg:flex-row p-4">
                <div className="w-full lg:w-3/4">
                    <div className="shadow-lg rounded-lg p-4 bg-gray-100 mb-4">
                        <h2 className="text-2xl font-bold mb-3">Welcome</h2>
                        <p className="leading-relaxed mb-4">
                            Stutton Primary is a mixed infant and junior academy in Stutton, Suffolk. 
                            Our staff are committed to providing the best education for all our pupils. 
                            Every child matters to us, every lesson, every day. 
                            Visits and tours are warmly welcomed anytime during the school year. 
                            Please make an appointment through the school office.
                        </p>
                    </div>
                    <div className="shadow-lg rounded-lg p-4 bg-gray-100 mb-4">
                        <h2 className="text-2xl font-bold mb-3">Latest News</h2>
                        <div className="flex flex-col lg:flex-row -mx-3">
                            <div className="shadow w-auto lg:w-1/3 flex flex-col justify-between mx-3 rounded-lg">
                                <div>
                                    <div style={{ backgroundImage: `url(${img1})`}} className="h-64 bg-cover rounded-t-lg" />
                                    <div className="p-3">
                                        <h3 className="font-bold text-lg tracking-wide">Title</h3>
                                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, maxime.</div>
                                    </div>
                                </div>
                                <button className="self-end bg-blue-400 px-2 py-1 text-white uppercase tracking-wide rounded mb-3 mr-3 text-sm hover:bg-blue-600">Read More</button>
                            </div>
                            <div className="shadow w-auto lg:w-1/3 flex flex-col justify-between mx-3 rounded-lg">
                                <div>
                                    <div style={{ backgroundImage: `url(${img6})`}} className="h-64 bg-cover rounded-t-lg" />
                                    <div className="p-3">
                                        <h3 className="font-bold text-lg tracking-wide">Title</h3>
                                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, repellat quia unde odit repellendus fugiat nemo harum deleniti consequuntur modi.</div>
                                    </div>
                                </div>
                                <button className="self-end bg-blue-400 px-2 py-1 text-white uppercase tracking-wide rounded mb-3 mr-3 text-sm hover:bg-blue-600">Read More</button>
                            </div>
                            <div className="shadow w-auto lg:w-1/3 flex flex-col justify-between mx-3 rounded-lg">
                                <div>
                                    <div style={{ backgroundImage: `url(${img3})`}} className="h-64 bg-cover rounded-t-lg" />
                                    <div className="p-3">
                                        <h3 className="font-bold text-lg tracking-wide">Title</h3>
                                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ea qui nulla facilis, iusto fugiat iste sequi veritatis accusamus sint dolores fugit assumenda at unde rerum, illum quisquam accusantium quia!</div>
                                    </div>
                                </div>
                                <button className="self-end bg-blue-400 px-2 py-1 text-white uppercase tracking-wide rounded mb-3 mr-3 text-sm hover:bg-blue-600">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 ml-4">
                    <div className="shadow-lg rounded-lg p-4 bg-gray-100 mb-4">
                        <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
                        <p className="mb-3">01473 328531</p>
                        <p className="mb-3 text-blue-600"><a href="mailto:admin@stuttonprimary.co.uk">admin@stuttonprimary.co.uk</a></p>
                        <p className="mb-3">Holbrook Road<br/>Stutton<br/>Suffolk<br/>IP9 2RY</p>
                    </div>
                    <div className="shadow-lg rounded-lg p-4 bg-gray-100 mb-4">
                        <h2 className="text-2xl font-bold mb-3">Calendar</h2>
                        <p className="mb-3">
                            Google Calendar
                        </p>
                    </div>
                    <div className="shadow-lg rounded-lg p-4 bg-gray-100 mb-4 flex flex-col items-start">
                        <h2 className="text-2xl font-bold mb-3">Newsletter</h2>
                        <input class="w-full px-2 py-1 rounded mb-3" placeholder="example@email.com"/>
                        <button class="bg-blue-400 mb-3 rounded px-3 py-2 uppercase tracking-wide text-white font-bold hover:bg-blue-600 self-end">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home