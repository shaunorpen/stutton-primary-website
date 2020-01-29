import React from 'react'

import img1 from '../images/Stutton-6-Edited-300x300.jpg'
import img2 from '../images/Stutton-48-Edited-300x300.jpg'
import img3 from '../images/Stutton-14-Edited-300x300.jpg'

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
                        <p className="leading-relaxed">
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
                            <div className="shadow rounded-lg w-64">
                                <div className="h-56 bg-cover rounded-t-lg" style={{ backgroundImage: `url(${img1})`}} />
                                <div className="p-3">
                                    <div>
                                        <h3 className="font-bold text-lg">Title</h3>
                                        <p className="truncate">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, debitis?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow rounded-lg w-64">
                                <div className="h-56 bg-cover rounded-t-lg" style={{ backgroundImage: `url(${img2})`}} />
                                <div className="p-3">
                                    <div>
                                        <h3 className="font-bold text-lg">Title</h3>
                                        <p className="truncate">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, debitis?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow rounded-lg w-64">
                                <div className="h-56 bg-cover rounded-t-lg" style={{ backgroundImage: `url(${img3})`}} />
                                <div className="p-3">
                                    <div>
                                        <h3 className="font-bold text-lg">Title</h3>
                                        <p className="truncate">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, debitis?</p>
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
                        <h2 className="text-2xl font-bold mb-3">Upcoming Events</h2>
                        <p className="mb-3">
                            Google Calendar
                        </p>
                    </div>
                    <div className="shadow-lg rounded-lg px-4 py-2 bg-gray-100">
                        <h2 className="text-2xl font-bold mb-3">Useful Links</h2>
                        <ul className="mb-3">
                            <li>Useful Link 1</li>
                            <li>Useful Link 2</li>
                            <li>Useful Link 3</li>
                            <li>Useful Link 4</li>
                            <li>Useful Link 5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home