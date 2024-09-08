import { addDoc, collection,orderBy,query,Timestamp ,onSnapshot} from "firebase/firestore";
import myContext from "./myContext";
import React, { useState ,useEffect} from "react";
import { fireDb } from "../firebase/FirebaseConfig";

function MyState(props) {
  const [mode, setMode] = useState('light');

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
      console.log('Mode changed to dark');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      console.log('Mode changed to light');
    }
  };
  const [Allproduct,setAllproduct] = useState([])
  const [productinfo,setProductinfo] = useState({
    title : '',
    price : "",
    imageUrl: '',
    category:'',
    description:'',
    time: Timestamp.now()
  })
  const addProduct = async () => {
    if (productinfo.title == null || productinfo.price == null || productinfo.imageUrl == null || productinfo.category == null || productinfo.description == null) {
      return toast.error('Please fill all fields')}

      const ref = collection(fireDb,'product')
      try {
        await addDoc(ref,productinfo)
        getProduct()
      } catch (error) {
        console.log(error)
      }
    }
    const getProduct = async () =>{
      try {
        const q = query(
          collection(fireDb,'product'),
          orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let productsArray = [];
          QuerySnapshot.forEach((doc) => {
            productsArray.push({ ...doc.data(), id: doc.id });
          });
          setAllproduct(productsArray)
        });
        return () => data;
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getProduct();
    }, []);
  

  return (
    <myContext.Provider value={{ mode, toggle ,addProduct,setProductinfo, Allproduct, productinfo}}>
      {props.children}
    </myContext.Provider>
  );
}

export default MyState;
