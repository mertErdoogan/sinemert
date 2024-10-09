"use client"
import {  Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const gallery = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "15.jpeg",
  ];
  const [isOpen, setIsOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleDownload = () => {
    // Resmin URL'sini tanımlayın
    if(!selectedImage) return null
    const imageUrl = `/images/gallery/${selectedImage}`; // public klasöründe bulunan resim

    // Link oluşturun
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = selectedImage; // İndirilirken dosya adı
    document.body.appendChild(link);
    link.click(); // Linke tıklayın
    document.body.removeChild(link); // Linki kaldırın
  };
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <div className="bg-secondary-500 snap-start h-screen flex items-center justify-between">
        <div className="container">
          <div className="flex md:flex-row flex-col md:py-0 py-16 items-center justify-between">
            <div className="flex-1 flex justify-end">
              <Image
                src={"/images/new-banner.png?v2"}
                alt="banner"
                width={600}
                height={975}
              />
            </div>
            <div className="space-y-10 flex-1">
              <div className="text-5xl md:text-9xl flex flex-col text-center text-primary-500">
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
      <div className="container  snap-start h-screen">
        <div className="grid grid-cols-2 md:px-0 px-4 md:grid-cols-4 gap-4 max-h-screen overflow-y-auto">
          {gallery.map((item, index) => (
            <button onClick={() => {
              setSelectedImage(item);
              setIsOpen(true);
            }} key={index} className="block relative h-[190px] md:h-[300px]">
              <Image objectFit="cover" src={`/images/gallery/${item}`} alt={item} fill />
            </button>
          ))}
        </div>
        {selectedImage && (
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/80 flex p-10 w-screen h-screen items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={`/images/gallery/${selectedImage}`}
                  alt={"qwerqwer"}
                  objectFit="contain"
                  layout="fill"
                  quality={100}
                />
                <div className="absolute bg-black/20 w-full flex items-center justify-center h-24 bottom-0 left-2/4 -translate-x-2/4 ">
                  <button onClick={handleDownload} className="text-lg font-bold text-white bg-blue-500 rounded-full px-8 py-2 hover:shadow">
                    İNDİR
                  </button>
                </div>
                <button
                  className="text-2xl text-white absolute right-0 z-20"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
}
