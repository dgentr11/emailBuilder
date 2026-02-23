
import './globals.css';
import type { ReactNode } from 'react';
import { Nav } from './components/Nav';


export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body style={{ margin: 0, fontFamily: 'system-ui, Arial, sans-serif', scrollBehavior: 'smooth' }}>
        <header className='fixed left-1/2 -translate-x-1/2 z-[999] flex items-center h-[60px] w-full max-w-[1920px] bg-white text-gray-800
    dark:bg-black dark:text-white'>
          <div className='flex items-center w-full px-4'>   
              <Nav />
          </div>
        </header>

        <main style={{  margin: '0 auto', padding: '60px 16px 16px', maxWidth: '1920px', height: '90vh' }}>{children}</main>
      </body>
    </html>
  );
}
