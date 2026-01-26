// import { StrictMode } from 'react';
// import * as ReactDOMClient from 'react-dom/client';
import r2wc from '@r2wc/react-to-web-component';
import App from './app/app';

export function defineReactWebComponent() {
  const elementName = 'react-element';

  if (!customElements.get(elementName)) {
    const ReactElement = r2wc(App, {
        props: {} 
    });
    
    customElements.define(elementName, ReactElement);
  }
}

defineReactWebComponent();