import config from "@/config/config";
import { Clock, Navigation as NavigationIcon, MapPin, CalendarCheck, Phone, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion';
import { formatEventDate } from "@/lib/formatEventDate";

export default function Location() {
return (
    <div className="text-center px-6 sm:px-10 pt-24 relative overflow-hidden">
        {/* Title with static heart */}
        <h2 className="text-3xl font-serif text-rose-600 flex items-center justify-center gap-2 relative z-10">
            Thank You <span className="text-2xl">❤️</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed relative z-10">
            We look forward to celebrating this special moment with you.
        </p>

        {/* Bottom hearts container */}
        <div className="mt-6 relative h-10">
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className="absolute text-2xl animate-bottomHeart"
                    style={{
                        left: `${i * 18 + 10}%`,
                        animationDelay: `${i * 0.4}s`,
                        color: ["#F43F5E", "#FB7185", "#F472B6"][i % 3],
                    }}
                >
                    ❤️
                </span>
            ))}
        </div>

        <style jsx>{`
            @keyframes bottomHeart {
                0% { transform: translateY(20px) scale(0.8); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateY(-30px) scale(1); opacity: 0; }
            }
            .animate-bottomHeart {
                animation: bottomHeart 3s linear infinite;
            }
        `}</style>
    </div>
)
}