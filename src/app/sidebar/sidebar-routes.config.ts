interface IMenuItem {
  id?: string;
  path: string;
  title: string;
  icon?: string;
  children?: IMenuItem[] | null;
}

export const ROUTES: IMenuItem[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: 'profile', title: 'User Profile', icon: 'person', children: null },
    { path: 'domains', title: 'Dominios', icon: 'public', children: null},
    { path: '#administration', id: 'administration', title: 'Administracion', icon: 'apps', children: [
      { path: 'administration/drivers', title: 'Conductores', icon: 'D'},
      { path: 'administration/vehicles', title: 'Vehiculos', icon: 'V'}
      ]
    },
    { path: '', title: 'Ubicaciones', children: null},
    { path: 'table', title: 'Table List', icon: 'content_paste', children: null },
    { path: '#component', id: 'component', title: 'Component', icon: 'apps', children: [
        {path: 'components/price-table', title: 'Price Table', icon: 'PT'},
        {path: 'components/panels', title: 'Panels', icon: 'P'},
        {path: 'components/wizard', title: 'Wizard', icon: 'W'},
      ]},
    { path: 'notification', title: 'Notification', icon: 'notifications', children: null },
    { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },
];
