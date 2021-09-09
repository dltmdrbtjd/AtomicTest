import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import GlobalThemeProvider from './styles/GlobalThemeProvider'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './redux/configureStore'

ReactDOM.render(
  <Provider store={store}>
    <GlobalThemeProvider>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </GlobalThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
