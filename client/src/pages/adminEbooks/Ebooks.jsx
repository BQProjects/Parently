import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const Ebooks = () => {

    const { pathname } = useLocation();
    const isChildren = pathname === "/admin/content-management/e-books"

    return (
        <>
            {
                isChildren && (
                    <div>Ebooks</div>
                )
            }

            <Outlet />
        </>
    )
}

export default Ebooks