"use client"
import React, { useEffect, useRef, useState } from 'react'
import './Sidebar.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// 
const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const allLinksRef = useRef<HTMLAnchorElement[]>([]);

    useEffect(() => {
        const current = window.location.href;

        allLinksRef.current.forEach((elem, index) => {
            elem.addEventListener("click", function () {
                const hrefLinkClick = elem.getAttribute('href');

                allLinksRef.current.forEach((link, i) => {
                    if (i === index) {
                        setActiveIndex(i);
                    }
                });
            });
        });

        return () => {
            allLinksRef.current.forEach((elem) => {
                elem.removeEventListener('click', handleClick);
            });
        };
    }, []);

    const handleClick = () => {
        setCollapsed(!collapsed);
    };

    const handleSearchFocus = () => {
        setCollapsed(false);
    };
    // router.push('/dashboard/overview')

    const pathname = usePathname()

    const tab = pathname.split('/').pop()
    
    return (
        <div className={`container ${collapsed ? 'collapsed' : ''}`}>

            <nav className={`sidebar`}>
                <div className="sidebar-top-wrapper">
                    <div className="sidebar-top">
                        <Link href="#" className="logo__wrapper"

                        >
                            <img src="/assets/logo.svg" alt="Logo" className="logo-small" />
                            <span className="hide company-name">
                                Aurora Wealth
                            </span>
                        </Link>
                    </div>
                    <button className="expand-btn" type="button" onClick={handleClick}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="exp-btn" role="img">
                            <title id="exp-btn">Expand/Collapse Menu</title>
                            <path d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
                                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="search__wrapper">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="search-icon" role="img">
                        <title id="search-icon">Search</title>
                        <path
                            d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input type="text" aria-labelledby="search-icon" onFocus={handleSearchFocus} />
                </div>
                <div className="sidebar-links">
                    <ul>
                        <li>
                            <Link href="/dashboard/overview" title="Overview" className={`tooltip ${activeIndex === 0 ? 'active' : ''} ${tab === 'overview' ? 'active' : ''}`} 
                                ref={element => {
                                    if (element) {
                                        allLinksRef.current.push(element);
                                    }
                                }}
                            >

                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round" aria-hidden="true">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4h6v8h-6z" />
                                    <path d="M4 16h6v4h-6z" />
                                    <path d="M14 12h6v8h-6z" />
                                    <path d="M14 4h6v4h-6z" />
                                </svg>
                                <span className="link hide">Overview</span>
                                <span className="tooltip__content">Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/create-table" className={`tooltip ${tab === 'create-table' ? 'active' : ''}`}
                                ref={element => {
                                    if (element) {
                                        allLinksRef.current.push(element);
                                    }
                                }}
                            >
                                
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-bar" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round" aria-hidden="true">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                    <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                    <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                    <path d="M4 20l14 0" />
                                </svg>
                                <span className="link hide">Create Table</span>
                                <span className="tooltip__content">Create Table</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#analytics" title="Analytics" className="tooltip"
                                ref={element => {
                                    if (element) {
                                        allLinksRef.current.push(element);
                                    }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-pie" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round" aria-hidden="true">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
                                    <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
                                </svg>
                                <span className="link hide">Analytics</span>
                                <span className="tooltip__content">Analytics</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="#reports" title="Reports" className="tooltip"
                                ref={element => {
                                    if (element) {
                                        allLinksRef.current.push(element);
                                    }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-analytics" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round" aria-hidden="true">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                    <path d="M9 17v-5" />
                                    <path d="M12 17v-1" />
                                    <path d="M15 17v-3" />
                                </svg>
                                <span className="link hide">Reports</span>
                                <span className="tooltip__content">Reports</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#industries" title="Industries" className="tooltip"
                                ref={element => {
                                    if (element) {
                                        allLinksRef.current.push(element);
                                    }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-factory-2" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round" aria-hidden="true">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 21h18" />
                                    <path d="M5 21v-12l5 4v-4l5 4h4" />
                                    <path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
                                    <path d="M9 17h1" />
                                    <path d="M14 17h1" />
                                </svg>
                                <span className="link hide">Industries</span>
                                <span className="tooltip__content">Industries</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#settings" title="Settings" className="tooltip"
                                ref={element => {
                                    if (element) {
                                        allLinksRef.current.push(element);
                                    }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z">
                                    </path>
                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                </svg>
                                <span className="link hide">Settings</span>
                                <span className="tooltip__content">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#notifications" title="Notifications" className="tooltip"
                                ref={element => {
                                    if (element) {
                                        allLinksRef.current.push(element);
                                    }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round" aria-hidden="true">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                </svg>
                                <span className="link hide">Notifications</span>
                                <span className="tooltip__content">Notifications</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebar__profile">
                    <div className="avatar__wrapper">
                        <img className="avatar" src="/assets/profile.png" alt="Joe Doe Picture" />
                        <div className="online__status"></div>
                    </div>
                    <div className="avatar__name hide">
                        <div className="user-name">Joe Doe</div>
                        <div className="email">joe.doe@atheros.ai</div>
                    </div>
                    <Link href="#logout" className="logout hide">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" aria-labelledby="logout-icon" role="img">
                            <title id="logout-icon">log out</title>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                            <path d="M9 12h12l-3 -3"></path>
                            <path d="M18 15l3 -3"></path>
                        </svg>
                    </Link>
                </div>
            </nav>
        </div>

    )
}

export default Sidebar
