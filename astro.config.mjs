// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

export default defineConfig({
	site: 'https://docs.bilem.ai',
	integrations: [
		starlight({
			title: 'Bilem',
			description: 'Документация Bilem — персональный агент для вашей 1С. Bilem Agent подключает базу 1С к Claude, Cursor, OpenClaw и другим ИИ по MCP; ChatGPT, телефон и мессенджеры — через Bilem Cloud.',
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
				{ label: 'Установка', link: '/install/' },
				{
					label: 'Подключение',
					items: [
						{ label: 'Агенты (MCP)', link: '/connect/' },
						{ label: 'Скилл Bilem', link: '/connect/skill/' },
						{ label: 'Tailscale', link: '/connect/tailscale/' },
					],
				},
				{ label: 'Инструменты', link: '/tools/' },
				{ label: 'Безопасность', link: '/security/' },
				{ label: 'Тарифы', link: '/pricing/' },
				{ label: 'Вопросы и ответы', link: '/faq/' },
			],
			lastUpdated: true,
			plugins: [
				starlightLlmsTxt({
					projectName: 'Bilem',
					description: 'Bilem — агент для 1С:Бухгалтерии для Казахстана. Bilem Agent (Windows, открытый код) — MCP-сервер рядом с 1С: читает базу через OData только на этом компьютере, печатает счета, доверенности и акты сверки, отправляет их по почте после подтверждения человеком; учёт не меняет. Bilem Cloud — ChatGPT, телефон, WhatsApp и Telegram по подписке.',
				}),
			],
		}),
	],
});
