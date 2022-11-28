import localFont from '@next/font/local'
import '../styles/globals.css'

const staatliches = localFont({
    src: '../fonts/Staatliches.woff2',
    weight: '400',
    subsets: ['latin'],
    variable: '--font-staatliches'
})

const robotoMono = localFont({
    src: '../fonts/RobotoMono.woff2',
    subsets: ['latin'],
    variable: '--font-robotoMono'
})

function MyApp({ Component, pageProps }) {
  return (
      <div className={`${staatliches.variable} ${robotoMono.variable}`}>
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
