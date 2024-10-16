import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#f6f3fc] p-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold text-3xl text-center mb-5">What our clients have to say</h1>
          <p className="px-20 mx-60 text-center text-sm mb-12">
            Our success is determined on how satisfied our customers are with the
            <br />
            service. These reviews say we have stuff to do.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/assets/images/8.testimonial/image1.png"
            alt="Client Testimonial"
            width={400} 
            height={300}
          />
          <div className="flex flex-col gap-6 ml-16">
            <Image
              src="/assets/images/8.testimonial/cita.png"
              alt="Cita"
              width={150}
              height={150}
              className="rotate-180"
            />
            <h2 className="text-purple-500 font-semibold text-3xl">Outstanding!!</h2>
            <p className="text-gray-500">
              I just wanted to drop you a little email to say thank you for all your hard work.
              <br />
              I'm delighted I chose you as my partner. Your websites are quite simple to edit.
              <br />
              and maintain, which is fantastic.
            </p>
            <div className="flex mt-5 gap-3">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFD700"
                  viewBox="0 0 24 24"
                  stroke="#FFD700"
                  strokeWidth="1.5"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              ))}
            </div>
            <p>
              <strong>Daniel Lane, </strong>Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
