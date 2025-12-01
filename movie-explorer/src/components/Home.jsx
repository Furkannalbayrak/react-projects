import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import { FaSearch } from "react-icons/fa";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [mainMovies, setMainMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const APIKEY = import.meta.env.VITE_OMDBAPI_KEY;

  const popularMovies = [
    "Inception", "The Godfather", "The Dark Knight", "Forrest Gump", "Pulp Fiction", "Fight Club", "Interstellar", "The Matrix", "The Lord of the Rings", "Titanic", "Dog", "The Prestige", "The Green Mile", "Avatar", "V For Vendetta", "The Lord of the Rings: The Return of the King", "The Lord of the Rings: The Fellowship of the Ring", "Léon", "Pirates Of The Caribbean: The Curse Of The Black Pearl", "Pirates of the Caribbean: Dead Man's Chest", "The Pianist", "Gladiator", "Ice Age: Dawn of the Dinosaurs", "The Hobbit: An Unexpected Journey", "The Shawshank Redemption", "Memento", "Scarface", "Taxi Driver", "Star Wars: Episode V - The Empire Strikes Back", "Spider-Man: Across the Spider-Verse"
  ];

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(
          popularMovies.map((movieName) =>
            axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}=${movieName}`)
          )
        );
        setMainMovies(responses.map(res => res.data));
      } catch (error) {
        console.error("Hata:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (inputValue.length < 3) {
        setFilterMovies([]);
        return;
      }

      try {
        const datas = await axios.get(`http://www.omdbapi.com/?apikey=744d179f&s=${inputValue}`);
        if (datas.data.Search) {
          setFilterMovies(datas.data.Search);
        } else {
          setFilterMovies([]);
        }
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      if (inputValue) getData();
    }, 500);

    return () => clearTimeout(timeoutId);

  }, [inputValue]);

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">

      {/* Header ve Arama Alanı */}
      <div className="bg-gray-800 py-8 px-4 shadow-xl border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-10">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tighter">
            FilmCeNNeti
          </h2>

          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <input
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
              type="text"
              placeholder="Film ara..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="absolute left-4 top-4 text-gray-400">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Film Listesi */}
      <div className="max-w-7xl mx-auto sm:px-10 px-6 mt-10">
        <h3 className="text-2xl font-semibold mb-6 border-l-4 border-blue-500 pl-3">
          {inputValue ? `"${inputValue}" için sonuçlar` : "Popüler Filmler"}
        </h3>

        {loading ? (
          <p className="text-center text-gray-400 animate-pulse">Filmler yükleniyor...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-5 gap-3">
            {
              inputValue === "" ? (
                mainMovies.map((movie, index) => (
                  <MovieList movieData={movie} key={index} />
                ))
              ) : filterMovies.length === 0 ? (
                <div className="col-span-full text-center py-10">
                  <p className="text-xl text-gray-500">Aradığınız kriterde film bulunamadı.</p>
                </div>
              ) : (
                filterMovies.map((movie, index) => (
                  <MovieList movieData={movie} key={index} />
                ))
              )
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;