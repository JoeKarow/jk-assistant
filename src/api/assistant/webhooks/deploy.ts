import 'dotenv/config'
import jwt from 'jsonwebtoken'
// import { Octokit } from '@octokit/core'
// import { createProbotAuth } from 'octokit-auth-probot'
import type { VercelRequest } from '@vercel/node'

// @eslint-disable
export default (request: VercelRequest) => {
	const signature: string = request.headers['x-webhook-signature'] as string
	console.log(request)
	if (!signature) return
	try {
		const signatureDecoded = jwt.verify(
			signature,
			process.env.NETLIFY_JWT_SECRET as string
		)
		console.log(signatureDecoded)
	} catch (error) {
		console.error(error)
	}
}
