export const LeadIntakeForm = () => {
    return (
        <div className="container-fluid">
            <label>
                <span class="required-marker">*</span> All fields with an asterisk are required.</label>
            <h1 class="row">Small Commercial Lead Intake Form</h1>
            <br /> Increase your chances of a sale by warm transferring your customer to the Business Lines Sales Center at
            <strong> 844-219-6911</strong>! Don’t forget to fill out this form, first!
            <br />
            <br />
            <h1 class="row">Agency Information<br /></h1>
            <br />
            <form className="container-fluid">

                <div className="row-offset-double" >
                    <div className="col-md-6 form-group lmgbi_formEntry">
                        <span className="required-marker"></span>
                        <label className="lmgbi_formTitle" htmlFor="name-input">
                            Liberty Rep Full Name
                        </label>
                        <br />
                        <input id="name-input" type="text"
                            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
                            name="" />
                        <br />
                        <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>
                            Liberty Rep Full Name required</span>
                    </div>
                    <div className="col-md-6 form-group lmgbi_formEntry">
                        <span className="required-marker"></span>
                        <label className="lmgbi_formTitle" htmlFor="name-input">
                            USCM Rep N Number
                        </label>
                        <br />
                        <input id="name-input" type="text"
                            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
                            name="" />
                        <br />
                        <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>
                            USCM Rep N Number required</span>
                        <span id="USCMRepNNumber_Alert" style={{ color: 'red', display: 'none' }}>
                            Rep N number must be entered as Nxxxxxxx or nxxxxxxx.</span>
                        <span id="USCMRepNNumber_Alert1" style={{ color: 'red', display: 'none' }}>
                            Rep N number not valid</span>
                    </div>
                </div>
                <input type="hidden" value="1" />
                <input type="hidden" value="alexander.klatt@libertymutual.com" />

                <div class="row row-offset-double">
                    <div class="lmgbi_formEntry form-group col-sm-6">
                        <span class="required-marker"></span>
                        <label class="lmgbi_formTitle">Liberty Rep Liberty Mutual eMail</label>
                        <input class="form-control lmgbi_formValue lmgbi_formRequired lmgbi_formValidEmail lmgbi_useNameAttr"
                            type="text" maxlength="80" data-field-name="00N3n000003vMG6" />
                        <span class="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Valid Email Address required</span>
                    </div>
                    <div class="lmgbi_formEntry form-group col-sm-6">
                        <span class="required-marker"></span>
                        <label class="lmgbi_formTitle">Cell Phone Number<strong>(Numbers Only)</strong></label>
                        <input class="form-control lmgbi_formValue lmgbi_formRequired lmgbi_formValidFax lmgbi_useNameAttr"
                            type="text" maxlength="10" data-field-name="00N3n000003vMG8" />
                        <span class="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>
                            Valid Cell Phone Number (Numbers Only) required</span>
                    </div>
                </div>


                <h1 className="row">Prospective Customer</h1>
                <div className="form-group">
                    <div className="row row-offset-double">
                        <div className="lmgbi_formEntry form-group col-sm-6">
                            <span className="required-marker"></span><label className="lmgbi_formTitle">Named Insured</label><input className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" type="text" maxlength="255" data-field-name="company" /><span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Business Name required</span>
                        </div>
                        <div className="lmgbi_formEntry form-group col-sm-6">
                            <span className="required-marker"></span><label className="lmgbi_formTitle">First Name</label><input className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" type="text" maxlength="40" data-field-name="first_name" /><span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>First Name required</span>
                        </div>
                    </div>
                    <div className="row row-offset-double">
                        <div className="lmgbi_formEntry form-group col-sm-6">
                            <span className="required-marker"></span><label className="lmgbi_formTitle">Last Name</label><input className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" type="text" maxlength="80" data-field-name="last_name" /><span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Last Name required</span>
                        </div>
                        <div className="lmgbi_formEntry form-group col-sm-6">
                            <span className="required-marker"></span><label className="lmgbi_formTitle">Phone Number</label><input className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_formValidFax lmgbi_useNameAttr" type="text" maxlength="10" data-field-name="phone" /><span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Valid Phone Number (Numbers Only)required</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row row-offset-double">
                            <div className="lmgbi_formEntry form-group col-sm-6">
                                <span className="required-marker"></span><label className="lmgbi_formTitle">Street Address</label><input className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" type="text" maxlength="255" data-field-name="street" /><span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Street Address required</span>
                            </div>
                            <div className="lmgbi_formEntry form-group col-sm-6">
                                <span className="required-marker"></span><label className="lmgbi_formTitle">City</label><input className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" id="City" type="text" maxlength="25" data-field-name="city" /><span className="lmgbi_formAlert" id="City_Alert0" style={{ color: 'red', display: 'none' }}>City required</span><span id="City_Alert" sstyle={{ color: 'red', display: 'none' }}></span>
                            </div>
                        </div>
                        <div className="row row-offset-double">
                            <div className="lmgbi_formEntry form-group col-sm-2">
                                <span className="required-marker"></span><label className="lmgbi_formTitle">State</label>
                                <select className="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_formValidState lmgbi_useNameAttr" data-field-name="state" style={{
                                    width:
                                        '162.37%'
                                }}>
                                    <option disabled="true" selected="selected">Select State</option>
                                    <option value="AK">AK</option>
                                    <option value="AL">AL</option>
                                    <option value="AR">AR</option>
                                    <option value="AZ">AZ</option>
                                    <option value="CA">CA</option>
                                    <option value="CO">CO</option>
                                    <option value="CT">CT</option>
                                    <option value="DC">DC</option>
                                    <option value="DE">DE</option>
                                    <option value="FL">FL</option>
                                    <option value="GA">GA</option>
                                    <option value="HI">HI</option>
                                    <option value="IA">IA</option>
                                    <option value="ID">ID</option>
                                    <option value="IL">IL</option>
                                    <option value="IN">IN</option>
                                    <option value="KS">KS</option>
                                    <option value="KY">KY</option>
                                    <option value="LA">LA</option>
                                    <option value="MA">MA</option>
                                    <option value="MD">MD</option>
                                    <option value="ME">ME</option>
                                    <option value="MI">MI</option>
                                    <option value="MN">MN</option>
                                    <option value="MO">MO</option>
                                    <option value="MS">MS</option>
                                    <option value="MT">MT</option>
                                    <option value="NC">NC</option>
                                    <option value="ND">ND</option>
                                    <option value="NE">NE</option>
                                    <option value="NH">NH</option>
                                    <option value="NJ">NJ</option>
                                    <option value="NM">NM</option>
                                    <option value="NV">NV</option>
                                    <option value="NY">NY</option>
                                    <option value="OH">OH</option>
                                    <option value="OK">OK</option>
                                    <option value="OR">OR</option>
                                    <option value="PA">PA</option>
                                    <option value="RI">RI</option>
                                    <option value="SC">SC</option>
                                    <option value="SD">SD</option>
                                    <option value="TN">TN</option>
                                    <option value="TX">TX</option>
                                    <option value="UT">UT</option>
                                    <option value="VA">VA</option>
                                    <option value="VT">VT</option>
                                    <option value="WA">WA</option>
                                    <option value="WI">WI</option>
                                    <option value="WV">WV</option>
                                    <option value="WY">WY</option>
                                </select>
                                <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>State required</span>
                            </div>
                            <div className="col-sm-4">&#160;</div>
                            <div className="lmgbi_formEntry form-group col-sm-6">
                                <span className="required-marker"></span><label className="lmgbi_formTitle">Zip Code</label><input className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_formValidZip lmgbi_useNameAttr" type="text" maxlength="10" data-field-name="zip" /><span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Zip Code required</span>
                            </div>
                        </div>
                        <div className="row row-offset-double">
                            <div className="lmgbi_formEntry form-group col-sm-6">
                                <span className="required-marker"></span><label className="lmgbi_formTitle">Email Address</label><input className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_confEmail lmgbi_formValidEmail lmgbi_useNameAttr" type="text" maxlength="80" data-field-name="email" /><span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Valid Email Address required</span>
                            </div>
                        </div>
                    </div>

                </div>
                <h1 className="row" id="businessoperation">Business Operation</h1>
                <div className="form-group">
                    <div className="row row-offset-double" id="businesstype">
                        <div className="lmgbi_formEntry form-group col-sm-12">
                            <span className="required-marker"></span><label className="lmgbi_formTitle">Description of business operation</label><textarea className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" id="businesstypetextarea" maxlength="255" wrap="soft" data-field-name="description"></textarea><span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Description of business operation required</span>
                        </div>
                    </div>
                    <div className="row row-offset-double" id="quotetype">
                        <div className="lmgbi_formEntry form-group col-sm-12">
                            <strong> </strong><span className="required-marker"></span><strong></strong>
                            <label className="lmgbi_formTitle">
                                <strong>Type of Quote</strong></label><textarea className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" id="quotetype" maxlength="400" wrap="soft" data-field-name="00N80000004F8jw"></textarea><span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}><strong>Type of Quote</strong></span><strong> </strong>
                        </div>
                    </div>
                    <div className="row row-offset-double">
                        <div className="form-group col-sm-6">
                            <span className="required-marker"></span>
                            <label>I'm interested in the following coverage(s)&#58;</label><br /><span className="lmgbi_formEntry"><span className="lmgbi_formTitle" style={{ display: 'none' }}>00N3n000003nLZH​</span>
                                <input className="lmgbi_formValue lmgbi_useNameAttr" id="property" type="checkbox" data-name="00N3n000003nLZH​" data-field-name="00N3n000003nLZH​" value="1" /></span> &#160;Property
                            <br /><span className="lmgbi_formEntry"><span className="lmgbi_formTitle" style={{ display: 'none' }}>00N3n000003nLZE</span>
                                <input className="lmgbi_formValue lmgbi_useNameAttr" id="generalliability" type="checkbox" data-name="00N3n000003nLZE​" data-field-name="00N3n000003nLZE" value="1" /> </span> &#160;General Liability
                            <br /><span className="lmgbi_formEntry"><span className="lmgbi_formTitle" style={{ display: 'none' }}>00N3n000003nLZB</span>
                                <input className="lmgbi_formValue lmgbi_useNameAttr" id="auto" type="checkbox" data-name="00N3n000003nLZB​​​" data-field-name="00N3n000003nLZB​​​" value="1" /> </span> &#160;Auto
                            <br /><span className="lmgbi_formEntry"><span className="lmgbi_formTitle" style={{ display: 'none' }}>00N3n000003nLZK</span>
                                <input className="lmgbi_formValue lmgbi_useNameAttr" id="workerscompensation" type="checkbox" data-name="00N3n000003nLZK" data-field-name="00N3n000003nLZK" value="1" /> </span> &#160;Workers Compensation
                            <br /><span className="lmgbi_formEntry"><span className="lmgbi_formTitle" style={{ display: 'none' }}>00N3n000003nLZI</span>
                                <input className="lmgbi_formValue lmgbi_useNameAttr" id="umbrella" type="checkbox" data-name="00N3n000003nLZI" data-field-name="00N3n000003nLZI" value="1" /> </span> &#160;Umbrella
                            <br />
                            <span id="lmgbi_productAlert" style={{ color: 'red', display: 'none' }}> I'm interested in the following coverage(s) required </span>
                        </div>
                    </div>
                </div>
                <div className="row row-offset-double" id="businesstype">
                    <div className="lmgbi_formEntry form-group col-sm-12">
                        <label className="lmgbi_formTitle">BLSC Rep you are working with? (Optional)</label><textarea className="form-control lmgbi_formValue lmgbi_useNameAttr" id="additionalcommentstextarea" maxlength="400" wrap="soft" data-name="Comments" data-field-name="lea17"></textarea>
                    </div>
                </div>

                <div className="row">&#160;</div>
                <h1 className="row">Submit Form</h1>
                <span>***Please select the appropriate answer so we can either contact your customer or get the file to your BLSC Rep.</span><br /><br />
                <div className="row row-offset-double">
                    <div className="lmgbi_formEntry form-group col-sm-6" id="formtype">
                        <span className="required-marker"></span>
                        <label className="lmgbi_formTitle">Form Type</label><br />
                        <div className="radio-inline">
                            <label className="lmgbi_formCheckLabel">
                                <input className="lmgbi_formValue lmgbi_formRequired" type="radio" data-name="formtype" value="leadintake" /> Call NOT transferred to BLSC. I would like&#160;the first available Business Lines sales representative to contact my customer. </label>
                        </div>
                        <br />
                        <div className="radio-inline">
                            <label className="lmgbi_formCheckLabel">
                                <input className="lmgbi_formValue lmgbi_formRequired" type="radio" data-name="formtype" value="warmintake" /> Call transferred to BLSC. I will warm transfer my customer to the BLSC (844-219-6911) or am already working with the BLSC on this customer. (You MUST tell the agent that you've clicked submit so they can find this referral. </label>
                        </div>
                        <br />
                        <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}> Form Type required </span>
                    </div>
                    <div className="lmgbi_formEntry" style={{visibility:'hidden'}}>
                        <label className="lmgbi_formTitle">Is Warm Intake</label><input className="lmgbi_formValue lmgbi_useNameAttr" id="warmintake" type="checkbox" data-name="iswarmintakecheck" data-field-name="00N3n000003nLZJ" value="1" /> &#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    </div>
                </div>
                <br />
                <div className="row">
                    <button className="input-submit btn btn-primary" id="lmgbi_formPreSubmitBtn" type="button">Submit</button><button className="input-submit btn btn-primary" id="lmgbi_formSubmitBtn" type="button" style={{visibility:'hidden'}}>Hidden Real Submit</button>
                    <div className="form-note spacing-top-md">
                        <span className="required-marker"></span>Indicates a required field
                    </div>
                </div>



            </form>
        </div>
    );
};