import React from 'react';

const ConsultationForm = () => (
  <div className="app_form_panel">
    <div className="container">
      <div className="talk_us_inner">
        <div className="ds_flex flex_spc_btw flex_al_center">
          <div className="col-50">
            <h2 className="appi__head2">Our Technology Experts Are Change Catalysts</h2>
            <h5 className="appi__head5 wht">Book A Free Consultation Call With Our Experts Today</h5>
          </div>
          <div className="col-50">
            <div className="form_hm_panel">
              <div className="form-row">
                <input
                  className="form_control"
                  id="form_fname"
                  name="form_fname"
                  placeholder="Full Name"
                  type="text"
                  onKeyDown={(e) => console.log('validateName', e)}
                />
              </div>
              <div className="form-row">
                <input
                  className="form_control"
                  id="form_email"
                  name="form_email"
                  placeholder="E-mail ID*"
                  type="email"
                />
              </div>
              <div className="form-row ds_flex">
                <input
                  className="form_control"
                  id="form_phonemuber"
                  name="form_phonemuber"
                  placeholder="Contact Number"
                  type="text"
                  onKeyDown={(e) => console.log('checkphonenumber', e)}
                />
              </div>
              <div className="form-row select-grid">
                <select className="typedtxt" id="form_budget" name="form_budget">
                  <option value="">Select a Budget Range</option>
                  <option value="Still Evaluating">Still Evaluating</option>
                  <option value="Less than $50K">Less than $50K</option>
                  <option value="$50K - $100K">$50K - $100K</option>
                  <option value="$100 - $250K">$100 - $250K</option>
                  <option value="More than $250K">More than $250K</option>
                </select>
              </div>
              <div className="form-row">
                <textarea
                  className="form_control msg"
                  id="form_message"
                  name="form_message"
                  placeholder="Project Description*"
                />
              </div>
              <div className="form-row ds_flex flex_spc_btw flex_al_center">
                <div className="user_agreement_nda">
                  <input id="agreementa" name="agreementa" type="checkbox" />
                  <label htmlFor="agreementa" id="user_aggrement">
                    Include Copy of a Non-Disclosure Agreement
                  </label>
                </div>
                <div className="form-captcha ds_flex flex_spc_btw flex_al_center captchtext">
                  <span className="captcha-text">2 + 1 =</span>
                  <input className="type_text" id="captc" name="captc" type="number" maxLength={2} />
                </div>
              </div>
              <div className="common__btn">
                <button className="btn_line btn-effect">
                  <span>Request Proposal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ConsultationForm;
