import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const Videos = () => {

    const { pathname } = useLocation();
    const isChildren = pathname === "/admin/content-management/videos";

    return (
        <>
            {
                isChildren && (
                    <div>Videos</div>
                )
            }
            <Outlet />
        </>
    )
}

export default Videos