import { Mr_Dafoe, Poppins } from 'next/font/google'
import Navbar from '../src/Components/Navbar'
import './globals.css'

const mrDafoe = Mr_Dafoe({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mr-dafoe',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Joel Dimayuga',
  description: 'Frontend Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mrDafoe.variable} ${poppins.variable}`}>
      <body className="font-poppins">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
