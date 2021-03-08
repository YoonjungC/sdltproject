import React from 'react';
import './index.css';
import SimpleForm from "../components/chatbot/SimpleForm";

export default class FAQ extends React.Component {
    render() {
        return (
            <div className="faq-body"> 
                <p> faq page </p>
                <SimpleForm />
            </div>
        )
    }
}