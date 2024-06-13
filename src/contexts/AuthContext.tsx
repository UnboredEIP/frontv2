import { createContext, FC, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<any>(null);

interface AuthTokens {
    authToken: string,
    refreshToken: string,
}

const AuthProvider: FC<{children: React.ReactNode}> = ({ children }) => {
    const [authToken, setAuthToken] = useState<AuthTokens>();

    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        const sessionToken = sessionStorage.getItem("authToken");
        const localToken = localStorage.getItem("authToken");
        if (sessionToken) {
            return jwtDecode(sessionToken);
        } else if (localToken) {
            return jwtDecode(localToken);
        }
        return null;
    });

    const Log = async(email: string, password: string, stay: boolean) => {
        await fetch('https://x2025unbored786979363000.francecentral.cloudapp.azure.com/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(response => response.json())
        .then(data => {
            if (data.statusCode === 202) {
                if (stay === true) {
                    localStorage.setItem("authToken", data.token);
                    localStorage.setItem("refreshToken", data.refresh);
                } else {
                    sessionStorage.setItem("authToken", data.token);
                    sessionStorage.setItem("refreshToken", data.refresh);                    
                }
                setAuthToken({authToken: data.token, refreshToken: data.refresh})
                setUser(jwtDecode(data.token))
                navigate("/events")
            }
        })
    }

    const Register = async(username: string, email: string, password: string, date: string, sexe: string, url: string) => {
        const response = await fetch("https://x2025unbored786979363000.francecentral.cloudapp.azure.com/auth"+url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
                username,
                email,
                password,
                birthdate: date,
                gender: sexe
            })
        })
        const data = await response.json();
        if (data.statusCode === 201) {
            navigate("/");
        }
    }

    const Disconnect = () => {
        setUser(null)
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");

        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("refreshToken");

        navigate("/")
    }

    useEffect(() => {
        const sessionToken = sessionStorage.getItem("authToken");
        const localToken = localStorage.getItem("authToken");

        if (sessionToken && !authToken) {
            setAuthToken({
                authToken: sessionToken,
                refreshToken: sessionStorage.getItem("refreshToken") || '',
            });
        } else if (localToken && !authToken) {
            setAuthToken({
                authToken: localToken,
                refreshToken: localStorage.getItem("refreshToken") || '',
            });
        }
    }, [authToken]);

    const contextData = {
        user,
        authToken,
        Disconnect,
        Log,
        Register,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;