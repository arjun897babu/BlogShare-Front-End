import { Link, Outlet } from 'react-router-dom'
import appLogo from '/blogshareIcon.png'
import { useState } from 'react'
function Home() {
    const [theme, setTheme] = useState('light')
    function changeTheme() {
         const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme)
    }

    return (
        <>
            <div className="drawer bg-emerald-200 ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <header className="navbar w-full py-4 md:py-8 ">
                        <div className="flex-none xs:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex items-center gap-2 text-black  font-bold text-lg md:text-3xl w-full">
                            <img
                                src={appLogo}
                                alt="BlogShare Logo"
                                className="w-8 h-8 xs:w-10 xs:h-10 object-contain xs:ml-2"
                            />
                            BlogShare
                            <input
                                className="focus:outline-none bg-gray-50 border border-gray-200 rounded-lg text-xs xs:text-sm py-2 font-normal px-2"
                                placeholder="search"
                                type="search"
                                name="search"
                            />

                        </div>

                        <div className="hidden flex-none xs:block ">
                            <ul className="menu menu-horizontal  gap-4">
                                <li className='p-3  font-bold  btn  transition duration-100 hover:text-emerald-500'>My Blog</li>
                                <li className='p-3  font-bold  btn  transition duration-100 hover:text-emerald-500'>Create Blog</li>
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-error rotate-90">
                                        <span className="block w-0.5 h-1 bg-current rounded-full"></span>
                                        <span className="block w-0.5 h-1 bg-current rounded-full"></span>
                                        <span className="block w-0.5 h-1 bg-current rounded-full"></span>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content bg-emerald-200 menu gap-3 rounded-box z-40 w-52 p-2 shadow">
                                        <li>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-sm"
                                                onChange={changeTheme}
                                                checked={theme === "dark"}
                                            />
                                        </li>
                                        <li><button className='btn btn-neutral'>Log out</button></li>
                                    </ul>
                                </div>
                            </ul>

                        </div>
                    </header>
                </div>
                <div className="drawer-side z-40 ">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-emerald-200 min-h-full w-80 p-4">
                        <li><Link to={'/'} >Home</Link></li>
                        <li><Link to={''} >My Blog</Link></li>
                        <li><Link to={''} >Create Blog</Link></li>
                        <li><button className='btn btn-neutral mt-10' type="button">Log out</button></li>
                    </ul>
                </div>
            </div>
            <section className='mx-auto max-w-screen-2xl px-4 md:px-8 '>
                <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                    {/* left section with heading */}
                    <div className=" xs:relative top-16 mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 xs:w-5/12 lg:pb-24 lg:pt-48">
                        <h1 className="mt-4 xs:mt-0 mb-4 text-3xl font-bold text-black xs:text-3xl md:mb-8 title">
                            Where Ideas Meet Words<br />Conversations Begin.
                        </h1>
                        <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                            Engage with your readers' emotions and inspire them to make positive changes in their lives and habits.
                        </p>
                    </div>

                    {/* right section with images */}
                    <div className="flex w-full md:mb-16 xs:w-1/2 mt-10">
                        <div className="relative left-12 top-12 -ml-10 overflow-hidden rounded-lg shadow-lg md:left-16 md:top-16 lg:ml-0">
                            <img
                                src="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png"
                                loading="lazy"
                                alt="Blog Images (Stock Photo)"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="overflow-hidden z-10 rounded-lg shadow-lg">
                            <img
                                src="https://www.ryrob.com/wp-content/uploads/2022/02/iStock-956891332.jpg"
                                loading="lazy"
                                alt="Photo by Manny Moreno"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    )
}


export default Home