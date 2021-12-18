import Thumbnail from "./Thumbnail"

const Result = ({result}) => {
    return <div className="px-5 mt-10 sm:grid md:grid-col-2 lg:grid-cols-3 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {result.results.map(result => (
            <Thumbnail key={result.id} result={result}/>
        ))}
    </div>
}
  
export default Result