import { EdgeStoreProvider } from "./lib/edgestore";
import { Cabin, M_PLUS_1 } from "next/font/google";
import "./ui/globals.css";
import Script from "next/script";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "Blue Pheonix Bank",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Script type="text/javascript">
          {`
            var _smartsupp = _smartsupp || {};
              _smartsupp.key = '1f2cf029bfcab635952fe842d9d470fdb06dbd43';
              window.smartsupp||(function(d) {
                var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
                s=d.getElementsByTagName('script')[0];c=d.createElement('script');
                c.type='text/javascript';c.charset='utf-8';c.async=true;
                c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
        `}
        </Script>
        <body className={cabin.className}>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </body>
      </html>
    </>
  );
}
