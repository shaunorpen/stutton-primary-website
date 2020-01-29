import React from 'react'

function Home () {
    return (
        <div>
            <div className="bg-green-200 px-48 py-5">
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
                    <div className="shadow-lg rounded-lg px-4 py-2 bg-gray-100">
                        <h2 className="text-2xl font-bold mb-3">Latest News</h2>
                        <div className="flex">
                            <div className="shadow-outline mr-3 mb-3 p-4">
                                <h3 className="font-bold text-lg">Title</h3>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil aspernatur, suscipit ducimus corporis eos deserunt accusamus provident perferendis autem!</p>
                                <a href="#" className="bg-blue-500 hover:bg-blue-400 border rounded-lg px-4 py-1 mt-5 text-white text-sm text-bold inline-block">Read more...</a>
                            </div>
                            <div className="shadow-outline mr-3 mb-3 p-4">
                                <h3 className="font-bold text-lg">Title</h3>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil aspernatur, suscipit ducimus corporis eos deserunt accusamus provident perferendis autem!</p>
                                <a href="#" className="bg-blue-500 hover:bg-blue-400 border rounded-lg px-4 py-1 mt-5 text-white text-sm text-bold inline-block">Read more...</a>
                            </div>
                            <div className="shadow-outline mr-3 mb-3 p-4">
                                <h3 className="font-bold text-lg">Title</h3>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil aspernatur, suscipit ducimus corporis eos deserunt accusamus provident perferendis autem!</p>
                                <a href="#" className="bg-blue-500 hover:bg-blue-400 border rounded-lg px-4 py-1 mt-5 text-white text-sm text-bold inline-block">Read more...</a>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="shadow-outline mr-3 mb-3 p-4">
                                <h3 className="font-bold text-lg">Title</h3>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil aspernatur, suscipit ducimus corporis eos deserunt accusamus provident perferendis autem!</p>
                                <a href="#" className="bg-blue-500 hover:bg-blue-400 border rounded-lg px-4 py-1 mt-5 text-white text-sm text-bold inline-block">Read more...</a>
                            </div>
                            <div className="shadow-outline mr-3 mb-3 p-4">
                                <h3 className="font-bold text-lg">Title</h3>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil aspernatur, suscipit ducimus corporis eos deserunt accusamus provident perferendis autem!</p>
                                <a href="#" className="bg-blue-500 hover:bg-blue-400 border rounded-lg px-4 py-1 mt-5 text-white text-sm text-bold inline-block">Read more...</a>
                            </div>
                            <div className="shadow-outline mr-3 mb-3 p-4">
                                <h3 className="font-bold text-lg">Title</h3>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil aspernatur, suscipit ducimus corporis eos deserunt accusamus provident perferendis autem!</p>
                                <a href="#" className="bg-blue-500 hover:bg-blue-400 border rounded-lg px-4 py-1 mt-5 text-white text-sm text-bold inline-block">Read more...</a>
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