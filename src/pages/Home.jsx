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
            <div className="bg-green-200 px-48 py-12">
                <div className="text-xl italic font-semibold">Welcome to</div>
                <h1 className="text-5xl font-bold text-center leading-tight">Stutton CEVC Primary School</h1>
                <div className="text-xl italic text-right font-semibold">an Asset Education School</div>
            </div>
            <div className="bg-green-300 flex">
                <div className="w-3/4 p-4">
                    <div className="shadow-lg rounded-lg px-4 py-2 bg-gray-100 mb-4">
                        <h2 className="text-2xl font-bold mb-3">Welcome</h2>
                        <p className="leading-relaxed mb-4">
                            Stutton Primary is a mixed infant and junior academy in Stutton, Suffolk. 
                            Our staff are committed to providing the best education for all our pupils. 
                            Every child matters to us, every lesson, every day. 
                            Visits and tours are warmly welcomed anytime during the school year. 
                            Please make an appointment through the school office.
                        </p>
                    </div>
                    <div className="shadow-lg rounded-lg px-4 py-2 bg-gray-100 pb-4">
                        <h2 className="text-2xl font-bold mb-3">Latest News</h2>
                        <div className="flex flex-wrap justify-between">
                            <div className="shadow-lg rounded-lg w-64 mb-4">
                                <div className="h-56 bg-cover rounded-t-lg" style={{ backgroundImage: `url(${img1})`}} />
                                <div className="p-3 flex-grow flex flex-col">
                                    <div>
                                        <div class="mb-3">
                                            <h3 className="font-bold text-lg">Title</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, debitis?</p>
                                        </div>
                                        <div class="flex justify-end">
                                            <button class="bg-blue-400 mb-3 rounded px-3 py-1 uppercase tracking-wide text-white font-bold hover:bg-blue-600 self-end">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg rounded-lg w-64 mb-4">
                                <div className="h-56 bg-cover rounded-t-lg" style={{ backgroundImage: `url(${img2})`}} />
                                <div className="p-3 flex flex-col">
                                    <div>
                                        <div class="mb-3">
                                            <h3 className="font-bold text-lg">Title</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta id sit voluptatum voluptates quisquam quos nobis, labore repudiandae iste autem.</p>
                                        </div>
                                        <div class="flex justify-end">
                                            <button class="bg-blue-400 mb-3 rounded px-3 py-1 uppercase tracking-wide text-white font-bold hover:bg-blue-600 self-end">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg rounded-lg w-64 mb-4">
                                <div className="h-56 bg-cover rounded-t-lg" style={{ backgroundImage: `url(${img3})`}} />
                                <div className="p-3 flex flex-col">
                                    <div>
                                        <div class="mb-3">
                                            <h3 className="font-bold text-lg">Title</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, debitis?</p>
                                        </div>
                                        <div class="flex justify-end">
                                            <button class="bg-blue-400 mb-3 rounded px-3 py-1 uppercase tracking-wide text-white font-bold hover:bg-blue-600 self-end">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 py-4 pr-4">
                    <div className="shadow-lg rounded-lg px-4 py-2 bg-gray-100 mb-4">
                        <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
                        <p className="mb-3">01473 328531</p>
                        <p className="mb-3">admin@stuttonprimary.co.uk</p>
                        <p className="mb-3">Holbrook Road<br/>Stutton<br/>Suffolk<br/>IP9 2RY</p>
                    </div>
                    <div className="shadow-lg rounded-lg px-4 py-2 bg-gray-100 mb-4">
                        <h2 className="text-2xl font-bold mb-3">Calendar</h2>
                        <p className="mb-3">
                            Google Calendar
                        </p>
                    </div>
                    <div className="shadow-lg rounded-lg px-4 py-2 bg-gray-100 flex flex-col items-start">
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