import React from 'react'
import './mycertifecates.css'

export default function MyCertificates() {
  return (
    <div className='my-certifacates container-lg'>
      <div className="empty-section">
        <h2 className="page-title"> My Certificates </h2>
        <div className='empty-section_main'>
          <div className='empty-img'>
            <img className='w-100' src="assets/noCertificates.png" alt="" />
          </div>
          <p className="empty-section-title">
            You haven’t generated any certificates yet
          </p>
          <p className="empty-section-subtitle">
            If you have completed courses you can generate a certificate from the course recap section.
          </p>
        </div>
      </div>
    </div>
  )
}
