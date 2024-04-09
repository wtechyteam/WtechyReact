import { Form, Field } from 'react-final-form'

const MyForm = () => {
    const onSubmit = (value) => {
        console.log("hello", value)
    }
    // const validate=()=>{
    //     alert("valid")
    // }
    return (
        <div className='container'>
            <Form
                onSubmit={onSubmit}
                // validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h3>How Can We Help?</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <Field name="name">
                            {({ input, meta }) => (
                                <div>
                                    <input className='form_input' type="text" {...input} placeholder="Name" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <input className='form_input' type="text" {...input} placeholder="Email" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="help">
                            {({ input, meta }) => (
                                <div>
                                    <input className='form_input' type="text" {...input} placeholder="How can we help you?" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field
                            name="message"
                            render={({ input, meta }) => (
                                <div>
                                    <textarea className='form_input' {...input} placeholder="Message" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        />

                        <button className='mt-2 dBtn btnSecondary rounded-0 hasShadow w-100 py-2' type="submit">Contact Us</button>
                    </form>
                )}
            />
        </div>
    )
}
export default MyForm;