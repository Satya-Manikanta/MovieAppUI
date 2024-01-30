import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({ data }) {

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
        data.setAuthorized(false);
        navigate("/");
    }, [])

    return (
        <div>If you are seeing this page... Please close this tab and open a new one</div>
    )
}

export default Logout