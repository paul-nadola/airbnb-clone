import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import NavBar from './components/navbar/NavBar'
import ClientOnly from './components/ClientOnly'
// import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb-clone',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <ToasterProvider/>
        <RentModal />
        <LoginModal/>
        <RegisterModal/>
        <NavBar currentUser = {currentUser}/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
