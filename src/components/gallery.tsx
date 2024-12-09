import Image from "next/image";

const images = [
 "/livingroom.jpg?height=400&width=600",
  "/dapur.jpg?height=400&width=600",
  "/front2.jpg?height=400&width=600",
  "/bedroom.jpg?height=400&width=600",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-4 md:px-8">
      <h2 className="text-3xl text-black font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {images.map((src, index) => (
          <div key={index} className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { Gallery };
