 
 
import { Inter } from 'next/font/google'
import AuthContextProvider from '@/Provider/AuthContextProvider'
import DashboardLayout from '@/Component/AdminTemplate/DashboardLayout/DashboardLayout'
 
 

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function DashboardLayoutRoot({ children }) {
  return (
    
      <section  >
      <AuthContextProvider> 
        <DashboardLayout>
        {children}
        </DashboardLayout>
        </AuthContextProvider>  
        </section>
   
  )
}
