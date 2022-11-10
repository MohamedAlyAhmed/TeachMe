
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { DataContext } from '../../../DataContext';
import { BASE_URL } from '../Register/Register';

export default function WatchPage() {

    const { userData } = useContext(DataContext);
    const { courseId, vedioID } = useParams();
    let [selectedVedio, setselectedVedio] = useState('');
    const [containt, setContaint] = useState([]);
    let enroll = {};



    useEffect(() => {

        (async function anyNameFunction() {

            let enrollRes = await axios.get(BASE_URL + "/enrolls?course_id=" + courseId + "&user_id=" + userData._id)
            console.log(enrollRes.data);
            enroll = enrollRes.data[0];

            let res = await axios.get(BASE_URL + "/courseContaint?courseID=" + courseId)

            setContaint(res.data[0].containt);
            if (vedioID) {
                for (let i = 0; i < res.data[0].containt.length; i++) {
                    if (res.data[0].containt[i].id == vedioID) {
                        setselectedVedio(res.data[0].containt[i])
                        UpdateCourseProgres(res.data[0].containt[i].id);
                    }
                }
            } else {

                for (let i = 0; i < res.data[0].containt.length; i++) {
                    if (res.data[0].containt[i].id == enroll.progress) {
                        setselectedVedio(res.data[0].containt[i])
                        UpdateCourseProgres(res.data[0].containt[i].id);
                    }
                }

            }

        })();
    }, [])

    const UpdateCourseProgres = (newVar) => {
        setTimeout(() => {
            console.log(enroll);
            if (enroll.progress < newVar) {
                axios.put(BASE_URL + "/enrolls/" + enroll.id, {
                    ...enroll,
                    progress: newVar,
                });
            }
        }, 2000);
    }


    const opts = {
        height: '560',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        < div className="row mx-1" >
            <div className="col-12 col-xl-9">
                <YouTube videoId={selectedVedio.vedioUrl} opts={opts} />
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
