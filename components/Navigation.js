import { useRouter } from "next/router"
import request from "../util/request"

const Navigation = () => {
    const router = useRouter()
    return <nav>
        <div className="flex whitespace-nowrap px-10 sm:px-20 space-x-10 text-2xl sm:space-x-20 overflow-x-scroll scrollbar-hide">
            {Object.entries(request).map(([key, {title, url}]) => (
                <h2 onClick={() => {
                    router.query.genre = `${key}`
                    router.push(router)
                    //console.log(url)
                }} key={key} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
            ))}
        </div>
        <div className="absolute top-0 right-0 h-10 bg-gradient-to-l from-[#06202A] w-1/12"/>
    </nav>
}

export default Navigation