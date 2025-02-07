const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = 5173;

// Serve static files from the current directory (dist)
app.use(express.static(__dirname));

// Proxy API requests to the backend
app.use(
	'/api',
	createProxyMiddleware({
		target: 'http://124.221.177.11', // Replace with your backend URL
		changeOrigin: true,
		pathRewrite: {
			'^/api': '' // Remove /api prefix
		}
	})
);

// Proxy /common/login and similar routes directly to the backend
app.use(
	'/common',
	createProxyMiddleware({
		target: 'http://124.221.177.11', // Replace with your backend URL
		changeOrigin: true
	})
);

// SPA fallback: Redirect all unknown routes to index.html
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html')); // Serve index.html from the current directory
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
