"use client"
import React from "react";
import { useState, useRef } from "react";
import { useForm } from 'react-hook-form'
import Link from 'next/link';
import { subjects } from './subjects';
import { sendContactRequest } from '@/app/actions';
import { CustomBorderInput } from './customInput';
import { CustomBorderSelect } from './customSelect';
import { CustomBorderTextArea } from './customTextArea';
import { useEffect } from 'react';
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {extendVariants, Select, SelectSection, SelectItem} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

export type FormData = {
  objet: string;
  email: string;
  telephone: string;
  canal: string;
  message: string;
};

/*
Need useForm to register reach form field to the global form.
But don't use <form onSubmit={handleSubmit(onSubmit)}> becaude it doesn't trigger onSubmit.
So instead, use <form onSubmit={onSubmit}>, and onSubmit is triggered, wiiiiith the right data from the form fields :)
*/

const Contact = () => {
  const { register } = useForm();
  const subjectInputRef = useRef(null);//USELESS?
  //True when the response from the server is received, and is 200 OK
  const [formSent, setFormSent] = useState(false);
  //State = true if form is being sent and we're waiting for the response. False otherwise
  const [sendingForm, setSendingForm] = useState(false);
  const [serverResponseText, setServerResponseText] = useState(false);
  //Handle form error message
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    try{
      //Disable form while sending
      setSendingForm(true);

      const form = event.currentTarget;
      const formData = new FormData(form);
      const formDataObject = Object.fromEntries(formData);

      const response = await fetch('/api/contact-form', {
        method: 'POST',
        body: JSON.stringify(formDataObject)
      });
      const responseData = await response.json();
      // If response is OK, show message to user
      if(response.status == 200){
        setFormSent(true);
        setServerResponseText(responseData.message);
      }else{
        setShowErrorMessage(true);
        setErrorMessage("Oups ! Le message n'est pas arrivé jusqu'à moi. Essayer plutôt de me contacter via LinkedIn.");
      }
    }catch(e) {
      console.log("Error sending the POST request", e);
      setShowErrorMessage(true);
      setErrorMessage("Oups ! Le message n'est pas parti. Essayer plutôt de me contacter via LinkedIn.");
    }
  }

  return (
      <>
        <div className="flex-col m-8 pl-10 md:pl-14 text-center">
          <div className="ml-[5%] mr-[5%] sm:ml-[15%] sm:mr-[15%]">
            {/*Title*/}
            <h1 className="text-xl font-bold text-black">Écrivez-moi un petit message</h1>

            {/*Contact form*/}
            <form onSubmit={onSubmit} noValidate className={formSent ? 'hidden' : ''}>
              {/*Subject select*/}
              <div className="flex mt-12">
                <div className="text-black w-full">
                   <CustomBorderSelect
                      ref={subjectInputRef}
                      {...register('subject', { required: true })}
                      isRequired
                      rules={{
                        required: {
                          value: true,
                          message: 'J\'ai besoin de connaître la motivation de votre demande',
                        },
                      }}
                      isDisabled={sendingForm}
                      label="Objet de la demande"
                      size="sm">

                      {subjects.map((subject, index) => (
                        <SelectItem  key={subject.title} color="primary" value={subject.title}>
                          {subject.title}
                        </SelectItem>
                      ))}
                    </CustomBorderSelect>
                </div>
              </div>

              {/*Email and phone inputs*/}
              <div className="mt-8 flex flex-row">
                <CustomBorderInput
                  className="mr-8"
                  isRequired
                  rules={{required: {value: true}}}
                  {...register('email', { required: true })}
                  isDisabled={sendingForm}
                  label="E-mail"/>

                <CustomBorderInput 
                  isRequired
                  rules={{required: {value: true}}}
                  {...register('telephone', { required: true })}
                  isDisabled={sendingForm}
                  label="Téléphone"/>
              </div>

              {/*Preferred channel*/}
              <div className="mt-8 flex flex-row w-full">
                <RadioGroup
                  isRequired
                  rules={{required: {value: true}}}
                  {...register('canal', { required: true })}
                  isDisabled={sendingForm}
                  label="Moyen de communication préféré:"
                  orientation="horizontal"
                  color="warning"
                  defaultValue="phone">
                  <Radio value="phone">Téléphone</Radio>
                  <Radio value="email">E-mail</Radio>
                </RadioGroup>
              </div>

              {/*Message area*/}
              <div className="mt-8 w-full">
                <CustomBorderTextArea 
                  isRequired
                  rules={{required: {value: true}}}
                  {...register('message', { required: true })}
                  isDisabled={sendingForm}
                  label="Votre message"/>
              </div>

              {/*Send button*/}
              <div className="mt-8 w-full">
                <Button type="submit" isDisabled={sendingForm} isLoading={sendingForm && !showErrorMessage} color={showErrorMessage ? "danger" : "default"} className="px-16 py-6" variant="bordered" radius="none">Envoyer !</Button>
              </div>
            </form>

            {/*Success message*/}
            <div className={`${formSent ? '' : 'hidden'} relative my-16`}>
              <h1 className="text-md font-bold text-brownTertiary">{serverResponseText}</h1>
              <div className="mt-4 absolute w-full h-1 bg-lightBrown"></div>
            </div>

            {/*Error message*/}
            
            <div className={`${showErrorMessage ? '' : 'hidden'} relative my-16`}>
              <h1 className="text-md font-bold text-redAccent">{errorMessage}</h1>
              <div className="mt-4 absolute w-full h-1 bg-redAccent"></div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Contact;