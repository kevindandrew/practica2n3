import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-[#f6f3fc]">
        <div className="flex flex-col md:flex-row justify-center h-96 bg-[#f6f3fc]">
          <div className="text-center w-full md:w-1/2 mt-24">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Bootstrap 5 Theme
            </h1>
            <h3 className="text-2xl md:text-4xl font-light text-gray-600 mt-2">
              crafted by <strong>Theme Wagon</strong>
            </h3>
            <p className="mt-4 text-gray-600 max-w-md mx-auto text-left">
              ThemeWagon offers a wide array of category-oriented <br />
              Free and Premium Bootstrap HTML Templates and Themes.
            </p>
            <button className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded hover:from-purple-700 hover:to-blue-700">
              Check Demo
            </button>
          </div>
          <div className="hidden md:flex md:w-1/2 justify-center">
            <Image
              src="/assets/images/2.home/illustration1.png"
              alt="Descripción de la imagen"
              width={800}
              height={326}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-16 w-full items-center justify-center mt-10">
          {['google', 'netflix', 'microsoft', 'mailbuster', 'themewagon'].map((brand) => (
            <Image
              key={brand}
              src={`/assets/images/2.home/${brand}.png`}
              alt={`Descripción de la imagen de ${brand}`}
              width={100}
              height={50}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </>
  );
}
