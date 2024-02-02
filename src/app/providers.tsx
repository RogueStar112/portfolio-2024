"use client"

import { ThemeProvider } from '../../node_modules/next-themes/dist/index'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
}