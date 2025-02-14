import {React, useState} from 'react'
import axios from 'axios'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                formData
            );

            // Add the response data to the submittedData array
            setSubmittedData((prevData) => [...prevData, response.data]);
            console.log(submittedData);

            //Clear the form fields
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            console.error("Error submitting form", error)
        }
    };

  return (
    <div className='container mx-auto mt-20 max-w-lg mb-20'>
        <h2 className='text-4xl text-center font-bold mb-8'>Contact Form</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label htmlFor="text" className='block mb-2'>Name</label>
                <input type="text" name='name' placeholder='Enter your name' className='w-full border border-black rounded-lg p-3' value={formData.name} onChange={handleChange} required />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block mb-2'>Email Address</label>
              <input type="email" name='email' placeholder='Enter a valid email address' className='w-full border border-black rounded-lg p-3' value={formData.email} onChange={handleChange} required />
            </div>
            <div className='mb-4'>
                <label htmlFor="text" className='block mb-2'>Message</label>
                <textarea name="message" placeholder='Enter your message' rows={4} className='w-full border border-black rounded-lg p-3' value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type='submit' className='w-full bg-black text-white py-3 rounded-lg mb-6'>Submit</button>
        </form>

        {submittedData.length > 0 && (
            <div className='mt-6'>
                <h3 className='text-lg font-semibold mb-2'>Submitted Data</h3>
                <ul className='space-y-4'>
                    {submittedData.map((data, index) => (
                        <li key={index} className='p-4 border rounded-md shadow-sm bg-gray-50'>
                            <p>
                                <strong>Name:</strong> {data.name}
                            </p>
                            <p>
                                <strong>Email:</strong> {data.email}
                            </p>
                            <p>
                                <strong>Message:</strong> {data.message}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
};

export default ContactForm;
