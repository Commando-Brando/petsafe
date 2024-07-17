import Link from "next/link";

const mockImageUrls = [
  "https://utfs.io/f/5cc77d50-20d2-473e-87bf-017c56bb132a-dc6y0e.jpg",
  "https://utfs.io/f/1b983e3c-ccf8-4c88-a3a9-91e026a099a6-aibqc0.jpg",
  "https://utfs.io/f/4c007f63-4ec2-4c14-b3b3-2625fe78b58c-n2ku9m.050061333bfafb9501cef668d3033388.jpeg"
]

const mockImages = mockImageUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      {/* flex wrap means it wont stop with one row and will make multiple rows*/}
      {/* Gap adds spacing between images  */}
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
