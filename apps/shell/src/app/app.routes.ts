import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';

export const appRoutes: Route[] = [
  {
    path: 'angular',
    loadChildren: () => import('angular/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'react',
    component: ReactWrapperComponent, 
    data: {
      elementName: 'react-element', 
      loadChildren: () => import('react/web-components') 
    },
  },
];