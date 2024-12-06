  'use client';
  import React, { useRef, useState } from 'react';
  import CountryCodeInput, { PhoneNumberDetails } from './CountryCodeInput';
  import emailjs from '@emailjs/browser';

  const ContactForm: React.FC = () => {

    const form = useRef<HTMLFormElement>(null);
    const [isChecked, setIsChecked] = useState(true);
    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      phone: ''
    });
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handlePhoneChange = (phoneDetails: PhoneNumberDetails) => {
      console.log(phoneDetails);
      // TypeScript will now provide full type checking
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission logic here, like sending data to an API
    };

    const SetCookies = (arg0: string, arg1: string, arg2: number): void => {
      console.log(`Setting cookie: ${arg0}, ${arg1}, ${arg2}`);
    };

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (form.current) {
        emailjs
          .sendForm('service_earnofs', 'template_owfr0io', form.current, {
            publicKey: 'MNUCYA6SaH4xwOKwA',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              // Optional: Add success message or reset form
            },
            (error) => {
              console.log('FAILED...', error.text);
              // Optional: Add error handling
            },
          );
      }
    };
  


    return (
      <section className="min-h-screen" style={{backgroundColor: 'white'}}>
        <div className="top_bl_bg" style={{height: '100%', minHeight: '100vh'}}>
          <div className="container">
            <div className="contact_wrapper">
              <div className="banner_dflex">
                <div className="banner_cont">
                  <h1 className="heading1">
                    Kickstart Your Digital <br />
                    Journey Today
                  </h1>
                  <div className="heading5">
                    Get all your questions answered by <br className="br-block" />
                    our business development team.
                  </div>
                  <div className="appi-cta cta_flex">
                    <a href="#" className="open-modal btn-career">
                      <span className="text">
                        For Business
                        <span className="arrow">
                          <i>
                            <span>→</span>
                          </i>
                          <svg
                            className="arrow-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                          >
                            <g
                              fill="none"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            >
                              <circle
                                className="arrow-icon--circle"
                                cx="16"
                                cy="16"
                                r="15.12"
                              ></circle>
                            </g>
                          </svg>
                        </span>
                      </span>
                    </a>
                    <a href="https://novotek.ai/career/">
                      <span className="text">
                        For Career
                        <span className="arrow">
                          <i>
                            <span>→</span>
                          </i>
                          <svg
                            className="arrow-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                          >
                            <g
                              fill="none"
                              stroke="#0092ff"
                              strokeWidth="2"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            >
                              <circle
                                className="arrow-icon--circle"
                                cx="16"
                                cy="16"
                                r="15.12"
                              ></circle>
                            </g>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="proposal__request main__contact">
      <h3 className="heading3">Request a proposal</h3>
      <form ref={form} onSubmit={sendEmail} className="form_inner">
        <div className={`contact-grid ${formValues.name ? 'active' : ''}`}>
          <input
            autoComplete="off"
            type="text"
            id="contact_fname"
            name="name"
            required
            className="typedtxt"
            maxLength={50}
            value={formValues.name}
            onChange={handleInputChange}
          />
          <label 
            htmlFor="contact_fname" 
            className={formValues.name ? 'active' : ''}
          >
            Name
          </label>
        </div>
        <div className={`contact-grid ${formValues.email ? 'active' : ''}`}>
          <input
            autoComplete="off"
            type="email"
            id="contact_email"
            name="email"
            required
            className="typedtxt"
            maxLength={50}
            value={formValues.email}
            onChange={handleInputChange}
          />
          <label 
            htmlFor="contact_email" 
            className={formValues.email ? 'active' : ''}
          >
            Work Email
          </label>
        </div>
        <div className="contact-grid select-grid" id="select_budget">
          <select className="typedtxt" id="contact_budget" name="contact_budget">
            <option value="" selected>
              Select a Budget Range
            </option>
            <option value="Still Evaluating">Still Evaluating</option>
            <option value="Less than $50K">Less than $50K</option>
            <option value="$50K - $100K">$50K - $100K</option>
            <option value="$100 - $250K">$100 - $250K</option>
            <option value="More than $250K">More than $250K</option>
          </select>
        </div>
        <CountryCodeInput 
          onPhoneNumberChange={handlePhoneChange} 
          maxLength={15}
        />
        <div className="contact-grid full-grid grid-textarea">
          <textarea
            autoComplete="off"
            name="message"
            id="contact_message"
            className=""
            placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)"
            spellCheck="false"
          ></textarea>
        </div>
        <div className="contact-grid full-grid">
          <div className="col">
            <div className="form-col">
              <div className="appi-cta btn-effect text-center">
                <div id="header_loader" className="formloader-anim">
                  {/* Existing SVG loader */}
                </div>
                <button
                  id="contact_us_btn"
                  type="submit"
                >
                  <span className="text">
                    Submit
                    <span className="arrow">
                      <i><span>→</span></i>
                      <svg className="arrow-icon" xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10">
                          <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                        </g>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <span className="txt">
              Your idea is 100% protected by our non-disclosure agreement.
            </span>
            <div className="tech_trends form-col">
              <div className="custom-checkbox-wrapper">
                <input 
                  type="checkbox" 
                  autoComplete="off" 
                  name="trends" 
                  id="trends" 
                  className="hidden-checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="trends" className="custom-checkbox">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </label>
                <span className="txt">
                  Keep me updated on the upcoming<br /> technology trends
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-checkbox-wrapper {
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .hidden-checkbox {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        
        .custom-checkbox {
          display: inline-block;
          width: 24px;
          height: 24px;
          background-color: ${isChecked ? '#01b2ff' : '#e0e0e0'};
          border: 2px solid ${isChecked ? '#01b2ff' : '#cccccc'};
          border-radius: 4px;
          margin-right: 10px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .custom-checkbox svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          opacity: ${isChecked ? 1 : 0};
          transition: opacity 0.3s ease;
        }
        
        .txt {
          margin-left: 10px;
        }
      `}</style>
      </section>

    );
  };

  export default ContactForm;
// template_ymkjmpp
// service_earnofs
// MNUCYA6SaH4xwOKwA