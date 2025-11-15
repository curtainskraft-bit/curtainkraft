"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Star = ({ filled = true }) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${filled ? '' : 'opacity-30'}`}>
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" fill="currentColor" />
  </svg>
);

const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="h-6 w-6">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.826 31.911 29.276 35 24 35c-7.18 0-13-5.82-13-13s5.82-13 13-13c3.31 0 6.32 1.242 8.598 3.27l5.657-5.657C34.943 3.053 29.74 1 24 1 11.85 1 2 10.85 2 23s9.85 22 22 22 22-9.85 22-22c0-1.474-.152-2.91-.389-4.417z"/>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.818C14.54 16.13 18.922 13 24 13c3.31 0 6.32 1.242 8.598 3.27l5.657-5.657C34.943 6.053 29.74 4 24 4 16.318 4 9.66 8.337 6.306 14.691z"/>
    <path fill="#4CAF50" d="M24 46c5.18 0 9.86-1.977 13.42-5.2l-6.2-5.238C29.035 36.488 26.64 37 24 37c-5.242 0-9.807-3.337-11.41-7.987l-6.54 5.037C9.35 41.22 16.08 46 24 46z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303A12.01 12.01 0 0 1 24 37c-5.242 0-9.807-3.337-11.41-7.987l-6.54 5.037C9.35 41.22 16.08 46 24 46c12.15 0 22-9.85 22-22 0-1.474-.152-2.91-.389-4.417z"/>
  </svg>
);

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}

function Avatar({ name, avatar }) {
  if (avatar) {
    return <img src={avatar} alt={name} className="h-14 w-14 rounded-full object-cover" />;
  }
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="h-14 w-14 rounded-full bg-emerald-700 text-white grid place-items-center text-2xl font-semibold">
      {initial}
    </div>
  );
}

const REVIEWS = [
  {
    name: "Hameed Moolur",
    subtitle: "Local Guide · 13 reviews",
    time: "a week ago",
    isNew: true,
    rating: 5,
    text: `I recently visited Casa Kraft’s showroom, and it was an amazing experience! The moment I walked in, I was impressed by the elegant interiors and the beautifully designed display models. Each setup was thoughtfully arranged and truly eye‑catching — it made me say “wow!”\n\nThe team at Casa Kraft was very welcoming and professional, taking time to explain their design concepts and materials. You can clearly see their creativity and passion for design in every corner of the showroom.\n\nI highly recommend Casa Kraft for anyone eager to transform their home or commercial space into a truly stunning and stylish environment. A fantastic interior design experience awaits here!`,
  },
  {
    name: "Mohammed Azeem",
    subtitle: "Local Guide · 14 reviews · 1 photo",
    time: "3 months ago",
    rating: 5,
    title: "Casa Kraft – A True Destination for Modern Luxury Living",
    text: `Stepping into Casa Kraft feels like stepping into a world of refined elegance and cutting‑edge design. This interior design showroom truly understands the essence of modern, sophisticated living. Whether you're looking to transform a single room or your entire home, Casa Kraft offers everything you need to create a luxurious space that reflects style and comfort.`,
  },
  {
    name: "Anas Vallapuzha",
    subtitle: "3 reviews",
    time: "5 months ago",
    rating: 5,
    text: `I recently hired CASA KRAFT for my home interior design project, and I’m thrilled with the results! Their team was professional, creative, and attentive to my needs from start to finish. They transformed my space into something beautiful and functional, exceeding all my expectations.`,
  },
  {
    name: "Sadhiq Muhammed",
    subtitle: "2 reviews · 1 photo",
    time: "3 months ago",
    rating: 5,
    text: `I had a very positive experience with CasaCraft Interior and Decoration LLC. Their team was professional, creative, and highly organized throughout the entire project. They took the time to understand our requirements and delivered a design that was both elegant and functional.`,
  },
  {
    name: "Sayed Mohammed Arfath",
    subtitle: "Local Guide · 14 reviews · 50 photos",
    time: "6 months ago",
    rating: 5,
    text: `Showroom looks absolutely stunning! The designs are modern, creative and truly inspiring. If you’re planning a home or office renovation, this is the place to start. The attention to detail and professional approach really set them apart. A must visit for anyone looking to transform their space!`,
  },
  {
    name: "Salim Noori",
    subtitle: "7 reviews",
    time: "6 months ago",
    rating: 5,
    text: `Surely a go to destination for all your home decor solutions. Modern designs, highly professional approach paying detailed attention to the customer needs. Mr. Ashraf has vast skills and workmanship is highly detailed.`,
  },
  {
    name: "Mashook Muloor",
    subtitle: "7 reviews",
    time: "2 months ago",
    rating: 5,
    text: `Excellent Finishing, The quality of finishes is neat, precise, and professionally executed. Thank you`,
  },
];

