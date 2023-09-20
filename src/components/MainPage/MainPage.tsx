import ImagesList from "./ImagesList";

export default function MainPage() {
  return (
    <div className="px-4 text-center msm:px-8 md:w-11/12 md:mx-auto">
      <h1 className="font-bold text-2xl text-rosewood mt-8 mb-4 md:text-3xl lg:text-4xl">
        Welcome to Imagery
      </h1>
      <p className="text-center">
        Check out this elite collection of Album Covers and rearrange them in
        the order you see fit.
      </p>
      <div className="py-16">
        <ImagesList />
      </div>
    </div>
  );
}
