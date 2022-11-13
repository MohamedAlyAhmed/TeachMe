import React from 'react'
import './SaveList.css'

export default function SavedList() {
    return (
        <div>
            <h2>Saved Courses</h2>
            <div className="empty">
                <div className="empty-img"></div>
                <div className="empty-text">
                    <h3> Your wishlist is empty </h3>
                    <p> Tap the save icon on any course card or course page to wishlist it and get back to it later </p>
                    <button className='btn btn-outline-light empty-btn'>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}