function ReviewCard({ review }) {
  const collapsedHeight = 168; // ~7 lines at 17px size; adjust if you want
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    if (pRef.current) {
      const el = pRef.current;
      setIsOverflowing(el.scrollHeight > collapsedHeight + 4);
    }
  }, []);

  return (
    <article className="relative rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 text-left">
      <div className="absolute right-5 top-5">
        <GoogleG />
      </div>
      <div className="flex items-center gap-4">
        <Avatar name={review.name} avatar={review.avatar} />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.subtitle}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3 text-sm">
        <Stars rating={review.rating} />
        <span className="text-gray-500">{review.time}</span>
        {review.isNew && (
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-800">NEW</span>
        )}
      </div>
      {review.title && <p className="mt-3 font-semibold italic text-gray-900">{review.title}</p>}

      <div className="relative mt-4">
        <p
          ref={pRef}
          className="text-gray-800 whitespace-pre-line leading-7 text-[17px] transition-[max-height] duration-300 ease-in-out overflow-hidden"
          style={{ maxHeight: expanded ? "none" : collapsedHeight }}
        >
          {review.text}
        </p>
        {!expanded && isOverflowing && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      {isOverflowing && (
        <button
          className="mt-4 text-emerald-700 font-medium underline underline-offset-4 hover:no-underline"
          onClick={() => setExpanded((s) => !s)}
          aria-label={expanded ? "Show less" : "Read more"}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
}

export default function TestimonialsWidget() {
  // Uniform card height (px) — tweak as needed
  const CARD_HEIGHT = 360;

  return (
    <section id="testimonials" className="bg-[#193c38] py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-conthrax tracking-widest text-xl sm:text-2xl mb-10">
          OUR CLIENT REVIEWS
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {REVIEWS.map((review, i) => (
            <SwiperSlide key={i}>
              <ReviewCardUniform review={review} cardHeight={CARD_HEIGHT} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// New uniform-height card variant
function ReviewCardUniform({ review, cardHeight }) {
  const collapsedHeight = 160; // controls visible text height (px)
  const [expanded, setExpanded] = React.useState(false);
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const pRef = React.useRef(null);

  React.useEffect(() => {
    if (pRef.current) {
      const el = pRef.current;
      setIsOverflowing(el.scrollHeight > collapsedHeight + 4);
    }
  }, []);

  return (
    <article
      className="relative rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 text-left flex flex-col"
      style={{ height: cardHeight }}
    >
      {/* Google badge */}
      <div className="absolute right-5 top-5">
        <GoogleG />
      </div>

      {/* Header */}
      <div className="flex items-center gap-4">
        <Avatar name={review.name} avatar={review.avatar} />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.subtitle}</p>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-3 flex items-center gap-3 text-sm">
        <Stars rating={review.rating} />
        <span className="text-gray-500">{review.time}</span>
        {review.isNew && (
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-800">NEW</span>
        )}
      </div>

      {review.title && (
        <p className="mt-3 font-semibold italic text-gray-900">{review.title}</p>
      )}

      {/* Body (flex-1 makes it fill available height) */}
      <div className="relative mt-4 flex-1 overflow-hidden">
        <p
          ref={pRef}
          className={`text-gray-800 whitespace-pre-line leading-7 text-[17px] transition-[max-height] duration-300 ease-in-out overflow-hidden ${
            expanded ? "max-h-full" : ""
          }`}
          style={{ maxHeight: expanded ? "none" : collapsedHeight }}
        >
          {review.text}
        </p>
        {!expanded && isOverflowing && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />)
        }
      </div>

      {/* Footer (button pinned bottom) */}
      {isOverflowing && (
        <button
          className="mt-4 text-emerald-700 font-medium underline underline-offset-4 hover:no-underline"
          onClick={() => setExpanded((s) => !s)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
}
