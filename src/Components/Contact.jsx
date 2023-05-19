import { useEffect, useState } from "react";
import { validation } from "../Utils/validation";


const Contact = () => {

    const [contact, setContact] = useState({
        name:'',
        email:'',
        message:'',
    })

    const [errors, setErrors] = useState({
        name:'',
        email:'',
        message:'',
    })

    const [isDisabled, setIsDisabled] = useState(true)

    const handleOnChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setContact({
            ...contact,
            [name]: value
        })

        setErrors(validation({...contact, [name]: value}))

        if(Object.keys(errors).length === 0) setIsDisabled (false)
        if(Object.keys(errors).length > 0) setIsDisabled (true)


    }

    useEffect(()=> {

     setErrors(validation({...contact}));
     Object.keys(errors).length > 0 ? setIsDisabled(true) : setIsDisabled(false);

    }, [isDisabled, errors])


    return (
        <section className="w-5/6 mx-auto">
            <h1 className="text-center text-5xl font-black text-cyan-500 mb-7">{'<Contact />'}</h1>
            <form action="https://getform.io/f/7c70b70d-0585-4015-aec3-9de7a23b3e66" method="POST" className="flex flex-col mx-auto items-center">
                <input type="text" onChange={handleOnChange} value={contact.name} required name='name' placeholder="Name..." className="w-3/6 rounded-md border-2 border-solid border-cyan-500 my-5 p-2 focus:outline-none focus:border-indigo-500 "/>
                {errors.name ? <h6 className="text-pink-600 text-sm" >{errors.name}</h6> : <br/>}
                <input type="text" onChange={handleOnChange} value={contact.email} required name="email" placeholder="Email..." className="w-3/6 rounded-md border-2 border-solid border-cyan-500 my-5 p-2 focus:outline-none focus:border-indigo-500 "/>
                {errors.email ? <h6 className="text-pink-600 text-sm" >{errors.email}</h6> : <br/> }
                <textarea rows='9'required  onChange={handleOnChange} value={contact.message} cols='50' name="message" placeholder="Message..." className="w-3/6 rounded-md border-2 border-solid resize-none border-cyan-500 my-5 p-2 focus:outline-none focus:border-indigo-500"/>
                {errors.message ? <h6 className="text-pink-600 text-sm">{errors.message}</h6> : <br/>}
                <button type="submit" disabled={isDisabled} className="w-1/6 text-xl bg-cyan-500 font-medium px-4 py-1 rounded text-white transition duration-300 ease-in-out hover:bg-indigo-500 mb-12 mt-5 disabled:bg-slate-300">Work with me</button>
            </form>
        </section>
    )
}

export default Contact;