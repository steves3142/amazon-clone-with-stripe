import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
// import { SessionProvider } from 'next-auth/react'
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

// export default function MyApp({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider store={store} session={session}>
//       {Component.auth ? (
//         <Auth>
//           <Component {...pageProps} />
//         </Auth>
//       ) : (
//         <Component {...pageProps} />
//       )}
//     </SessionProvider>
//   )
// }