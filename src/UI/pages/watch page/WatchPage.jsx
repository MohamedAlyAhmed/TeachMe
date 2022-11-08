import { current } from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { BASE_URL } from '../Register/Register';


export default function WatchPage() {

    const { id } = useParams();
    let [selectedVedio, setselectedVedio] = useState('');
    let [containt, setContaint] = useState([]);



    useEffect(() => {
        axios.get(BASE_URL + "/courseContaint?  =" + id).then(data => {
            console.log(data.data);
            setContaint(data.data[0].containt);
            setselectedVedio(data.data[0].containt[0])
        });
    }, [])


    const opts = {
        height: '560',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const onReady = (e) => {
        // access to player in all event handlers via event.target
        e.target.pauseVideo();
    }


    const changeVedio = (containtindex) => {
        setselectedVedio(containt[containtindex]);
        console.log(containtindex);
    }

    return (
        < div className="row mx-1" >
            <div className="col-12 col-xl-9">
                <YouTube videoId={selectedVedio.vedioUrl} opts={opts} onReady={onReady} />
            </div>
            <div className="col-12 col-xl-3">
                <div className='border p-3'>

                    {
                        containt.map((e, i) =>
                            <div>
                                <a onClick={() => { changeVedio(i) }}>
                                    {e.title}
                                </a>
                                {i != containt.length - 1 ? <hr /> : ''}
                            </div>
                        )
                    }
                </div>
            </div>
        </div >

    )
}
