import { EdgeStoreProvider } from './lib/edgestore'
import { Cabin, M_PLUS_1 } from 'next/font/google'
import './ui/globals.css'
import Script from 'next/script'


const cabin = Cabin({ subsets: ['latin'] });
const ms = M_PLUS_1({ subsets: ['latin'] });

export const metadata = {
  title: 'Blue Phoenix Bank',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
    <Script src="//code.tidio.co/kuktzqesnhuiucdqtraxzhlwgtbkotbd.js" async>
      <body className={cabin.className}>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </Script>
    </html>
    </>
  )
}
