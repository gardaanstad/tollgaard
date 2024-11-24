import './globals.css'
import styles from './layout.module.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <head>
        <title>Tollgaarden Gjestegaard</title>
        <meta name="description" content="Opplev historiske Larvik i moderne leiligheter" />
        <link rel="icon" href="/crown.svg" type="image/svg+xml" />
      </head>
      <body>
        <div className={styles.container}>
          <Navbar />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
