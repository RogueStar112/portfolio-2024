"use client"


import { ThemeProvider } from '../../node_modules/next-themes/dist/index'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class" themes={['light', 'dark', 'light-dys', 'dark-dys']} defaultTheme='system'>{children}</ThemeProvider>
}