import { useContext } from 'react'
import myContext from '../context/myContext'
function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context;
    return (
        <section className='mb-4 mt-2'>
            <div className='cotainer py-8'>
                <h1 className='text-center text-3xl font-bold'>Testimonial</h1>
                <h2 className='text-center text-2xl font-semibold mt-1'>What our customer are saying</h2>
                <div className='flex m-5 flex-wrap'>
                    <div className='text-center lg:w-1/3 lg:mb-0'>
                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                        <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                        <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                        <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Senior Product Designer</p>
                    </div>
                    <div className='text-center lg:w-1/3 lg:mb-0'>
                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                        <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                        <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                        <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                        <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">UI Develeoper</p>
                    </div>
                    <div className='text-center lg:w-1/3 lg:mb-0'>
                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                        <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                        <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                        <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                        <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">CTO</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonial
