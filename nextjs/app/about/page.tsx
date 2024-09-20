import Image from "next/image";
import image1 from "/public/about-1.jpg";
import image2 from "/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

const page = async() => {
  const cabins = await getCabins();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-4 gap-y-12 lg:gap-x-24 lg:gap-y-32 text-lg items-center p-4 lg:p-0">
      {/* Text content on large screens spans 3 columns, but on small screens it takes full width */}
      <div className="col-span-1 lg:col-span-3">
        <h1 className="text-3xl lg:text-4xl mb-4 lg:mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-4 lg:space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real freedom
            and peace you&apos;ll find in the surrounding mountains. Wander
            through lush forests, breathe in the fresh air, and watch the stars
            twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      {/* Image container for large and small screens */}
      <div className="col-span-1 lg:col-span-2">
        <Image
          src={image1}
          placeholder="blur"
          alt="Family sitting around a fire pit in front of cabin"
          className="w-full h-auto"
        />
      </div>

      {/* Second image container */}
      <div className="col-span-1 lg:col-span-2 relative">
        <Image
          src={image2}
          placeholder="blur"
          alt="Family that manages The Wild Oasis"
          className="w-full h-auto"
        />
      </div>

      {/* Managed by family section */}
      <div className="col-span-1 lg:col-span-3">
        <h1 className="text-3xl lg:text-4xl mb-4 lg:mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-4 lg:space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-6 py-4 lg:px-8 lg:py-5 text-primary-800 text-md lg:text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
