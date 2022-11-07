import { Grid } from '@mui/material';
import { fontSize } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../DataContext';
import MyButton from '../../components/Button/Button';
import AboutThisCourseDetails from './AboutThisCourseDetails';

export const CoursePage = () => {

    let { id } = useParams();
    const [course, setCourse] = useState({});
    const [menetor, setMenetor] = useState({});

    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        axios.get(`${BASE_URL}/courses/${id}`).then((data) => {
            setCourse(data.data);
            console.log(course);

            axios.get(`${BASE_URL}/instructors/${data.data.mentors[0].id}`).then((mentorRes) => {
                setMenetor(mentorRes.data);
                setisLoading(true);
            });


        });


    }, [])


    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor((d % 3600) / 60);
        var s = Math.floor((d % 3600) % 60);

        var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? "m " : "m ") : "";
        return hDisplay + mDisplay;
    }



    return (
        <div>
            {
                isLoading ?
                    <div className="container ">
                        <div className="row my-5" style={{ height: 400 }}>
                            <div className="col-8 h-100 " >
                                <img className='w-100 h-100 rounded-3' src={course.image} alt={course.name} style={{ objectFit: "cover" }} />
                            </div>
                            <div className="col-4 h-100">
                                <div className='ms-4 shadow h-100 body rounded-3 p-3'  >
                                    <h2 className=' text-start fw-bold'>{course.name}</h2>
                                    <div>
                                        <span>
                                            <i className="fa-solid fa-stairs "></i>
                                        </span>
                                        <p className='d-inline ms-2'>  Level : General </p>
                                    </div>

                                    <div className='mt-2'>
                                        <span>
                                            <i className="fa-regular fa-clock"></i>
                                        </span>
                                        <p className='d-inline ms-2'>Duration : {secondsToHms(course.duration)}</p>
                                    </div>

                                    <div className='mt-2'>
                                        <span>
                                            <i className="fa-solid fa-volume-high"></i>
                                        </span>
                                        <p className='d-inline ms-2'>Course Language: Arabic</p>
                                    </div>
                                    <div className='mt-5'>
                                        <MyButton fillWidth={true} >Subscribe now</MyButton>
                                    </div>
                                    <p className='text-center mt-2' style={{ fontSize: 10 }}>Get access to all courses only for 91.67 EGP /mo</p>
                                    <hr />
                                    <div className='mt-2 text-center' style={{ fontSize: 12 }}>
                                        <span>
                                            <i className="fa-solid fa-share-nodes"></i>
                                        </span>
                                        <p className='d-inline ms-2'>Share Course</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>Categories : Media, Photography & Film</p>

                        <h4 className='text-start mt-5'>About this course</h4>

                        <div className='text-start mt-5'>

                            <img className='mb-4 me-4' src={menetor.image} alt="" style={{ borderRadius: "50%", width: 80, height: 80, objectFit: "cover" }} />

                            <div className='d-inline-block ' >
                                <p className='m-0 text-start fs-5 fw-semibold'> {menetor.name}</p>
                                <p>{menetor.title}</p>
                            </div>
                        </div>
                        <AboutThisCourseDetails>
                            {course.description}
                            <div className='d-flex justify-content-between  tx-primary mt-3 ' style={{ fontSize: 12 }} >

                                <span>
                                    <i className="fa-regular fa-clock me-1"></i>
                                    Duration : {secondsToHms(course.duration)}
                                </span>
                                <span>
                                    <i className="fa-solid fa-volume-high me-1"></i>
                                    Course Language: Arabic

                                </span>
                                <span>
                                    <i className="fa-solid fa-calendar-days me-1"></i>
                                    releasedAt : {new Date(course.releasedAt).toDateString()}
                                </span>
                            </div>
                        </AboutThisCourseDetails>


                        <h4 className='text-start mt-5'>In this course you will learn</h4>
                        <div className='row'>
                            {
                                course.learningOutcomes.map((e) => {
                                    if (e.isImage) {
                                        return null
                                    } else {
                                        return (
                                            <div className='col'  >
                                                <AboutThisCourseDetails hasMaxHeight={true}>
                                                    {e.body}
                                                </AboutThisCourseDetails>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>


                        <h4 className='text-start mt-5'>Course Benefits</h4>
                        <div className=' mt-3 ' style={{ fontSize: 16 }} >
                            <div className=' mt-4'>
                                <i className="fa-solid fa-lock  me-3"></i>
                                Access anywhere, anytime.
                            </div>
                            <div className=' mt-4'>
                                <i className="fa-solid fa-book-open  me-3"></i>
                                Learn at your own pace.
                            </div>
                            <div className=' mt-4'>
                                <i className="fa-solid fa-certificate me-3"></i>
                                Certificate of completion.
                            </div>
                        </div>

                        <section className='mt-5'>
                            <AboutThisCourseDetails backgroundColor={"#B5DDE7"}>

                                <h4 className='text-start'>Course requirements and prerequisites</h4>

                                There are no requirements for this course. Your interest in the topic and your commitment to learning are all you need to achieve the utmost benefit from this course.

                            </AboutThisCourseDetails>
                        </section>


                    </div>
                    :
                    <h2>Is Loading</h2>
            }
        </div >
    );

}

export default CoursePage
