const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export default{
    fetchTrending:{
        title: "Trending",
        url: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en`
    },
    fetchTopRated:{
        title: "Top rated",
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en`
    },
    fetchAction:{
        title: "Action",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
    },
    fetchComedy:{
        title: "Comedy",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
    },
    fetchHorror:{
        title: "Horror",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
    },
    fetchRomance:{
        title: "Romance",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
    },
    fetchMystery:{
        title: "Mystery",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`
    },
    fetchScifi:{
        title: "Sci-fi",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`
    },
    fetchWestern:{
        title: "Western",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`
    },
    fetchAnimation:{
        title: "Animation",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`
    },
    fetchTv:{
        title: "Tv Movie",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`
    }
}