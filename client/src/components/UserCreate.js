import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin'

const UserCreate = (props) =>{
    const [domainName, setDomainName] = useState("");
    const [ava, setAva] = useState("3")
 

        useEffect(()=>{
            const fetchDom = async()=>{
                const url = `https://igloo-domain.herokuapp.com/overit-domenu`
                const data = {
                    domain_name: domainName
                }
                const resp = await axios.post(url, data);
     
                if(domainName.length > 0){
                    setAva(resp.data.availability)
                }
            }
            fetchDom();
        }, [domainName]);


      

    return(
        <div>
            <h1>Check domain</h1>
        <Create title='Register a domain' {...props}>
            <SimpleForm>        
                <TextInput onChange={(e)=> setDomainName(e.target.value) } multiline source='domainName' />
            </SimpleForm>           
        </Create>
       
        {ava === 3 ? <></> : ava === 0 ? <h1>Not available</h1> : ava === 1 ? <h1>Available</h1> : <></> }
     
    </div>
    )
}

export default UserCreate