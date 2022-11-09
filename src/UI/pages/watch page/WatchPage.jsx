
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { BASE_URL } from '../Register/Register';

export default function WatchPage() {

    const { courseId, vedioID } = useParams();
    let [selectedVedio, setselectedVedio] = useState('');
    let [containt, setContaint] = useState([]);



    useEffect(() => {
        axios.get(BASE_URL + "/courseContaint?courseID=" + courseId).then(data => {
            setContaint(data.data[0].containt);
            if (vedioID) {
                for (let i = 0; i < data.data[0].containt.length; i++) {
                    if (data.data[0].containt[i].id == vedioID) {
                        setselectedVedio(data.data[0].containt[i])
                    }

                }
            } else {
                setselectedVedio(data.data[0].containt[0])
            }
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

    const goToOtherVedio = (VID) => {
        // navigate(`/watch/${courseId}/${VID}`);
        // window.location.reload();
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
                            <div key={i}>
                                <a
                                    href={`/watch/${courseId}/${e.id}`}
                                    className={e.id == selectedVedio.id ? 'tx-primary' : ''}
                                >
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
