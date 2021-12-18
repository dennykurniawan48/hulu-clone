import Image from "next/image"
import{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
  } from '@heroicons/react/outline'
import HeaderItem from "./HeaderItem"
  

const Header = () => {
    return <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
        <div className="flex flex-grow justify-evenly max-w-2xl h-auto">
            <HeaderItem Icon={HomeIcon} title="Home"/>
            <HeaderItem Icon={LightningBoltIcon} title="Trending"/>   
            <HeaderItem Icon={BadgeCheckIcon} title="Verified"/>   
            <HeaderItem Icon={CollectionIcon} title="Collection"/>   
            <HeaderItem Icon={SearchIcon} title="Search"/>   
            <HeaderItem Icon={UserIcon} title="Account"/>   
        </div>
        <Image className="object-contain" src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" width={200} height={100}/>
    
    </header>
}

export default Header