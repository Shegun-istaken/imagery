import searchIcon from "../../assets/whiteSearchIcon.svg";

export default function SearchBar({ handleClick, searchRef }) {
  return (
    <div className="w-3/4 border border-rosewood rounded-lg my-8 mx-auto flex flex-col items-center relative md:w-1/3 lg:w-2/4">
      <input
        type="text"
        placeholder="Find new pictures"
        className="w-full bg-transparent border border-white p-2 pr-10 rounded-lg placeholder:text-sm xl:placeholder:text-base xl:p-4"
        ref={searchRef}
      />
      <img
        src={searchIcon}
        alt="search Icon"
        className="absolute w-4 right-4 top-3 xl:w-6 xl:top-4 xl:right-6"
        onClick={handleClick}
      />
    </div>
  );
}
