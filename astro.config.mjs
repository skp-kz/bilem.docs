// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

export default defineConfig({
	site: 'https://docs.bilem.ai',
	integrations: [
		starlight({
			title: 'Bilem',
			description: 'Документация Bilem — персональный агент для вашей 1С: WhatsApp, Telegram, ChatGPT и Claude отвечают по данным вашей базы.',
			logo: { light: './src/assets/mark.svg', dark: './src/assets/mark.svg', alt: 'Bilem' },
			favicon: '/favicon.ico',
			head: [
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
				{ tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jura:wght@500;600;700&family=Didact+Gothic&family=Source+Code+Pro:wght@500;600&display=swap' } },
			],
			defaultLocale: 'root',
			locales: {
				root: { label: 'Русский', lang: 'ru' },
				kk: { label: 'Қазақша', lang: 'kk' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/skp-kz/bilem.ai' },
			],
			customCss: ['./src/styles/bilem.css'],
			sidebar: [
				{ label: 'Что такое Bilem', link: '/' },
				{ label: 'Подключение', link: '/connect/' },
				{ label: 'Инструменты', link: '/tools/' },
				{ label: 'Безопасность', link: '/security/' },
				{ label: 'Тарифы', link: '/pricing/' },
				{ label: 'Вопросы и ответы', link: '/faq/' },
			],
			lastUpdated: true,
			plugins: [
				starlightLlmsTxt({
					projectName: 'Bilem',
					description: 'Bilem — агент для 1С:Бухгалтерии для Казахстана. Отвечает директору в WhatsApp, Telegram, ChatGPT и Claude по данным его базы 1С; только чтение.',
				}),
			],
		}),
	],
});
