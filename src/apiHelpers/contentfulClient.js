import * as contentful from 'contentful';

const client = contentful.createClient({
	space: '65uqvi2budso',
	accessToken: '006bf0403070e15a8b1462efbb664efb465f6aa81fced2629e959b9f97e1b3fb'
});

export default client;