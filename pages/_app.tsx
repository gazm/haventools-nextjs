import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCircle);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
