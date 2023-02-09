/**
 * @copyright YetiForce S.A.
 * @license   YetiForce Public License 5.0 (licenses/LicenseEN.txt or yetiforce.com)
 * @author    Mariusz Krzaczkowski <m.krzaczkowski@yetiforce.com>
 */
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'YetiForce Documentation',
	tagline: '👷 Site under construction 👷',
	url: 'https://doc.yetiforce.com',
	baseUrl: '/',
	//baseUrl: '/YetiForceDoc/build/',
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
				//debug: true,
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/YetiForceCompany/YetiForceDoc/edit/main/',
					showLastUpdateAuthor: false,
					showLastUpdateTime: true
				},
				theme: {
					customCss: [require.resolve('./src/css/custom.css')]
				}
			}
		]
	],
	themeConfig: {
		metadata: [
			{ name: 'keywords', content: 'yetiforce,help,doc,docs,documentation,guides,wiki,knowledge' },
			{ name: 'description', content: 'Official YetiForce System documentation / guide / knowledge' }
		],
		image: 'img/logo_horizontal.png',
		prism: {
			additionalLanguages: ['ini', 'php', 'javadoclike', 'phpdoc', 'php-extras', 'apacheconf', 'nginx']
		},
		navbar: {
			title: 'YetiForce Documentation',
			logo: { alt: 'YetiForce Logo', src: 'img/logo80.png' },
			items: [
				{ to: 'introduction', label: 'Introduction', position: 'left' },
				{ to: 'user-guides', label: 'User', position: 'left' },
				{ to: 'administrator-guides', label: 'Administrator', position: 'left' },
				{ to: 'developer-guides', label: 'Developer', position: 'left' },
				{ to: 'contributing', label: 'Contributing / Community', position: 'left' },
				// { to: 'portal', label: 'Portal', position: 'left' },
				{ type: 'localeDropdown', position: 'right' },
				{ label: 'yetiforce.com', position: 'right', href: 'https://yetiforce.com/' },
				{ label: 'GitHub', position: 'right', href: 'https://github.com/YetiForceCompany/YetiForceCRM' }
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
			/*
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Introduction',
							to: '/'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Sourceforge',
							href: 'https://sourceforge.net/projects/yetiforce/'
						},
						{
							label: 'Softaculous',
							href: 'http://www.softaculous.com/apps/erp/YetiForce'
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/yetiforceen'
						}
					]
				},
				{
					title: 'Demos',
					items: [
						{
							label: 'GitStable',
							href: 'https://gitstable.yetiforce.com/'
						},
						{
							label: 'GitDeveloper',
							href: 'https://gitdeveloper.yetiforce.com/'
						},
						{
							label: 'Customer Portal',
							href: 'https://gitdeveloper.yetiforce.com/portal/'
						},
						{
							label: 'Partner Portal',
							href: 'https://gitdevportal.yetiforce.com/'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'WWW',
							href: 'https://yetiforce.com/'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/YetiForceCompany/YetiForceCRM'
						}
					]
				}
			],
			*/
			copyright: `Copyright © ${new Date().getFullYear()} YetiForce S.A.`
		}
	},
	plugins: [
		[
			require.resolve('@cmfcmf/docusaurus-search-local'),
			{
				language: ['en'],
				indexDocSidebarParentCategories: 4,
				indexBlog: false,
				maxSearchResults: 20
			}
		],
		['docusaurus-plugin-matomo', {}],
		[require.resolve('docusaurus-plugin-image-zoom'), {}],
		[require.resolve('@saucelabs/theme-github-codeblock'), {}],
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
		]
	]
};
