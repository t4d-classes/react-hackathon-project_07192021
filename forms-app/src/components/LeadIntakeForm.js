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



            </form>
        </div>
    );
};