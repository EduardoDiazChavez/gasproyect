import { Footer } from "@/components/Layout/Footer"
import { Navbar } from "@/components/Layout/Navbar"
import { FC } from "react"

const DefaultLayout = ({children}) => {
    return (
        <>
            <main>
                <Navbar />
                {children}
             {/*    <Footer/> */}
            </main>
        </>
    )
}
export default DefaultLayout