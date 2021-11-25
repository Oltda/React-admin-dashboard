import React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin'

const UserEdit = (props) =>{
    return(
        <Edit title='Edit domain' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput multiline source='domainName' />
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit