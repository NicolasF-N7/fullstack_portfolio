import { NextApiRequest, NextApiResponse } from 'next';
import { transporter, mailOptions } from "./nodemailer_config"
import { MongoClient } from 'mongodb';
import React from 'react';
import type {FormData} from '@/app/contact/formDataType';
import {NextResponse, NextRequest} from 'next/server'
const mongodbPass = process.env.MONGODB_PASS;

const saveDataToDb = async function(data : FormData){
	const uri = "mongodb+srv://contact:" + mongodbPass + "@portfolio-contact-form.sludqiu.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	const timeStampedForm = {...data};
	timeStampedForm.timestamp = (new Date()).toLocaleString("en-US", { timeZone: "Europe/Paris" });
	console.log("Time: " + timeStampedForm.timestamp);

	try {
    // Connect to the MongoDB client
    await client.connect();
    const database = client.db('portfolio_contact_form');
    const collection = database.collection('forms');

    // Insert data into the collection
    const result = await collection.insertOne(timeStampedForm);
  }catch (err){
  	console.log("Error while connecting to DB: " + err);
  }finally {
    // Close the MongoDB connection
    await client.close();
  }
}


export async function POST(req: NextRequest, res: NextApiResponse<FormData>) {
	const data = await req.json()

	if(!data.subject || !data.email || !data.message){
		console.log("Data format is not matching what is expected")
		console.log(data)
		return new Response('Bizarre... la requête ne contient pas toutes les informations.', {status: 400});
	}

	
	try{
		/* SEND EMAIL */
		await transporter.sendMail({
			...mailOptions,
			subject: "Request from portfolio: \"" + data.subject + "\", from " + data.email,
			text: data.message,

		});
		console.log(data.email +  " sent a form about '" + data.subject + "'");
		
		/* SAVE FORM TO DB */
		await saveDataToDb(data);
		console.log("Form registered to db")
		return new Response(JSON.stringify({ message: 'Super ! J\'ai bien reçu le message. Je vous réponds très vite.' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
	}catch(err){
		console.log(err);
		return new Response(JSON.stringify({ message: 'Oh non ! Le message n\'est pas parti.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
	}

	

};