/**
 * @copyright YetiForce S.A.
 * @license   YetiForce Public License 5.0 (licenses/LicenseEN.txt or yetiforce.com)
 * @author    Mariusz Krzaczkowski <m.krzaczkowski@yetiforce.com>
 */
/** @type {import('@docusaurus/types').DocusaurusConfig} */
export default {
	title: 'YetiForce Documentation',
	tagline: 'Official documentation/guide of the YetiForce system',
	url: 'https://doc.yetiforce.com',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'YetiForceCompany',
	projectName: 'YetiForceCRM',
	i18n: {
		defaultLocale: 'pl',
		locales: ['pl', 'en'],
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				debug: false,
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: ({ locale, versionDocsDirPath, docPath }) => {
						if (locale !== 'pl') {
							return `https://crowdin.com/project/yetiforcedoc/${locale}`;
						}
						return `https://github.com/YetiForceCompany/YetiForceDoc/edit/main/docs/${docPath}`;
					},
					showLastUpdateAuthor: false,
					showLastUpdateTime: true,
					versions: {
						current: {
							label: '7.x',
							path: '',
						},
					},
					lastVersion: 'current',
				},
				theme: {
					customCss: [require.resolve('./src/css/custom.css')],
				},
			},
		],
		[
			'redocusaurus',
			{
				specs: [
					{
						id: 'WebserviceStandard_7x',
						spec: './api/7x/WebserviceStandard.json',
						url: '/api/7x/WebserviceStandard.json',
					},
					{
						id: 'WebserviceStandard_65',
						spec: './api/65/WebserviceStandard.json',
						url: '/api/65/WebserviceStandard.json',
					},
					{
						id: 'WebserviceStandard_64',
						spec: './api/64/WebserviceStandard.json',
						url: '/api/64/WebserviceStandard.json',
					},
					{
						id: 'WebservicePremium_7x',
						spec: './api/7x/WebservicePremium.json',
						url: '/api/7x/WebservicePremium.json',
					},
					{
						id: 'WebservicePremium_65',
						spec: './api/65/WebservicePremium.json',
						url: '/api/65/WebservicePremium.json',
					},
					{
						id: 'WebservicePremium_64',
						spec: './api/64/WebservicePremium.json',
						url: '/api/64/WebservicePremium.json',
					},
					{
						id: 'ManageConsents_7x',
						spec: './api/7x/ManageConsents.json',
						url: '/api/7x/ManageConsents.json',
					},
					{
						id: 'ManageConsents_65',
						spec: './api/65/ManageConsents.json',
						url: '/api/65/ManageConsents.json',
					},
					{
						id: 'ManageConsents_64',
						spec: './api/64/ManageConsents.json',
						url: '/api/64/ManageConsents.json',
					},
					{
						id: 'SMS_7x',
						spec: './api/7x/SMS.yaml',
						url: '/api/7x/SMS.yaml',
						route: '/api2/7x/SMS/',
					},
					{
						id: 'SMS_65',
						spec: './api/65/SMS.yaml',
						url: '/api/65/SMS.yaml',
						route: '/api2/65/SMS/',
					},
					{
						id: 'SMS_64',
						spec: './api/64/SMS.yaml',
						url: '/api/64/SMS.yaml',
						route: '/api2/64/SMS/',
					},
					{
						id: 'Token_7x',
						spec: './api/7x/Token.yaml',
						url: '/api/7x/Token.yaml',
						route: '/api2/7x/Token/',
					},
					{
						id: 'PBX_7x',
						spec: './api/7x/PBX.yaml',
						url: '/api/7x/PBX.yaml',
					},
				],
			},
		],
	],
	themeConfig: {
		metadata: [
			{
				name: 'description',
				content: 'Official YetiForce System documentation / guide / knowledge',
			},
			{
				name: 'keywords',
				content:
					'yetiforce, crm, erp, help, doc, docs, documentation, guides, wiki, knowledge, dokumentacja, baza wiedzy',
			},
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:title', content: 'YetiForce Documentation' },
			{ name: 'twitter:description', content: 'Official YetiForce System documentation / guide / knowledge' },
			{ name: 'twitter:image', content: 'https://doc.yetiforce.com/img/logo/128x128.png' },
			{ property: 'og:title', content: 'YetiForce Documentation' },
			{ property: 'og:description', content: 'Official YetiForce System documentation / guide / knowledge' },
			{ property: 'og:image', content: 'https://doc.yetiforce.com/img/logo/128x128.pngg' },
			{ property: 'og:url', content: 'https://doc.yetiforce.com/' },
		],
		image: 'img/logo_horizontal.png',
		prism: {
			additionalLanguages: ['ini', 'php', 'javadoclike', 'phpdoc', 'php-extras', 'apacheconf', 'nginx', 'http'],
		},
		navbar: {
			title: 'YetiForce Documentation',
			logo: { alt: 'YetiForce Logo', src: 'img/logo/72x72.png' },
			items: [
				{ to: 'introduction', label: 'Introduction', position: 'left' },
				{ to: 'user-guides', label: 'User', position: 'left' },
				{
					to: 'administrator-guides',
					label: 'Administrator',
					position: 'left',
				},
				{
					to: 'developer-guides',
					label: 'Developer',
					position: 'left',
				},
				{
					to: 'portal',
					label: 'Portal',
					position: 'left',
				},
				{
					to: 'contributing',
					label: 'Contributing / Community',
					position: 'left',
				},

				{
					label: 'yetiforce.com',
					position: 'right',
					href: 'https://yetiforce.com/',
				},
				{
					label: 'GitHub',
					position: 'right',
					href: 'https://github.com/YetiForceCompany/YetiForceCRM',
				},
				{ type: 'localeDropdown', position: 'right' },
				{ type: 'docsVersionDropdown', position: 'right' },
			],
		},
		matomo: {
			// https://github.com/karser/docusaurus-plugin-matomo
			matomoUrl: 'https://stats.yetiforce.com/',
			siteId: 2,
			phpLoader: 'matomo.php',
			jsLoader: 'matomo.js',
		},
		zoom: {
			selector: '.markdown :not(em,a) img',
			config: {
				// options you can specify via https://github.com/francoischalifour/medium-zoom#usage
				background: {
					light: 'rgb(255, 255, 255)',
					dark: 'rgb(50, 50, 50)',
				},
			},
		},
		footer: {
			style: 'dark',
			copyright: `Copyright © ${new Date().getFullYear()} YetiForce S.A.`,
		},
	},
	plugins: [
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				language: ['en'],
				docsRouteBasePath: '/',
				highlightSearchTermsOnTargetPage: true,
				searchResultLimits: 10,
				indexBlog: false,
			},
		],
		['docusaurus-plugin-matomo', {}],
		[require.resolve('docusaurus-plugin-image-zoom'), {}],
		[
			'@docusaurus/plugin-client-redirects',
			{
				redirects: [
					{
						from: '/apps',
						to: '/administrator-guides/apps',
					},
				],
			},
		],
		[
			'@docusaurus/plugin-pwa',
			{
				debug: false,
				offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/logo/72x72.png',
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.json', // your PWA manifest
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: 'rgb(1, 55, 77)',
					},
				],
			},
		],
	],
};
