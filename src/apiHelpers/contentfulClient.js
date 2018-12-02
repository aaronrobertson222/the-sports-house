import * as contentful from 'contentful';

const client = contentful.createClient({
	space: '2iv1kkxpi49n',
	accessToken: '9f107a2c5d2c997c6d4ba77d5ceeb43bbc1e2c645acda49b42acc943cb6406d9'
});

export default client;