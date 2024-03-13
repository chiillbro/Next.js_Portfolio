// import Image from "next/image";

// import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      {/* <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      /> */}

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-8 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            unleash the ultimate Goku
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Enter the sacred circle, warriors of the Z-Fighters! Let your energy
            surge as you weave your words into the very fabric of the cosmos.
            Whether your quest is to forge alliances, unlock the mysteries of
            the universe, or simply share tales of epic battles, your messages
            are cherished scrolls within the realm of Kami's Lookout. With the
            power of the Dragon Balls coursing through you, transmit your
            missives through the ethereal network and await the echo of magic in
            response. For every message sent is a beacon of hope, a testament to
            the indomitable spirit of Goku and his comrades!
          </p>
        </div>
      </article>

      <Form />
    </>
  );
}
