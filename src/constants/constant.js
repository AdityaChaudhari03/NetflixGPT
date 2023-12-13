export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjY2YjliYjg0YTFmNjdiM2FkN2VhNDc5Yjg5Mzk2MSIsInN1YiI6IjY1NzliM2RiNTY0ZWM3MDBlMTBkNjZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EwoKk3XE0J6l5Fk7qip_mUCBmem1Zmfk8KvF3LH0_sQ",
  },
};

export const TRENDING_MOVIESURL =
  "https://api.themoviedb.org/3/trending/movie/day?&page=1";

export const POPULAR_MOVIESURL =
  "https://api.themoviedb.org/3/movie/popular?&page=2";

export const TOPRATED_MOVIESURL =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";

export const UPCOMING_MOVIESURL =
  "https://api.themoviedb.org/3/movie/upcoming?&page=2";

export const TOP_TVSHOWSURL = "https://api.themoviedb.org/3/tv/popular?&page=1";

export const GPTSEARCHBG_URL =
  "https://i.pinimg.com/564x/7e/d8/b0/7ed8b050d6d62aa79729e9ae1d02493f.jpg";

export const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
};

export const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  marathi: {
    search: "शोध",
    gptSearchPlaceholder: "तुम्हाला आज काय बघायला आवडेल?",
  },
  punjabi: {
    search: "ਖੋਜ",
    gptSearchPlaceholder: "ਤੁਸੀਂ ਅੱਜ ਕੀ ਦੇਖਣਾ ਚਾਹੋਗੇ?",
  },
  spanish: {
    search: "buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
};

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
  { identifier: "punjabi", name: "Punjabi" },
  { identifier: "spanish", name: "Spanish" },
];

export const chatGptAPI_KEY =
  "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";
