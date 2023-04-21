import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './APP/App'
import './index.css'
import { Provider } from 'react-redux'
import {ApolloProvider} from '@apollo/client'



import {store} from './Redux/store'
import {client} from './Apollo/client'
import {NextUIProvider} from "@nextui-org/react";




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <Provider store={store}>
          <ApolloProvider client={client}>
              <NextUIProvider><App/></NextUIProvider>
          </ApolloProvider>
      </Provider>
)
