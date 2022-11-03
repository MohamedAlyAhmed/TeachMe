import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/reducers/counter'
import { getCourses, getInstructors } from '../../redux/reducers/server'



// from Ahmed magdy ... this is demo of using redux reducers on your View .
// use useSelector .
// and user dispatch .    ---> like you see .



export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="getCourses"
                    onClick={() =>
                        dispatch(getCourses())}
                >
                    getCourses
                </button>
            </div>
        </div>
    )
}