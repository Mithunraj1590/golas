import React from 'react'
import Style from "./ContactUs.module.scss"
import ContactForm from '@/src/utils/ContactForm'

const ContactUs = ({ data }) => {
  return (
    <section className={Style.contactus}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className={Style.content}>
              <h2 className={Style.title}>{data?.title}</h2>
              <p>{data?.description}</p>
              <a href={`tel:${data?.call}`}>{data?.call}</a>
              <a href={`mailto:${data?.email}`}>{data?.email}</a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className={Style.form}>
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs