import Image from "next/image";

export default function Home() {

  const gallery  = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png']


  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <div className="bg-secondary-500 snap-start h-screen flex items-center justify-between">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex justify-end">
              <Image
                src={"/images/new-banner.png?v2"}
                alt="banner"
                width={600}
                height={975}
              />
            </div>
            <div className="space-y-10 flex-1">
              <div className="text-9xl flex flex-col text-center text-primary-500">
                <span>Mert</span>
                <span>&</span>
                <span>Sinem</span>
              </div>
              <div className="flex justify-center">
                <button className="btn-border">Fotoğraflar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-300 snap-start h-screen flex items-center justify-between">
        <div className="container space-y-16 flex flex-col items-center justify-center">
          <Image
            src={"/images/flowers-banner.png?v2"}
            alt="banner"
            width={600}
            height={975}
          />
          <p className="text-8xl max-w-96 text-primary-500 font-medium text-center">
            A love that bloomed.
          </p>
          <p className="text-primary-500 text-2xl max-w-96 text-center">
            We&apos;ve known each other all our lives, best friends through
            thick and thin. After decades of romantic mishaps and being each
            other&apos;s shoulder to cry on, we realized that The One had been
            right in front of us all along.
          </p>
        </div>
      </div>
      <div className="container snap-start h-screen">
        <div className="grid grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div key={index} className="block relative h-[300px]">
              <Image src={`/images/gallery/${item}`} alt={item} fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
