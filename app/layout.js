import { EdgeStoreProvider } from './lib/edgestore'
import { Cabin, M_PLUS_1 } from 'next/font/google'
import './ui/globals.css'


const cabin = Cabin({ subsets: ['latin'] });
const ms = M_PLUS_1({ subsets: ['latin'] });

export const metadata = {
  title: 'Apex Financial',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  )
}
