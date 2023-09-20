import ImagesList from "./ImagesList";
import SearchBar from "./SearchBar";
import { images } from "./images";
import { createClient } from "pexels";
import { Suspense, useState, useRef } from "react";

export default function MainPage() {
  const [list, setList] = useState([...images]);
  const [error, setError] = useState("");
  const inputElementRef = useRef<HTMLInputElement>();
  const client = createClient(
    "uGFSqdXOaRwLJyKC3V6HKy57XwYuX6Bfz0DaJS4K9bLqIVxiFQ9zn1x5"
  );

  function SearchPexels(query: string) {
    try {
      client.photos
        .search({ query, per_page: 20 })
        .then((photos) => {
          // @ts-ignore
          const sortedList = photos?.photos.map((item) => ({
            src: item.src.large,
            id: item.id,
          }));
          return sortedList;
        })
        .then((list) => {
          if (list.length == 20) {
            setList(list);
            setError("");
          } else {
            setList([...images]);
            setError("We don't have pictures that match your search");
          }
        });
    } catch (error) {
      setError("Something happened. Please try again");
    }
  }

  function handleSearch() {
    if (inputElementRef.current.value) {
      SearchPexels(inputElementRef.current.value);
    }
  }

  function reset() {
    setList([...images]);
  }

  return (
    <div className="px-4 text-center msm:px-8 md:w-11/12 md:mx-auto">
      <h1 className="font-bold text-2xl text-rosewood mt-8 mb-4 md:text-3xl lg:text-4xl">
        Welcome to Imagery
      </h1>
      <p className="text-center">
        Check out this elite collection of Album Covers and rearrange them in
        the order you see fit.
      </p>
      <SearchBar searchRef={inputElementRef} handleClick={handleSearch} />
      {error && <p className="text-sm text-rosewood-300">{error}</p>}
      {list[0].src != images[0].src && (
        <button className="py-2 px-4 bg-melon rounded-lg" onClick={reset}>
          Return to first set of pictures
        </button>
      )}
      <div className="py-16">
        <Suspense
          fallback={
            <div className="flex justify-center items-center mt-24">
              <div className="flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-melon to-rosewood animate-spin">
                <div className="h-9 w-9 rounded-full bg-gray-200"></div>
              </div>
            </div>
          }
        >
          {
            // @ts-ignore
            <ImagesList list={list} />
          }
        </Suspense>
      </div>
    </div>
  );
}
