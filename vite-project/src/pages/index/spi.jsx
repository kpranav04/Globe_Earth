import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
function SPI(){

    const [data, setData] = useState({
        location:undefined,
        valuee:undefined,
        spi_index:undefined,
        
      });
      const [datee,setDate]=useState(new Date());

      
        const handleChange = (e) => {
          setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        };
        const handleSubmit = async (e) => {
            e.preventDefault();
            const res=await axios.post('http://localhost:3000/index/spi_post',{location:data.location,date:datee,index:data.spi_index,value:data.valuee});
            console.log(res);
          };



    return(
        <>
          <h2>city</h2>
        <input
               className='entry'
               type="text"
               required
               onChange={handleChange} placeholder='location' id='location'
         />
        <h2>spi index</h2>
         <input
                className='entry'
                type="number"
                required
                onChange={handleChange} placeholder='spi_index' id='spi_index'
              />
        <h2>data</h2>
        <input
               className='entry'
               type="number"
               required
               onChange={handleChange} placeholder='valuee' id='valuee'
         />
        
  <h2>DATE</h2>
         <DatePicker  onChange={(date) => setDate(date)} />
         <button onClick={handleSubmit}></button>




       </>
    );

}

export default SPI;