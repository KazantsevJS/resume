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

async function getLocationByIp(ip: string): Promise<string> {
	try {
		// Используем надежный ip-api.com вместо ipapi.co
		const response = await fetch(
			`http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city`
		)
		const data = await response.json()

		if (data.status === 'fail') {
			return 'не удалось определить местоположение'
		}

		const city = data.city || 'Город не определен'
		const country = data.country || 'Страна не определена'
		const region = data.regionName || ''

		return `${city}${region ? `, ${region}` : ''}, ${country}`
	} catch (error) {
		console.error('Ошибка при определении местоположения:', error)
		return 'Ошибка определения местоположения'
	}
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
	const ip =
		req.headers['x-forwarded-for'] ||
		req.headers['x-real-ip'] ||
		req.socket.remoteAddress

	const userAgent = req.headers['user-agent']
	const timestamp = new Date().toISOString()

	const location = await getLocationByIp(ip as string)

	console.log('Новый посетитель!')
	console.log('Время:', new Date().toLocaleString('ru-RU'))
	console.log('IP адрес:', ip)
	console.log('Местоположение:', location)
	console.log('User Agent:', userAgent)
	console.log('=====================================')

	res.status(200).json({
		success: true,
		message: 'Успешное посещение',
		timestamp: timestamp,
		location: location,
	})
}
