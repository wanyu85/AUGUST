import { createContext, useContext, useState } from "react";

// ! createContext() : 傳遞共享數據
const SubmitContent = createContext();

export function SubmitProvider({ children }) {
    const [errorMessage, setErrorMessage] = useState([]);
    const [submitError, setSubmitError] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <SubmitContent.Provider
            value={{
                errorMessage,
                setErrorMessage,
                submitError,
                setSubmitError,
                loading,
                setLoading,
            }}
        >
            {children}
        </SubmitContent.Provider>
    );
}

// ! useContext : 訪問上下文的值
export function useSubmitStatus() {
    return useContext(SubmitContent);
}
