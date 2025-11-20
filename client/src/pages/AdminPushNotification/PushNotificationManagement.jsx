import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const PushNotificationManagement = () => {

    const { pathname } = useLocation();
    const isChildren = pathname === "/admin/push-notification-management"

    return (
        <div>
            {
                isChildren && (
                    <>
                        <h1>Push Notification Management</h1>
                    </>
                )
            }
            <Outlet />
        </div>
    )
}

export default PushNotificationManagement