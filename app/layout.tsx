import type { Metadata } from 'next'
import { Geist_Mono } from "next/font/google";

import './globals.css'

const geist = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sriharsha - Software Engineer',
  description: 'Personal website of Sriharsha, a Software Engineer based in Ottawa, Canada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function() {
            function setTheme(theme) {
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            }
            
            if (typeof window !== 'undefined') {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                setTheme('dark');
              } else {
                setTheme('light');
              }

              window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                if (!('theme' in localStorage)) {
                  setTheme(e.matches ? 'dark' : 'light');
                }
              });
            }
          })();
        `}} />
      </head>
      <body className={`${geist.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}

