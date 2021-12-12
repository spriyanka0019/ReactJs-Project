import React, { useState } from 'react';
import { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css'
import Button from "@material-ui/core/Button";
import Modal from 'react-modal'
import { Tabs, Tab } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function Header(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const [valueOfTabs, setValueOfTabs] = useState(0);


    const handleTabForLoginAndRegister = (e, val) => {
        console.log(val);

        setValueOfTabs(val)
    }
    const [isLoginModalOpen, setModalIsLoginOpen] = useState(false);


    return (
        <div>
            <div className="header" >
                <img className="logo" src={logo} alt="Logo" />
                <Button className="buttonLogin" variant="contained" onClick={() => setModalIsLoginOpen(true)}>Login</Button>
                <Modal isOpen={isLoginModalOpen} style={customStyles}>

                    <Tabs value={valueOfTabs} onChange={handleTabForLoginAndRegister}>
                        <Tab label="Login">Login</Tab>
                        <Tab label="Register">Register</Tab>
                    </Tabs>
                    <div>
                        {
                        valueOfTabs === 0 &&
                        <div>
                            <FormControl>
                                <InputLabel htmlFor="username">UserName*</InputLabel>
                                <Input id="username" aria-describedby="my-helper-text" />
                                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                            </FormControl>
                            <br /><br />
                            <FormControl>
                                <InputLabel htmlFor="password">Password*</InputLabel>
                                <Input id="password" aria-describedby="my-helper-text" />
                                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                            </FormControl>
                            <br /><br />

                            <Button variant="contained" color="primary" >LOGIN</Button>

                        </div>

                    }

                        {
                            valueOfTabs === 1 &&
                            <div>
                                <FormControl required>
                                    <InputLabel htmlFor="firstname">First Name</InputLabel>
                                    <Input id="firstname" type="text" />
                                    <FormHelperText >
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor="lastname">Last Name</InputLabel>
                                    <Input id="lastname" type="text" />
                                    <FormHelperText >
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor="email">Email</InputLabel>
                                    <Input id="email" type="text" />
                                    <FormHelperText >
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor="registerPassword">Password</InputLabel>
                                    <Input id="registerPassword" type="password" />
                                    <FormHelperText>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor="contact">Contact No.</InputLabel>
                                    <Input id="contact" type="text" />
                                    <FormHelperText >
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />

                                <Button variant="contained" color="primary" >REGISTER</Button>
                            </div>
                        }
                    </div>
                </Modal>



            </div>
        </div >

    )
}
