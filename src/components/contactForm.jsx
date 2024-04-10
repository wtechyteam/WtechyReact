import { Form, Field } from 'react-final-form'

const MyForm = () => {
    const onSubmit = (value) => {
        console.log("hello", value)
    }
    // const validate=()=>{
    //     alert("valid")
    // }
    return (
        <Form
            onSubmit={onSubmit}
            // validate={validate}
            render={({ handleSubmit }) => (
                <form className="customForm bg-gray px-4 py-5 rounded-2" onSubmit={handleSubmit}>

                    <div className="row mx-0">
                        <h3 className='title-lg fw-bold'>How Can We Help?</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <Field name="name">
                            {({ input, meta }) => (
                                <div className='inputWrap col-lg-6'>
                                    <input className='form_input' type="text" {...input} placeholder="Name" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <div className='inputWrap col-lg-6'>
                                    <input className='form_input' type="text" {...input} placeholder="Email" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="number">
                            {({ input, meta }) => (
                                <div className='inputWrap col-lg-6'>
                                    <input className='form_input' type="number" {...input} placeholder="Number" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="help">
                            {({ input, meta }) => (
                                <div className='inputWrap col-lg-6'>
                                    <input className='form_input' type="text" {...input} placeholder="How can we help you?" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="message">
                            {({ input, meta }) => (
                                <div className='inputWrap col-12'>
                                    <textarea className='form_input textAarea' {...input} placeholder="Message" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div className="col-12">
                            <button className='dBtn btnSecondary rounded-0 hasShadow w-100 py-2' type="submit">Contact Us</button>
                        </div>

                    </div>
                </form>
            )}
        />
    )
}
export default MyForm;