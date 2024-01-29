export type MenuItem = {
    name: string,
    slug: string
}

export const menus: {name: string; itens: MenuItem[]}[] = [
    {
        name: "Client",
        itens: [
            {
                name: 'Home',
                slug: '/'
            },
            {
                name: "UseState()",
                slug: "my-lib/client/use-state"
            }
        ]
    },
    {
        name: "Server",
        itens: []
    }
]