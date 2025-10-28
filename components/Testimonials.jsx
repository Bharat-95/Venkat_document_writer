// components/TestimonialsCarousel.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Sivaleela Kondeti",
    text: "Venkat Rao Garu has excellent knowledge with years of experience in documentation. He makes sure the entire process is smooth and hassle-free and very professional. He provides clear communication and reliable services. Highly recommended.",
  },
  {
    name: "Krishna Rajesh Malyala",
    text: "I was searching for a document writer in Hyderabad and found Venkat Rao's contact at the top of my Google search results. After reading his positive reviews, I decided to give him a call. From the very first conversation, I was impressed by his professionalism.",
  },
  {
    name: "Pankaj Jain",
    text: "Venkat Rao is an exceptionally knowledgeable and well-connected professional. His insights and influence in the field are fantastic, and he makes even complex documentation simple and clear. Most importantly, he is a genuine and trustworthy person.",
  },
  {
    name: "Pradeep Deepu",
    text: "Venkat Rao is a highly knowledgeable document writer with years of experience. He ensures the entire documentation process is smooth and hassle-free. His guidance is clear, and he handles legal paperwork with great accuracy.",
  },
  {
    name: "Nidhi Govil",
    text: "I highly recommend Mr. Venkat Rao for any property related matter. I had approached him after I failed to get answers from multiple advocates. He was the only one who resolved the issue quickly and efficiently.",
  },
  {
    name: "Bharath Sreevatsava",
    text: "Venkat Rao and his team are knowledgeable in document writing with years of experience. He has good contacts with registration officers and ensures the entire documentation process is smooth and quick.",
  },
  {
    name: "Malli Naani",
    text: "Glad to meet you sir. The structure of the documentation is intuitive and logically organized. The tone is professional, friendly, and user-focused. Great balance between technical accuracy and clarity.",
  },
  {
    name: "Bhushanam Pulagam",
    text: "I approached them through Google Maps for SPA and Gift Deed property. The clarification Mr. Venkat Rao gave on my first call impressed me. His team's assistance throughout the process was excellent.",
  },
  {
    name: "Phani Alapati",
    text: "I highly recommend P Venkat Rao garu regarding any property-related documentation or registration process. He and his staff are always available to clarify any queries and provide timely updates.",
  },
  {
    name: "Consult Uma",
    text: "We availed Venkat Rao Garu’s services. He has excellent knowledge and clear communication. His staff is very efficient. The whole process was seamless.",
  },
  {
    name: "Internet Identity",
    text: "Thanks a lot P Venkat Rao garu for getting our registration done very efficiently and at a reasonable cost. No money was charged until the work was done. Highly trustworthy.",
  },
  {
    name: "Sampath L",
    text: "We recently took Mr. Venkat Rao garu’s document writing services and can say he and his team are the most professional in this segment. Detailed analysis and confident explanations.",
  },
  {
    name: "Srinivas Cherla",
    text: "Straightforward and humble person. Provides good advice and timely delivery of service. Gets the job done right, even if it means extra effort.",
  },
  {
    name: "Swathi C",
    text: "We have availed Venkat Rao Garu's services for our property MODT and later for cancellation of Mortgage. Seamless process, no hidden charges, and on-time delivery.",
  },
  {
    name: "CS Murthy",
    text: "I first met P. Venkat Rao garu 16 years ago. His knowledge on registration matters is great. His friendly nature and helpful attitude make every experience positive.",
  },
  {
    name: "Harsha Gummadavelli",
    text: "I am glad to share this review about Venkat Rao garu. He provided excellent and timely service for our recent registration needs, even while I was overseas.",
  },
  {
    name: "Makarand Avhad",
    text: "I approached P Venkat Rao garu for MODT registration. He explained all details with patience. His team provides fast, reliable service near Moosapet registration office.",
  },
  {
    name: "Rama Krishna Jasty",
    text: "I reached out to P Venkat Rao garu for Power of Attorney work. He quickly shared all required forms and guided me efficiently. Highly recommended!",
  },
  {
    name: "Satish Nuvvula",
    text: "I approached Venkat Rao garu for my flat registration. His team was always available and ensured every document was properly verified. Excellent experience.",
  },
  {
    name: "Sumit Goyal",
    text: "Very professional service and friendly nature. It was very smooth working with Mr. Venkat Rao garu and his hospitable team.",
  },
  {
    name: "Jayadev Marreboyena",
    text: "P. Venkat Rao garu is excellent in document writing and registration work. I am very impressed with his professional approach.",
  },
  {
    name: "Ravikumar",
    text: "Venkat Rao garu offers genuine service with professionalism. Very responsive to client needs. Made my registration experience smooth and easy.",
  },
  {
    name: "V Sridhar Kalaga",
    text: "Great guidance and support received from Shri Venkat Rao at the Registrar Office, Moosapet. Very customer-friendly and understands clients’ needs well.",
  },
  {
    name: "Archana Sourav",
    text: "Approached Sri Venkat Rao & Team for creation of Agreement of Sale and Sale Registration. The team was cooperative and precise from drafting to registration.",
  },
  {
    name: "Sai Babu",
    text: "Mr. Venkat Rao is very knowledgeable and experienced. He completed my work quickly despite challenges. Experience truly matters in documentation.",
  },
  {
    name: "Seshagiri Devathi",
    text: "Venkat Rao is a professional document writer with a lot of experience. I always have a great experience using his services.",
  },
  {
    name: "Uma Sankar Reddy Vuyyuru",
    text: "Mr. Venkat Rao is very professional and experienced. He has deep knowledge and handles documentation with great care.",
  },
  {
    name: "Srinivas Srinaresh Irrinki",
    text: "I have used his services several times for land issues. His drafting skills are outstanding and legally precise. Highly recommended.",
  },
  {
    name: "Madhusudhan Reddy",
    text: "There’s no second thought — Venkat Rao garu and his team did a wonderful job for my registration. Thanks for your excellent service!",
  },
];

