import { createContext, useContext } from "react";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {

    const Data = [
        {
            id: 1, name: "John Smith", emailId: "john.smith@email.com", date: "2025-01-15", status: "Subscribed", subScriptionType: "Premium",
            RecentActivity: [{
                activity1: "Viewed eBook 'Learn React'", date1: "2024-08-10",
                activity2: "Completed eBook 'JavaScript Basics'", date2: "2024-12-12",
                activity3: "Profile updated", date3: "2024-06-14"
            }],
        },
        {
            id: 2, name: "John Smith", emailId: "john.smith@email.com", date: "2024-10-15", status: "Subscribed", subScriptionType: "Premium",
            RecentActivity: [{
                activity1: "Viewed eBook 'Learn React'", date1: "2024-08-10",
                activity2: "Completed eBook 'JavaScript Basics'", date2: "2024-12-12",
                activity3: "Profile updated", date3: "2024-06-14"
            }],
        },
        {
            id: 3, name: "John Smith", emailId: "john.smith@email.com", date: "2025-01-15", status: "Free", subScriptionType: "Premium",
            RecentActivity: [{
                activity1: "Viewed eBook 'Learn React'", date1: "2024-08-10",
                activity2: "Completed eBook 'JavaScript Basics'", date2: "2024-12-12",
                activity3: "Profile updated", date3: "2024-06-14"
            }],
        },
        {
            id: 4, name: "John Smith", emailId: "john.smith@email.com", date: "2025-04-15", status: "Free", subScriptionType: "Premium",
            RecentActivity: [{
                activity1: "Viewed eBook 'Learn React'", date1: "2024-08-10",
                activity2: "Completed eBook 'JavaScript Basics'", date2: "2024-12-12",
                activity3: "Profile updated", date3: "2024-06-14"
            }],
        },
        {
            id: 5, name: "John Smith", emailId: "john.smith@email.com", date: "2024-10-15", status: "Free", subScriptionType: "Premium",
            RecentActivity: [{
                activity1: "Viewed eBook 'Learn React'", date1: "2024-08-10",
                activity2: "Completed eBook 'JavaScript Basics'", date2: "2024-12-12",
                activity3: "Profile updated", date3: "2024-06-14"
            }],
        },
    ]

    const SubscriptionList = () => {
        const Unique_SubscriptionList = new Set(Data.map((user) => user.status));

        return [`${"All " + "Subscriptions"}`, ...Unique_SubscriptionList];
    }

    console.log("Subscription List:", SubscriptionList());

    const RegisterationDate = () => {
        const Unique_RegisterationDate = new Set(Data.map((user) => user.date));

        return [`${"All " + "Dates"}`, ...Unique_RegisterationDate];
    }


    return (
        <UsersContext.Provider value={{ Data, SubscriptionList, RegisterationDate }}>
            {children}
        </UsersContext.Provider>
    )
}

export const UseUsers = () => {
    return useContext(UsersContext);
}