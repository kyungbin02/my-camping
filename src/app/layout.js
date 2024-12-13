import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* 페이지 콘텐츠 */}
        <main>
          {children}
        </main>
        






        
        {/* <Footer /> */}


       
      </body>
    </html>
  );
}
