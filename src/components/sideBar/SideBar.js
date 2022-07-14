import React from 'react'
import "./_sideBar.scss"
import {
        MdSubscriptions,
        MdHome,
        MdExitToApp,
        MdThumbUp,
        MdHistory,
        MdLibraryBooks,
        MdSentimentSatisfied

} from 'react-icons/md'
const SideBar = () => {
        return (
                <nav className='sidebar'>
                        <li>

                                <MdHome size={23} />
                                <span>Home</span>
                                <MdHome size={23} />
                                <span>Home</span>
                                <MdHome size={23} />
                                <span>Home</span>
                                <MdHome size={23} />
                                <span>Home</span>
                                <MdHome size={23} />
                                <span>Home</span>
                        </li>

                </nav>
        )
}

export default SideBar