import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Form() {
    const [name,setname]=useState('')
    const [mob,setmob]=useState('')
    const [email,setemail]=useState('')
    const [hobbi,sethobbi]=useState('')
    const navigate=useNavigate()
    const handlesave=()=>{
        axios.post('http://localhost:4000/',{name,mob,email,hobbi}).then(()=>{
            //alert('data successfuly add')
            navigate('/')
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
  return (
    <div style={{display:'flex',justifyContent:'center',height:'100vh',width:'100vw',alignItems:'center'}}>
        <div style={{height:'80vh',width:'25%',border:'solid 1px #C0C0C0',borderRadius:'1rem',padding:'1rem',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{height:'16%',width:'90%'}}>
                <label >
                    <span style={{fontWeight:'bold'}}>Name</span> <span style={{color:'red'}}>*</span><br/> 
                    <input style={{margin:'4px',fontSize:'0.95rem',height:'50%',
                        width:'90%',backgroundColor:'#F4F4F4',borderRadius:'8px',
                        border:'none',paddingLeft:'1rem'}}
                        placeholder={'Type your Name here'}
                        type='text'
                        value={name} onChange={(e)=>setname(e.target.value)}
                    />
                </label>
            </div>
            <div style={{height:'16%',width:'90%'}}>
                <label>
                    <span style={{fontWeight:'bold'}}>Phone number</span> <span style={{color:'red'}}>*</span><br/> 
                    <input style={{margin:'4px',fontSize:'0.95rem',height:'50%',
                        width:'90%',backgroundColor:'#F4F4F4',borderRadius:'8px',
                        border:'none',paddingLeft:'1rem'}}
                        placeholder={'Type your Phone number here'}
                        type="number"
                        value={mob} onChange={(e)=>setmob(e.target.value)}
                    />
                </label>
            </div>
            <div style={{height:'16%',width:'90%'}}>
                <label>
                    <span style={{fontWeight:'bold'}}>Email</span><span style={{color:'red'}}>*</span><br/> 
                    <input style={{margin:'4px',fontSize:'0.95rem',height:'50%',
                        width:'90%',backgroundColor:'#F4F4F4',borderRadius:'8px',
                        border:'none',paddingLeft:'1rem'}}
                        placeholder={'Type your Email here'}
                        type='email'
                        value={email} onChange={(e)=>setemail(e.target.value)}
                    />
                </label>
            </div>
            <div style={{height:'16%',width:'90%'}}>
                <label>
                    <span style={{fontWeight:'bold'}}>hobbies</span><span style={{color:'red'}}>*</span><br/> 
                    <input style={{margin:'4px',fontSize:'0.95rem',height:'50%',
                        width:'90%',backgroundColor:'#F4F4F4',borderRadius:'8px',
                        border:'none',paddingLeft:'1rem'}}
                        placeholder={'Type your hobbies here'}
                        type='text'
                        value={hobbi} onChange={(e)=>sethobbi(e.target.value)}
                    />
                </label>
            </div>
            <div style={{height:'16%',width:'90%',textAlign:'center'}}>
                <button style={{height:'60%',width:'95%',borderRadius:'1rem',
                    backgroundColor:'#F2C94C',border:'none',fontWeight:'bold',
                    color:'white'}} onClick={handlesave}>Save 
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Form