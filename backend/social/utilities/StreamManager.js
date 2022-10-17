const express = require('express');
const TenantProfile = require('../models/Tenant_Profile');
const User = require('../models/User_Profile');

const app = express.Router();

const processMessage = async (kafkaMessage) => {

router.post('/kafka/user-profile/:topic', (req, res) => {
        const topicv = req.params.topic;
		const kafka = new Kafka({
			clientId: 'user-profile',
			requestTimeout: 25000,
			connectionTimeout: 30000,
			authenticationTimeout:30000,
			retry: {
			initialRetryTime: 3000,
			retries: 0
			},
			brokers: ['localhost:9092']
		})
		var userProfile = {
			first_name: req.body.first_name.toString(),
			last_name: req.body.last_name.toString(),
			depertment: req.body.depertment.toString(),
			designation: req.body.designation.toString(),
			tenant_id: req.body.tenant_id.toString(),
			image_url: req.body.image_url.toString() ,
			city: req.body.city.toString(),
			bio: req.body.bio.toString() ,
			country: req.body.country.toString(),
			social_link: req.body.social_link.toString() ,
			employee_id: req.body.employee_id.toString()
		}
		const producer = kafka.producer();
		const run = async () => {
		await producer.connect();
		await   producer.send({
			topic: topicv,
			messages: [ userProfile ],
		});
		User.create(userProfile)
		await producer.disconnect();

		res.status(200).send('User Profile Created Successfully');
		}
		run().catch((e)=>{
			console.log(e);
			res.status(500).send('error');
		})   
		})  ;

router.post('/kafka/tenant-profile/:topic', (req, res) => {
        const topicv = req.params.topic;
		const kafka = new Kafka({
			clientId: 'tenant-profile',
			requestTimeout: 25000,
			connectionTimeout: 30000,
			authenticationTimeout:30000,
			retry: {
			initialRetryTime: 3000,
			retries: 0
			},
			brokers: ['localhost:9092']
		})
		var tenantProfile = {
			tenant_name: req.body.tenant_name.toString(),
			address: req.body.address.toString(),
			city: req.body.city.toString(),
			state: req.body.state.toString(),
			country: req.body.country.toString(),
			zip_code: req.body.zip_code.toString(),
			phone: req.body.phone.toString(),
			web_url: req.body.web_url.toString(),
		
		}
		const producer = kafka.producer();
		const run = async () => {
		await producer.connect();
		await   producer.send({
			topic: topicv,
			messages: [ tenantProfile ],
		});
		TenantProfile.create(tenantProfile)
		await producer.disconnect();

		res.status(200).send('Tenant Profile Created Successfully');
		}
		run().catch((e)=>{
			console.log(e);
			res.status(500).send('error');
		})   
		})  ;

router.get('/kafka/getAll/tenant-profile/:topic', (req, res) => {
	const topicv = req.params.topic;
	const kafka = new Kafka({
		clientId: 'get_all_tenant-profile',
		requestTimeout: 25000,
		connectionTimeout: 30000,
		authenticationTimeout:30000,
		retry: {
		initialRetryTime: 3000,
		retries: 0
		},
		brokers: ['localhost:9092']
	})
	all = TenantProfile.findAll()
	const producer = kafka.producer();
	const run = async () => {
	await producer.connect();
	await   producer.send({
		topic: topicv,
		messages: all,
	});

	await producer.disconnect();

	res.status(200).send('Get All Tenant Profiles',all);
	}
	run().catch((e)=>{
		console.log(e);
		res.status(500).send('error');
	})   
	})  ;		





		
};

module.exports = { processMessage };

