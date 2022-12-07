import localFont from '@next/font/local'
import '../styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const staatliches = localFont({
    src: '../fonts/Staatliches.woff2',
    weight: '400',
    subsets: ['latin'],
    variable: '--font-staatliches'
})

const robotoMono = localFont({
    src: [
        {
            path: '../fonts/RobotoMono/RobotoMono.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/RobotoMono/RobotoMono-Italic.woff2',
            weight: '400',
            style: 'italic'
        }
    ],
    subsets: ['latin'],
    variable: '--font-robotoMono'
})

const rubik = localFont({
    src: [
        {
            path: '../fonts/Rubik/Rubik.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/Rubik/Rubik-Bold.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    subsets: ['latin'],
    variable: '--font-rubik'
})

function MyApp({ Component, pageProps }) {
  return (
      <div className={`${staatliches.variable} ${robotoMono.variable} ${rubik.variable}`}>
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
