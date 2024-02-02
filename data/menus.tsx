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
			{
				name: 'Curriculum Vitae',
				slug: 'curriculum-vitae'
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
				name: 'Wage Calculator - New Zealand Tax',
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
	},
	{
		name: "test",
		itens: [
			{
				name: 'Test',
				slug: 'test',

			}
			
		]
	}
]