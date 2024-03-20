"use client"
import React from 'react'
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { useState } from 'react';
import Select from 'react-select'

import Style from "./ContactForm.module.scss"
import Link from 'next/link';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const ContactForm = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <form className={Style.contact_form}>
            <div class="mb-4">
                <div className={Style.input_wrap}>
                    <div className={Style.input_field}>
                        <label for="firstname" class="form-label">First Name *</label>
                        <input type="text" class="form-control" id="firstname" placeholder="Enter first name" />
                    </div>
                    <div className={Style.input_field}>
                        <label for="lastname" class="form-label">Last Name *</label>
                        <input type="text" class="form-control" id="lastname" placeholder="Enter last name" />
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <div className={Style.input_wrap}>
                    <div className={Style.input_field}>
                        <label for="number" class="form-label">Phone number *</label>
                        <IntlTelInput
                            preferredCountries={['in']}
                            separateDialCode={true}
                            containerClassName="intl-tel-input"
                            inputClassName="form-control"
                            placeholder="Your phone number"
                            id="number"
                        />
                    </div>
                    <div className={Style.input_field}>
                        <label for="email" class="form-label">Email *</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email address" />
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className={Style.input_wrap}>
                    <div className={Style.input_field}>
                        <label for="service" class="form-label">Service *</label>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            classNamePrefix='selected'
                            placeholder="Select a service"
                            id='service'
                        />
                    </div>
                    <div className={Style.input_field}>
                        <label for="country" class="form-label">Country *</label>
                        <input type="text" class="form-control" id="country" placeholder="Enter your country" />
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <label for="exampleFormControlTextarea1" class="form-label">Message(optional)</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                <span className={Style.form_info}>
                    <span>By clicking the button below, you agree to our{" "}</span>
                    <Link

                        href=""
                        target="_blank"

                    >
                        Terms of Service
                    </Link>{" "}
                    <span>and acknowledge our{" "}</span>
                    <Link
                        href=""
                        target="_blank"

                    >
                        Global Privacy Policy
                    </Link>
                    .
                </span>
            </div>
            <div className={`${Style.btn_wrap}`}>
                <button className="btn outline_btn">
                    <div className="font">Sumbit</div>
                </button>
            </div>
        </form>
    )
}

export default ContactForm