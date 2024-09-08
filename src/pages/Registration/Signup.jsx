import { Link,useNavigate } from 'react-router-dom'
import { fireDb, auth } from '../../firebase/FirebaseConfig'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, Timestamp } from 'firebase/firestore'

function Signup() {
    const navigate = useNavigate()
    const [user , setUser] = useState({name : '',email:"",password:''})
    const [loading,setLoading] = useState(false)
    const onChange = (e) => {
        setUser(preState => ({
            ...preState,
            [e.target.name]: e.target.value
        }));
    };
    const {name,email,password} = user;

    const signup = async () =>{
        setLoading(true)
        if(name === '' || email === '' || password === ''){
            return toast.error('all fields are required')
        }
        try {
            const ref = await createUserWithEmailAndPassword(auth,email,password)
            console.log(ref)
            const docRef = await addDoc(collection(fireDb, "users"), {
                name: name,
                uuid :ref.user.uid,
                email: ref.user.email,
                time: Timestamp.now()
              });
            setUser({name:'',email:'',password:''})  
            navigate('/login')

              
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                        name='name'
                        value={user.name}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='name'  onChange={onChange}
                    />
                </div>                
                <div>
                    <input type="email"
                        value={user.email}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email' onChange={onChange}
                    />
                </div>                
                <div>
                    <input
                        type="password"
                        value={user.password}
                        name='password'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password' onChange={onChange}
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg ' onClick={signup}>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup