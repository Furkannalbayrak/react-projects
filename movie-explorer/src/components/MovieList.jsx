import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieList({ movieData }) {
  const { Title, Poster, Year, imdbID, imdbRating} = movieData;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movies-details/${imdbID}`)}
      className="group cursor-pointer bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transform transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="relative overflow-hidden aspect-[2/3]">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450?text=No+Poster"}
          alt={Title}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-4 flex flex-col justify-between flex-1">
        <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-blue-400 transition-colors">
          {Title}
        </h3>
        <div className="flex items-center justify-between text-gray-400 text-sm mt-auto">
            <span className="bg-gray-700 px-2 py-1 rounded text-xs">{Year}</span>
            <span className="flex items-center gap-1 text-yellow-500">
                ★ <span className="text-gray-400">{imdbRating}</span>
            </span>
        </div>
      </div>
    </div>
  );
}

export default MovieList;