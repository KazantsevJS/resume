import { IncomingMessage, ServerResponse } from 'http'

interface VercelRequest extends IncomingMessage {
	headers: {
		'x-forwarded-for'?: string
		'x-real-ip'?: string
		'user-agent'?: string
		[key: string]: string | string[] | undefined
	}
}

interface VercelResponse extends ServerResponse {
	status: (code: number) => VercelResponse
	json: (data: object) => void
}

export default function handler(req: VercelRequest, res: VercelResponse) {
	const ip =
		req.headers['x-forwarded-for'] ||
		req.headers['x-real-ip'] ||
		req.socket.remoteAddress

	const userAgent = req.headers['user-agent']
	const timestamp = new Date().toISOString()

	console.log('Новый посетитель:')
	console.log('Время: ', new Date().toLocaleString('ru-RU'))
	console.log('IP адрес: ', ip)
	console.log('Юзер: ', userAgent)
	console.log('__________________')

	res.status(200).json({
		success: true,
		message: 'Успешное посещение',
		timestamp: timestamp,
	})
}
