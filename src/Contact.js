import { useFormik } from "formik";
import * as Yup from "yup";

const onSubmit = async (values, actions) => {
    await new Promise( (resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

const Contact = () => {
    const name = "Osaze";


    const { values, errors, handleBlur, handleChange, isSubmitting, handleSubmit, touched } = useFormik ({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            message: "",
        },

        validationSchema: Yup.object({
            first_name: Yup.string().required("Please enter first name"),
            last_name: Yup.string().required("Please enter last name"),
            email: Yup.string().email('Invalid email adress').required("Please enter your email"),
            message: Yup.string().required("Please enter message")
        }),
        
        onSubmit,
    });


    return (
        <div onSubmit={handleSubmit} className='contact-page'>
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>

            <form className='form'>

                <div className="nameInp">
                    <div>
                        <label htmlFor="first_name">First Name</label>
                        <input 
                          value={values.first_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter your name" id='first_name' type="text" 
                          className={errors.first_name && touched.first_name ? "inp-err":""}
                        />
                        {errors.first_name && touched.first_name && <p className="txt-err">{errors.first_name}</p>}
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input 
                          value={values.last_name}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter your last name" id='last_name' type="text"
                          className={errors.last_name && touched.last_name ? "inp-err":""}
                         />
                         {errors.last_name && touched.last_name && <p className="txt-err">{errors.last_name}</p>}
                    </div>
                </div>
            
                    <div className="email_Inp">
                        <label>Email</label>
                        <input
                         value={values.email}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         placeholder="yourname@email.com" id='email' type="email"
                         className={errors.email && touched.email ? "inp-err":""}
                        />
                        {errors.email && touched.email && <p className="txt-err">{errors.email}</p>}
                    </div>

                    <div className='textarea'>
                        <label>Message</label>
                        <textarea
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Send me a message and I'll reply you as soon as possible..." id='message'
                          className={errors.message && touched.message ? "inp-err":""}
                        >
                          </textarea>
                          {errors.message && touched.message && <p className="txt-err">{errors.message}</p>}
                    </div>

                    <div className='check'>
                        <input required type="checkbox" />
                        <span> You agree to providing your data to {name} who may contact you.</span>
                    </div>
                    
                 <button disabled={isSubmitting} type='submit' id='btn__submit'>Send message</button>
            </form>
        </div>
    );
}

export default Contact;