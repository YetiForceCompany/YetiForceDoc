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
		defaultLocale: 'en',
		locales: ['en', 'pl']
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
						if (locale !== 'en') {
							return `https://crowdin.com/project/yetiforcedoc/${locale}`;
						}
						return `https://github.com/YetiForceCompany/YetiForceDoc/edit/main/docs/${docPath}`;
					},
					showLastUpdateAuthor: false,
					showLastUpdateTime: true,
					versions: {
						current: {
							label: '7.x',
							path: ''
						}
					},
					lastVersion: 'current'
				},
				theme: {
					customCss: [require.resolve('./src/css/custom.css')]
				}
			}
		],
		[
			'redocusaurus',
			{
				specs: [
					{
						id: 'WebserviceStandard',
						spec: 'https://demo.yetiforce.com/api/WebserviceStandard.json',
						url: 'https://demo.yetiforce.com/api/WebserviceStandard.json'
					},
					{
						id: 'WebservicePremium',
						url: 'https://demo.yetiforce.com/api/WebservicePremium.json',
						spec: 'https://demo.yetiforce.com/api/WebservicePremium.json'
					},
					{
						id: 'ManageConsents',
						spec: 'https://demo.yetiforce.com/api/ManageConsents.json',
						url: 'https://demo.yetiforce.com/api/ManageConsents.json'
					},
					{
						id: 'PBX',
						spec: 'https://demo.yetiforce.com/api/PBX.yaml',
						url: 'https://demo.yetiforce.com/api/PBX.yaml'
					},
					{
						id: 'SMS',
						spec: 'https://demo.yetiforce.com/api/SMS.yaml',
						url: 'https://demo.yetiforce.com/api/SMS.yaml',
						route: '/api2/SMS/'
					},
					//	{
					//	 	id: 'WooCommerce',
					//	 	spec: 'https://gitdeveloper.yetiforce.com/api/WooCommerce.yaml',
					//	 	url: 'https://gitdeveloper.yetiforce.com/api/WooCommerce.yaml',
					//	 	route: '/api2/WooCommerce/'
					//	 },
					{
						id: 'Token',
						spec: 'https://demo.yetiforce.com/api/Token.yaml',
						url: 'https://demo.yetiforce.com/api/Token.yaml',
						route: '/api2/Token/'
					}
				]
			}
		]
	],
	themeConfig: {
		metadata: [
			{ name: 'keywords', content: 'yetiforce,help,doc,docs,documentation,guides,wiki,knowledge,dokumentacja,baza wiedzy' },
			{ name: 'description', content: 'Official YetiForce System documentation / guide / knowledge' }
		],
		image: 'img/logo_horizontal.png',
		prism: {
			additionalLanguages: ['ini', 'php', 'javadoclike', 'phpdoc', 'php-extras', 'apacheconf', 'nginx', 'http', 'apacheconf']
		},
		navbar: {
			title: 'YetiForce Documentation',
			logo: { alt: 'YetiForce Logo', src: 'img/logo/72x72.png' },
			items: [
				{ to: 'introduction', label: 'Introduction', position: 'left' },
				{ to: 'user-guides', label: 'User', position: 'left' },
				{ to: 'administrator-guides', label: 'Administrator', position: 'left' },
				{ to: 'developer-guides', label: 'Developer', position: 'left' },
				{ to: 'contributing', label: 'Contributing / Community', position: 'left' },

				{ label: 'yetiforce.com', position: 'right', href: 'https://yetiforce.com/' },
				{ label: 'GitHub', position: 'right', href: 'https://github.com/YetiForceCompany/YetiForceCRM' },
				{ type: 'localeDropdown', position: 'right' },
				{ type: 'docsVersionDropdown', position: 'right' }
			]
		},
		matomo: {
			// https://github.com/karser/docusaurus-plugin-matomo
			matomoUrl: 'https://stats.yetiforce.com/',
			siteId: 2,
			phpLoader: 'matomo.php',
			jsLoader: 'matomo.js'
		},
		zoom: {
			selector: '.markdown :not(em,a) img',
			config: {
				// options you can specify via https://github.com/francoischalifour/medium-zoom#usage
				background: {
					light: 'rgb(255, 255, 255)',
					dark: 'rgb(50, 50, 50)'
				}
			}
		},
		footer: {
			style: 'dark',
			copyright: `Copyright © ${new Date().getFullYear()} YetiForce S.A.`
		}
	},
	plugins: [
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				language: ['en'],
				docsRouteBasePath: '/',
				highlightSearchTermsOnTargetPage: true,
				searchResultLimits: 10,
				indexBlog: false
			}
		],
		['docusaurus-plugin-matomo', {}],
		[require.resolve('docusaurus-plugin-image-zoom'), {}],
		[
			'@docusaurus/plugin-client-redirects',
			{
				redirects: [
					{
						from: '/apps',
						to: '/administrator-guides/apps'
					}
				]
			}
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
						href: '/img/logo/72x72.png'
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.json' // your PWA manifest
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: 'rgb(1, 55, 77)'
					}
				]
			}
		]
	]
};
