import React from 'react'

import img1 from '../images/Stutton-6-Edited-300x300.jpg'
import img2 from '../images/Stutton-48-Edited-300x300.jpg'
import img3 from '../images/Stutton-14-Edited-300x300.jpg'
import img4 from '../images/Stutton-42-Edited-300x300.jpg'
import img5 from '../images/Stutton-64-Edited-300x300.jpg'
import img6 from '../images/Stutton-69-Edited-300x300.jpg'

const latestNews = [
    {
        title: 'Title One',
        subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aperiam.',
        img: img1,
    },
    {
        title: 'Title Two',
        subTitle: 'Lorem ipsum dolor sit amet.',
        img: img2,
    },
    {
        title: 'Title Three',
        subTitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem, ea non ipsam hic fugiat!',
        img: img3,
    },
    {
        title: 'Title Four',
        subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error incidunt in dolore ex corporis eos accusamus itaque dolor eum id!',
        img: img4,
    },
    {
        title: 'Title Five',
        subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        img: img5,
    },
    {
        title: 'Title Six',
        subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus beatae neque voluptatum?',
        img: img6,
    },
]

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
                <div className="w-full">
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
                        <div className="flex flex-wrap -m-2">
                            { latestNews.map(article => {
                                return (
                                    <div className="flex flex-col justify-between w-56 flex-grow m-2 shadow-lg p-2 rounded">
                                        <div>
                                            <div>
                                                <img className="w-full" src={article.img} alt="Photo of children at school"/>
                                            </div>
                                            <div className="text-lg font-bold my-2">{article.title}</div>
                                            <div className="mb-2">{article.subTitle}</div>
                                        </div>
                                        <div className="bg-blue-400 text-sm uppercase px-3 py-1 text-white rounded self-end">Read More</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-64 lg:ml-4">
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