export default function TestimonialsCarousel() {
  const AUTOPLAY_MS = 3000;
  const TRANSITION_MS = 600;
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [transitionOn, setTransitionOn] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null); // index in slides array
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  // Update "visible" based on breakpoint
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // build slides with clones for smooth looping
  const slides = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, visible)];
  const slidesCount = slides.length;
  const containerWidthPercent = (slidesCount * 100) / visible;
  const itemWidthPercent = 100 / slidesCount;
  const translatePercent = -(index * itemWidthPercent);

  // autoplay helpers
  const clearAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const startAutoplay = () => {
    clearAutoplay();
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransitionOn(true);
    }, AUTOPLAY_MS);
  };

  // start autoplay and restart on visible change
  useEffect(() => {
    startAutoplay();
    return () => clearAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  // handle loop reset when transition ends
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onEnd = () => {
      if (index >= TESTIMONIALS.length) {
        // jump back to start without transition
        setTransitionOn(false);
        setIndex(0);
      }
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [index, visible]);

  // re-enable transition after a quick timeout when looped
  useEffect(() => {
    if (!transitionOn) {
      const t = setTimeout(() => setTransitionOn(true), 40);
      return () => clearTimeout(t);
    }
  }, [transitionOn]);

  // Hover / focus handlers: pause autoplay and highlight the hovered card
  const handleMouseEnter = (slideIdx) => {
    setHoveredIndex(slideIdx);
    setTransitionOn(false); // freeze transform while hovered
    clearAutoplay(); // stop timer
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setTransitionOn(true);
    // delay to avoid abrupt resume
    setTimeout(() => {
      if (!timerRef.current) startAutoplay();
    }, 120);
  };

  // Keyboard accessibility: focus behaves like hover
  const handleFocus = (slideIdx) => handleMouseEnter(slideIdx);
  const handleBlur = () => handleMouseLeave();

  return (
    <section className="w-full bg-[#0b0b09] text-white py-20 border-t border-[#1a1a1a]">
      <h3 className="text-center font-playfair text-3xl lg:text-4xl pb-10 text-[#d4a373] uppercase tracking-wide">
        Client Testimonials
      </h3>

      <div className="overflow-hidden w-full border-y border-white/50">
        <div
          ref={containerRef}
          className="flex border-l border-white/50"
          style={{
            width: `${containerWidthPercent}%`,
            transform: `translateX(${translatePercent}%)`,
            transition: transitionOn ? `transform ${TRANSITION_MS}ms ease` : "none",
          }}
        >
          {slides.map((s, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={i}
                role="button"
                tabIndex={0}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                onFocus={() => handleFocus(i)}
                onBlur={handleBlur}
                className={`flex-shrink-0 flex flex-col justify-center items-center text-center px-10 py-14 min-h-[360px] border-r border-white/10 bg-[#11110e] transition-all duration-300`}
                style={{
                  width: `${100 / slidesCount}%`,
                  transform: isHovered ? "scale(1.06) translateY(-6px)" : undefined,
                  zIndex: isHovered ? 40 : 10,
                  boxShadow: isHovered ? "0 18px 40px rgba(0,0,0,0.55)" : undefined,
                  transformOrigin: "center center",
                }}
              >
                <blockquote className="text-[18px] md:text-[20px] leading-relaxed text-neutral-200 italic mb-8">
                  “{s.text}”
                </blockquote>
                <p className="text-sm font-medium text-[#d4a373]">{s.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
