import React from 'react';
import {useNavigate} from "react-router-dom"

const HomeAside = () => {

    const navigate = useNavigate()

    return (
        <aside className="aside">
            <ul className="aside__menu">
                <li className="aside__item" onClick={() => navigate('/myprofile')}>
                    My profile
                </li>
                <li className="aside__item" onClick={() => navigate('/friends')}>
                    Friends
                </li>
            </ul>
        </aside>
    );
};

export default HomeAside;