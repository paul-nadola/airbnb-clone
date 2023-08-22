import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import NavBar from './components/navbar/NavBar'
import ClientOnly from './components/ClientOnly'
// import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Air Bnb',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <RegisterModal/>
        <NavBar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
