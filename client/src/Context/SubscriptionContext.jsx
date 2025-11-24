import { createContext, useContext, useState } from "react";

export const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {

    const [ subscriptionPlans, setSubscriptionPlans ] = useState([]);

    const Add_New_Plan = (planData) => {
        const plan_with_ID = { ...planData, id: Date.now() };
        setSubscriptionPlans(...subscriptionPlans, plan_with_ID);
    }

    console.log("subscription Plans Data: ", subscriptionPlans);

    return (
        <SubscriptionContext.Provider value={{subscriptionPlans, Add_New_Plan}}>
            {children}
        </SubscriptionContext.Provider>
    )

}

export const useSubscription = () => {
    return useContext(SubscriptionContext);
}