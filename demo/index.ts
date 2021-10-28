import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
	res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
	res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');

	res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(3000, () => console.log('server running at: http://localhost:3000'));