import { NextApiRequest, NextApiResponse } from 'next';
import { transporter, mailOptions } from "./nodemailer_config"
import { MongoClient } from 'mongodb';
import React from 'react';

const saveDataToDb = async function(data){
	const uri = 'mongodb://localhost:27017/your-database-name';
	const client = new MongoClient(uri);

	try {
    // Connect to the MongoDB client
    await client.connect();
    const database = client.db('portfolio_contact_form');
    const collection = database.collection('forms');

    // Insert data into the collection
    const result = await collection.insertOne(data);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
	const data = await req.json()

	if(!data.subject || !data.email || !data.message){
		console.log("Data format is not matching what is expected")
		console.log(data)
		return new Response('Bizarre... la requête ne contient pas toutes les informations.', {status: 400});
	}

	/* SEND EMAIL */
	try{
		await transporter.sendMail({
			...mailOptions,
			subject: "Request from portfolio: \"" + data.subject + "\", from " + data.email,
			text: data.message,

		});
		console.log(data.email +  " sent a form about '" + data.subject + "'");
		await saveDataToDb(data);
		return new Response(JSON.stringify({ message: 'Super ! Le message a bien été reçu.' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
	}catch(err){
		console.log(err);
		return new Response(JSON.stringify({ message: 'Oh non ! Le message n\'est pas parti.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
	}

	

};