import React, { useState } from "react";
import Form from "react-bootstrap/Form";
//import { useHistory } from "react-router-dom";
import "./Login.css";
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib.js";
//import Button from "react-bootstrap/Button";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";

export default function Login() {
    //const historyObj = useHistory();
    const { userHasAuthenticated } = useAppContext();
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    });        
    const [isLoading, setIsLoading] = useState(false);
    function validateForm() {
        return fields.email.length > 0 && fields.password.length > 0;
    }
    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        try {
            await Auth.signIn(fields.email, fields.password);
            await userHasAuthenticated(true);
            //historyObj.push("/");
        } catch (e) {
            userHasAuthenticated(false);
            setIsLoading(false);
            onError(e);
        }
    }
        
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={fields.email} onChange={handleFieldChange} placeholder="Enter e-mail address" />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={fields.password} onChange={handleFieldChange} />
                </Form.Group>
                <LoaderButton block size="lg" type="submit" isLoading={isLoading} disabled={!validateForm()}>
                    Login
                </LoaderButton>
            </Form>
        </div>
    );
}
