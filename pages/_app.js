import localFont from '@next/font/local'
import '../styles/globals.css'
import {motion} from "framer-motion";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import {AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const staatliches = localFont({
    src: '../fonts/Staatliches/Staatliches.woff2',
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
            path: '../fonts/RobotoMono/RobotoMono-Bold.woff2',
            weight: '700',
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
    const router = useRouter()
    return (
      <AnimatePresence mode={"wait"}>
          <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                  duration: 0.75
              }}
              variants={{
                    initialState: {
                        opacity: 0,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    },
                    animateState: {
                        opacity: 1,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    },
                  exitState: {
                      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                  },
              }}
              className={`${staatliches.variable} ${robotoMono.variable} ${rubik.variable}`}
          >
              <Component {...pageProps} />
          </motion.div>
      </AnimatePresence>
    )
}

export default MyApp
