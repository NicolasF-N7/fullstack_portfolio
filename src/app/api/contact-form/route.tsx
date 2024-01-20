import { NextApiRequest, NextApiResponse } from 'next';
import { transporter, mailOptions } from "./nodemailer_config"
import React from 'react';

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
		return new Response(JSON.stringify({ message: 'Super ! Le message a bien été reçu.' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
	}catch(err){
		console.log(err);
		return new Response(JSON.stringify({ message: 'Oh non ! Le message n\'est pas parti.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });

	}

	
};