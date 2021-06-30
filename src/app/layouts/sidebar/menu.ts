import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx bxs-dashboard',
        link: '',
    },
    {
        id: 3,
        label: 'Usuários',
        icon: 'bx bxs-user',
        subItems:[
        {
            id: 4,
            label: 'Pesquisar usuário',
            link: '/user/search-user',
            parentId: 3
        },
        {
            id: 5,
            label: 'Cadastrar usuário',
            link: '/user/create-user',
            parentId: 3
        },
    ]
    },
    {
        id: 6,
        label: 'Servidores',
        icon: 'bx bxs-server',
        subItems:[
            {
                id: 7,
                label: 'Pesquisar servidor',
                link: '/serve/search-serve',
                parentId: 6
            },
            {
                id: 8,
                label: 'Cadastrar servidor',
                link: '/serve/create-serve',
                parentId: 6
            },
        ]
    },
    {
        id: 9,
        label: 'Ramal',
        icon: 'bx bxs-phone-call',
        subItems:[
            {
                id: 10,
                label: 'Pesquisar servidor',
                link: '/phone-extension/search-phone-extension',
                parentId: 9
            },
            {
                id: 11,
                label: 'Cadastrar servidor',
                link: '/phone-extension/create-phone-extension',
                parentId: 9
            },
        ]
    }
];

