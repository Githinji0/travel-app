/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DestinationHero from "../components/DestinationHero";
import getDestinations from "../services/apiServices";
import { useNavigate } from "react-router-dom";

import parisImg from "../assets/images/A1.jpeg";
import baliImg from "../assets/images/a11.jpeg";
import nycImg from "../assets/images/a22.jpeg";
import tokyoImg from "../assets/images/b1.jpeg";
import sydneyImg from "../assets/images/b2.jpeg";
import romeImg from "../assets/images/b3.jpeg";
import icelandImg from "../assets/images/b4.jpeg";
import marrakeshImg from "../assets/images/c1.jpeg";
import placeholderImg from "../assets/images/d22.jpeg";

const initialItems = [
  { 
    id: "paris", 
    title: "Paris", 
    q: "paris", 
    h: "h-72", 
    img: parisImg, 
    description: "The city of lights, love, and art — explore the Eiffel Tower and world-class museums." 
  },
  { 
    id: "bali", 
    title: "Bali", 
    q: "bali", 
    h: "h-56", 
    img: baliImg, 
    description: "A tropical paradise known for its beaches, temples, and lush rice terraces." 
  },
  { 
    id: "nyc", 
    title: "New York", 
    q: "new+york", 
    h: "h-80", 
    img: nycImg, 
    description: "The city that never sleeps — iconic landmarks, Broadway shows, and endless energy." 
  },
  { 
    id: "tokyo", 
    title: "Tokyo", 
    q: "tokyo", 
    h: "h-56", 
    img: tokyoImg, 
    description: "A dazzling blend of tradition and technology — explore neon streets and ancient temples." 
  },
  { 
    id: "sydney", 
    title: "Sydney", 
    q: "sydney", 
    h: "h-48", 
    img: sydneyImg, 
    description: "Australia’s coastal gem — home to the Opera House, beaches, and vibrant harbor life." 
  },
  { 
    id: "rome", 
    title: "Rome", 
    q: "rome", 
    h: "h-64", 
    img: romeImg, 
    description: "A timeless city of history, architecture, and pasta — from the Colosseum to the Vatican." 
  },
  { 
    id: "iceland", 
    title: "Iceland", 
    q: "iceland", 
    h: "h-72", 
    img: icelandImg, 
    description: "Land of fire and ice — waterfalls, glaciers, and northern lights await." 
  },
  { 
    id: "marrakesh", 
    title: "Marrakesh", 
    q: "marrakesh", 
    h: "h-56", 
    img: marrakeshImg, 
    description: "A colorful Moroccan city filled with markets, spices, and desert adventures." 
  },
];


const Destinations = () => {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
const handleNavigate = (id) => {
  navigate(`/DestinationDetails`);
}
  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      try {
        const apiData = await getDestinations();
        let map = {};

        if (Array.isArray(apiData)) {
          apiData.forEach((d) => {
            if (d && d.id) map[d.id] = d;
          });
        } else if (apiData && typeof apiData === "object") {
          map = apiData;
        }

        const merged = initialItems.map((it) => {
          const found = map[it.id] || map[it.id?.toString()] || null;
          return {
            id: it.id,
            title: (found && (found.title ?? found.name)) ?? it.title,
            q: (found && (found.q ?? found.query)) ?? it.q ?? it.id,
            h: (found && found.h) ?? it.h,
            img: (found && (found.img ?? found.image)) ?? it.img ?? placeholderImg,
          };
        });

        if (mounted) setItems(merged);
      } catch (err) {
        console.error("Error loading destinations:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen  flex flex-col items-center">
      <DestinationHero />

      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-2 py-2 mt-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-l-2 tracking-wide border-pink-600 pl-4">
          Popular Destinations
        </h2>

        <section className="w-full">
          {loading && (
            <div className="text-center text-gray-500 mb-4">
              Loading destinations…
            </div>
          )}

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mx-auto">
            {items.map((it) => (
              <article
                key={it.id}
                className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300"
              >
                <Link to={`/destinations/${it.id}`} className="block group">
                  <div className={`w-full ${it.h} bg-gray-200 overflow-hidden`}>
                    <img
                      src={it.img}
                      alt={it.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {it.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Explore {it.title}  <br />{it.description}
                    </p>
                    <button onClick={()=>handleNavigate()} type="button" className="mt-2 bg-pink-600 hover:underline p-3 rounded-sm text-white text-sm">
                      View Details
                    </button>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destinations;
