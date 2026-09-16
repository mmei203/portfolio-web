import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {/* HERO SECTION */}
      <div className="p-10 container mx-auto flex lg:flex-row gap-4 flex-col min-h-screen min-w-screen border-t border-black">
        <div className="lg:text-8xl text-5xl font-bold basis-3/3 flex flex-col">
          <h1>Lorem, ipsum,</h1>
          <h1>ATMINT JOMOK</h1>
        </div>
        <div className="basis-1/2 flex flex-col justify-center gap-4">
          <div className="px-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ad nam nihil incidunt non voluptatem neque quisquam praesentium maxime velit nostrum inventore odio ex consectetur ducimus totam maiores exercitationem pariatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ad nam nihil incidunt non voluptatem neque quisquam praesentium maxime velit nostrum inventore odio ex consectetur ducimus totam maiores exercitationem pariatur.</p>
          </div>
          <div className="flex flex-col">
            <Link href='/'>
              <Button variant="ghost" className="py-6 text-xl lg:text-2xl font-bold flex items-center rounded-md hover:bg-primary hover:text-white">Lihat Project <ArrowRight className="size-5"/></Button>
            </Link>
            <Link href='/'>
              <Button variant="ghost" className="py-6 text-xl lg:text-2xl font-bold flex items-center rounded-md hover:bg-primary hover:text-white">Hubungi Saya <ArrowRight className="size-5"/></Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="p-5 lg:p-20 mx-auto flex flex-col lg:flex-row min-h-screen border-t border-black">
        <div className="flex basis-4/3 invisible lg:visible">
          <h1 className="lg:text-9xl font-bold">01</h1>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">Tentang Saya</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab dolore optio soluta et atque facere totam aperiam possimus eos beatae, id assumenda magni vero unde, sit vitae ipsam velit?</p>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-0">
            <div className="border-black border">
              <Image src="https://placehold.co/600x400/png" alt="image placeholder" width="400" height="300"/>
              <div className="p-5">
                <h2 className="text-2xl font-bold">Foto & Biografi</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dignissimos quod suscipit unde voluptatem, similique in adipisci nobis necessitatibus porro!</p>
              </div>
            </div>
            <div className="border-black border">
              <div className="p-5">
                <h2 className="text-2xl font-bold">Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dignissimos quod suscipit unde voluptatem, similique in adipisci nobis necessitatibus porro!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT SECTION */}
      <div className="p-5 lg:p-20 mx-auto flex flex-col lg:flex-row min-h-screen border-t border-black">
        <div className="flex basis-4/3 invisible lg:visible">
          <h1 className="lg:text-9xl font-bold">02</h1>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">Project Saya</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab dolore optio soluta et atque facere totam aperiam possimus eos beatae, id assumenda magni vero unde, sit vitae ipsam velit?</p>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-0">
            <div className="border-black border">
              <Image src="https://placehold.co/600x400/png" alt="image placeholder" width="400" height="300"/>
              <div className="p-5">
                <h2 className="text-2xl font-bold">Foto & Biografi</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dignissimos quod suscipit unde voluptatem, similique in adipisci nobis necessitatibus porro!</p>
              </div>
            </div>
            <div className="border-black border">
              <Image src="https://placehold.co/600x400/png" alt="image placeholder" width="400" height="300"/>
              <div className="p-5">
                <h2 className="text-2xl font-bold">Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dignissimos quod suscipit unde voluptatem, similique in adipisci nobis necessitatibus porro!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="p-5 lg:p-20 mx-auto flex flex-col lg:flex-row min-h-screen border-t border-black">
        <div className="flex basis-4/3 invisible lg:visible">
          <h1 className="lg:text-9xl font-bold">03</h1>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">Pengalaman</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab dolore optio soluta et atque facere totam aperiam possimus eos beatae, id assumenda magni vero unde, sit vitae ipsam velit?</p>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-0">
            <div className="border-black border">
              <Image src="https://placehold.co/600x400/png" alt="image placeholder" width="400" height="300"/>
              <div className="p-5">
                <h2 className="text-2xl font-bold">Foto & Biografi</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dignissimos quod suscipit unde voluptatem, similique in adipisci nobis necessitatibus porro!</p>
              </div>
            </div>
            <div className="border-black border">
              <Image src="https://placehold.co/600x400/png" alt="image placeholder" width="400" height="300"/>
              <div className="p-5">
                <h2 className="text-2xl font-bold">Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dignissimos quod suscipit unde voluptatem, similique in adipisci nobis necessitatibus porro!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="p-5 lg:p-20 mx-auto flex flex-col lg:flex-row min-h-screen border-t border-black">
        <div className="flex basis-4/3 invisible lg:visible">
          <h1 className="lg:text-9xl font-bold">04</h1>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">Hubungi Saya</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab dolore optio soluta et atque facere totam aperiam possimus eos beatae, id assumenda magni vero unde, sit vitae ipsam velit?</p>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-0">
            <div className="border-black border">
              <Image src="https://placehold.co/600x400/png" alt="image placeholder" width="400" height="300"/>
              <div className="p-5">
                <h2 className="text-2xl font-bold">Foto & Biografi</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dignissimos quod suscipit unde voluptatem, similique in adipisci nobis necessitatibus porro!</p>
              </div>
            </div>
            <div className="border-black border">
              <Image src="https://placehold.co/600x400/png" alt="image placeholder" width="400" height="300"/>
              <div className="p-5">
                <h2 className="text-2xl font-bold">Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dignissimos quod suscipit unde voluptatem, similique in adipisci nobis necessitatibus porro!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
