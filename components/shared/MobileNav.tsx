import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "../ui/sheet"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"
  

const MobileNav = () => {
  return (
    <nav className='flex-center px-4 md:hidden'>
        <Sheet>
            <SheetTrigger>
                <Image 
                    src='/assets/icons/menu.svg' 
                    alt="menu"
                    width={24}
                    height={1000}
                    className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent >
                <Image 
                    src='/assets/images/logo.svg' 
                    alt="menu"
                    width={120}
                    height={1000}
                    className="pb-2"
                />
                <Separator className="border border-gray-300 mb-4"/>
                <NavItems />
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav