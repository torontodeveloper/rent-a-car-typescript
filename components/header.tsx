import { ReactNode,FC } from "react"
import Image from "next/image"
import logo from '../public/mango.jpg'

type HeaderProps = {
    img:any,
    altText:string,
    children:ReactNode
}

const Header:FC<HeaderProps>=({img,altText,children}:HeaderProps)=>{
    return(
        <header>
            <Image src={logo} alt={altText} width={100} height={100}/>
            {children}
        </header>
    )
}
export default Header