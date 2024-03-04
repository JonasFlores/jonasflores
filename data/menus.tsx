export type MenuItem = {
	name: string,
	slug: string,
	Isexternal?: boolean
	Disable?: boolean
}

export const menus: {name: string; itens: MenuItem[]}[] = [
	{
		name: "Projects",
		itens: [
			{name: 'Curriculum Vitae', slug: 'curriculum-vitae'},
			{name: 'Cover Letter', slug: 'curriculum-vitae/cover-letter'},
			{name: 'Wage Tax Information - New Zealand', slug: 'wage-tax-nz'},
			{name:'TXT Converter | CSV & JSON', slug:'converter-tool'},
		]
	},
	{
		name: 'Concepts',
		itens: [
			{name:'Lifecycle UseState vs Constraints', slug:'usestate-lifecycle'},
			
		]
	},
	{
		name: "Site",
		itens: [
			{
				name: 'Settings',
				slug:'settings'
			}
		]
	},
	{
		name: "Coming soon",
		itens: [
			{
				name: 'AppSheets - Inventory Managment',
				slug: '#',
				Disable: true
			},
			{
				name: 'Production Reports Tool',
				slug: '#',
				Disable: true
			}
			
		]
	},
	{
		name: "Social Media",
		itens: [
			{
				name: 'Linkedin',
				slug: 'https://www.linkedin.com/in/jonassflores/',
				Isexternal: true
			}
			
		]
	}
]