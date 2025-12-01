import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaImdb, FaArrowLeft, FaClock, FaCalendarAlt, FaStar } from "react-icons/fa";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getData = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=744d179f&i=${id}`);
      setMovieDetail(response.data);
    }
    getData();
  }, [id]);

  if (!movieDetail) {
    return <div className="h-screen flex items-center justify-center bg-gray-900 text-white">Yükleniyor...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8 pt-16">

      {/* Geri Dön Butonu */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition text-sm"
      >
        <FaArrowLeft /> Geri
      </button>

      <div className="max-w-5xl w-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* SOL TARAF: Resim Alanı */}
        <div className="relative w-full max-w-sm md:max-w-none md:w-80 mx-auto flex-shrink-0 shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={movieDetail.Poster !== "N/A" ? movieDetail.Poster : "https://via.placeholder.com/300x450"}
            alt={movieDetail.Title}
          />
        </div>

        {/* SAĞ TARAF: Detaylar */}
        <div className="flex flex-col gap-4 p-6 w-full justify-center">

          <div className="border-b border-gray-700 pb-3">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-white leading-tight">{movieDetail.Title}</h1>
              <div className="flex items-center gap-1 text-amber-400 font-bold bg-gray-900/50 px-2 py-1 rounded">
                <FaImdb className="text-xl" />
                <span>{movieDetail.imdbRating}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-400 text-sm">
              <span className="flex items-center gap-1"><FaCalendarAlt size={12} /> {movieDetail.Year}</span>
              <span className="flex items-center gap-1"><FaClock size={12} /> {movieDetail.Runtime}</span>
              <span className="px-2 py-0.5 bg-gray-700 rounded text-xs text-gray-300">{movieDetail.Rated}</span>
              <span className="text-blue-400 font-medium">|</span>
              <span className="text-blue-400 font-medium">{movieDetail.Genre}</span>
            </div>
          </div>

          <div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {movieDetail.Plot}
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-gray-700/20 p-4 rounded-lg text-sm mt-2 border border-gray-700/50">
            <div className="flex flex-col sm:flex-row sm:border-b sm:border-gray-700/50 sm:pb-2 gap-1 sm:gap-0">
              <span className="text-gray-500 w-24 font-semibold">Yönetmen:</span>
              <span className="text-white flex-1">{movieDetail.Director}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:border-b sm:border-gray-700/50 sm:pb-2 gap-1 sm:gap-0">
              <span className="text-gray-500 w-24 font-semibold">Yazar:</span>
              <span className="text-white flex-1">{movieDetail.Writer}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:border-b sm:border-gray-700/50 sm:pb-2 gap-1 sm:gap-0">
              <span className="text-gray-500 w-24 font-semibold">Oyuncular:</span>
              <span className="text-white flex-1">{movieDetail.Actors}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
              <span className="text-gray-500 w-24 font-semibold">Ödüller:</span>
              <span className="text-amber-500/80 flex-1">{movieDetail.Awards}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MovieDetails;