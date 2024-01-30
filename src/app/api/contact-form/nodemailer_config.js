import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const emailPerso = process.env.EMAIL_PERSO;
const pass = process.env.EMAIL_PASS;

export const gmailtransporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: email,
		pass
	}
});

console.log(`smtp://` + email + `:` + pass + `@cloud3.googiehost.com:587`)
export const transporter = nodemailer.createTransport(`smtp://` + email + `:` + pass + `@cloud3.googiehost.com:587`);

export const mailOptions = {
	from: email,
	to: emailPerso
}