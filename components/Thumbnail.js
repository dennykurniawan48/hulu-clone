import Image from "next/image"
import {ThumbUpIcon} from "@heroicons/react/outline"

const Thumbnail = ({result}) => {
    console.log(result)
    const ASSET_URL = "https://image.tmdb.org/t/p/original"

    const myLoader = ({ src, width, quality }) => {
        return `${ASSET_URL}${src}?w=${width}&q=${quality || 75}`
      }
      
    return <div className="p-2 group transform ease-in sm:hover:scale-105 hover:z-50">
        <Image layout="responsive" loader={myLoader} width={1920} height={1080} src={`${result.backdrop_path || result.poster_path}`} />
      
        <div className="p-2">
            <p className="truncate max-w-md">{result.overview}</p>
            <p className="py-2 text-2xl group-hover:font-bold transition text-white duration-100 ease-in-out">{result.title || result.original_title || result.name}</p>
            <p className="flex justify-between py-4">{result.first_air_date || result.release_date} <p className="flex"><ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}</p></p>
        </div>
    </div>
}

export default Thumbnail