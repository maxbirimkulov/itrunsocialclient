import React from 'react';
import {RiUserAddLine} from "react-icons/ri"
import {AiOutlineSearch} from "react-icons/ai"
const Friends = () => {
    return (
        <section className="friends">
            <div className="friends__row">
                <div className="friends__follow">
                    <div className="friends__top">
                        <h2 className="friends__title">
                            Search friends
                        </h2>
                    </div>
                    <div className="friends__search">
                        <input type="text" className="friends__search-input" placeholder={"Search"}/>
                        <button className="friends__search-btn">
                            <AiOutlineSearch/>
                        </button>
                    </div>
                    <div className="friends__cards">
                        <div className="friends__card">
                            <img src="https://sun3.userapi.com/sun3-17/s/v1/if2/-ULF1wM1YoL9Q8I_VdafST8prhXataNylAgS9uYOrDMauYAQrJjpQFJn8eXkJInlo7OC24bgVXx7v_qQy2TRGk9q.jpg?size=200x200&quality=96&crop=72,96,576,576&ava=1" alt="" className="friends__card-img"/>
                            <div className="friends__card-bottom">
                                <div className="friends__card-info">
                                    <a href="" className="friends__card-link">
                                        Ivan Ivanov
                                    </a>
                                    <p className="friends__card-friends">
                                        Нет общих друзей
                                    </p>
                                </div>
                                <button className="friends__card-btn">
                                    <RiUserAddLine/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="friends__filter">

                </div>
            </div>
        </section>
    );
};

export default Friends;