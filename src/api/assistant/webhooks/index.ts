import { createNodeMiddleware, createProbot } from 'probot'
import app from 'app'
const probot = createProbot()

const webhook = createNodeMiddleware(app, {
	probot,
	webhooksPath: '/api/assistant/webhooks',
})

export default webhook
