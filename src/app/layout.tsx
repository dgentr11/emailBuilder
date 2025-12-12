
import './globals.css';
import type { ReactNode } from 'react';
import { Nav } from './components/Nav';


export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, Arial, sans-serif' }}>
        <header className={'bg-dark scheme-light'} style={{ display: 'flex', alignItems: 'center', position: 'fixed', zIndex: '999', height: '60px', backgroundColor: '#000', width: '100%', maxWidth: '1920px', margin: '0 auto', left: '50%', transform: 'translateX(-50%)' }}
          
        >
          <div style={{ display: 'flex', alignItems: 'center' }} >   
              <Nav />
          </div>
        </header>

        <main style={{  margin: '0 auto', padding: '60px 16px 16px', maxWidth: '1920px' }}>{children}</main>
      </body>
    </html>
  );
}
