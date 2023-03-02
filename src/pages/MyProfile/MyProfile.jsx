import React, {useState} from 'react';
import {SlPencil} from "react-icons/sl"
import {Button} from "@chakra-ui/react";
import EmojiPicker from 'emoji-picker-react';
import axios from "../../utils/axios";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../redux/reselect";
import {fillUser} from "../../redux/reducers/user";
import { format } from 'timeago.js';

const MyProfile = () => {

    const [selectEmoji, setSelectEmoji] = useState(false)
    const {user} = useSelector(userSelector)
    const dispatch = useDispatch()

    const [post, setPost] = useState('')

    const addPost = async () => {
        try {

            const res = await axios.patch(`/users/${user._id}/addpost`, {
                text: post,
                owner: user._id,
                id: uuidv4(),
                date: Date.now()
            })

            dispatch(fillUser(res.data))
            setPost('')

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className="profile">
            <div className="container">
                <div className="profile__info">
                    <div className="profile__info-top">
                        <button className="profile__info-cover">
                            <SlPencil/>
                            Change cover
                        </button>
                    </div>
                    <div className="profile__info-bottom">
                        <div className="profile__info-avatar">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_baDvEfYqIi1NMQllLO2fapGPAeG58n2N6Q&usqp=CAU" alt="" className="profile__info-image"/>
                        </div>
                        <div className="profile__info-user">
                            <h3 className="profile__info-name">
                                Ivan Ivanov
                            </h3>
                            <a href="" className="profile__info-about">
                                Enter information about yourself <span>></span>
                            </a>
                        </div>
                        <button className="profile__info-change">
                            Change profile
                        </button>
                    </div>




                </div>


                <div className="profile__addPost">
                    <div className='profile__addPost-top'>
                        <textarea  value={post} onChange={(e) => setPost(e.target.value) } placeholder='Что у вас нового ?' className='profile__addPost-field' />

                        {
                            selectEmoji ? <div className='profile__emoji-block' onMouseLeave={() => setSelectEmoji(false)}>
                                <EmojiPicker   onEmojiClick={(emoji) => setPost(prev => post + emoji.emoji)} />
                            </div>  :  <span onMouseEnter={() => setSelectEmoji(true)} className='profile__addPost-emoji'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8.44 14.3a.9.9 0 0 1 1.26.13c.01.02.2.22.53.43.38.24.97.49 1.77.49a3.3 3.3 0 0 0 1.77-.49c.2-.12.39-.26.53-.43a.9.9 0 0 1 1.4 1.13 4.04 4.04 0 0 1-.97.83 5.1 5.1 0 0 1-2.73.76 5.1 5.1 0 0 1-2.73-.76 3.99 3.99 0 0 1-.97-.83.9.9 0 0 1 .14-1.26Zm1.81-4.05a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15 11.5A1.25 1.25 0 1 0 15 9a1.25 1.25 0 0 0 0 2.5Zm-3-9.4a9.9 9.9 0 1 0 0 19.8 9.9 9.9 0 0 0 0-19.8ZM3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0Z" clipRule="evenodd"></path></svg>
                        </span>

                        }


                    </div>
                    <Button onClick={addPost} colorScheme='teal' variant='outline'>
                        Button
                    </Button>
                </div>

               <div className='profile__posts'>
                   <div className='profile__posts-top'>
                       <Button colorScheme='teal' variant='outline'>
                          Все записи
                       </Button>
                       <Button colorScheme='teal' variant='outline'>
                           Мои записи
                       </Button>
                       <Button colorScheme='teal' variant='outline'>
                           Архив записей
                       </Button>
                   </div>

                   <div className='profile__posts-row'>
                       {
                           user.posts.map((item) => (
                               <div key={item.id} className='profile__post-card '>
                                   <div className='profile__post-card-top'>
                                       {format(item.date, )}
                                   </div>
                                   <p className='profile__post-card-text'>{item.text}</p>
                                   <div className='profile__post-card-icons'>

                                   </div>
                               </div>
                           ))
                       }
                   </div>

               </div>


            </div>

        </section>
    );
};

export default MyProfile;