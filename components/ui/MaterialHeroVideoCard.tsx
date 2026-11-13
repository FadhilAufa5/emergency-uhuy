"use client";

import { useState, useRef } from "react";
import { Play, X, Video, AlertCircle, Sparkles } from "lucide-react";

interface MaterialHeroVideoCardProps {
  slug: string;
  title: string;
  bgColor?: string;
  categoryColor?: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export default function MaterialHeroVideoCard({
  slug,
  title,
  bgColor = "bg-red-light",
  categoryColor = "bg-red/10 text-red border-red/20",
  videoUrl,
  thumbnailUrl,
}: MaterialHeroVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setHasError(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Browser autoplay policy might require explicit user interaction which is already done here
        });
      }
    }, 50);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setHasError(false);
  };

  return (
    <div
      className={`w-full max-w-md rounded-3xl ${bgColor} p-3 sm:p-4 border border-ink/10 shadow-sm flex flex-col justify-between transition-all duration-300`}
    >
      {/* Video Viewport Container */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-inner group/video">
        {!isPlaying ? (
          // Thumbnail / Poster Preview State with Glowing Play Button
          <div
            onClick={handlePlay}
            className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center bg-white select-none"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handlePlay();
              }
            }}
            aria-label={`Putar Video Peragaan ${title}`}
          >
            {/* Foto Thumbnail yang Sudah Ada */}
            <img
              src={thumbnailUrl}
              alt={`Thumbnail Video ${title}`}
              loading="eager"
              className="w-full h-full object-contain transition-transform duration-700 group-hover/video:scale-105"
            />

            {/* Gradient Overlay for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 transition-opacity duration-300 group-hover/video:from-black/75" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
                Video Peragaan Praktik
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold border border-white/10">
                <Video className="w-3 h-3 text-white" />
                HD Video
              </span>
            </div>

            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/video:scale-110 active:scale-95 group-hover/video:bg-red-dark z-20">
              <span className="absolute inset-0 rounded-full bg-red opacity-75 animate-ping -z-10" />
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white text-xs drop-shadow-sm">
              <div className="flex items-center gap-1.5 line-clamp-1 pr-2">
                <Sparkles className="w-3.5 h-3.5 text-yellow shrink-0" />
                <span className="font-extrabold truncate">{title}</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-sm shrink-0">
                Putar Sekarang
              </span>
            </div>
          </div>
        ) : (
          // Active HTML5 Video Player
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            {hasError ? (
              <div className="p-6 text-center text-white flex flex-col items-center justify-center">
                <AlertCircle className="w-10 h-10 text-yellow mb-2" />
                <h4 className="text-sm font-bold">Video Peragaan Sedang Disiapkan</h4>
                <p className="text-[11px] text-white/70 mt-1 max-w-xs">
                  File video simulasi materi ini akan segera aktif. Silakan lihat kembali foto ilustrasi materi.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-4 px-3.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold transition-colors"
                >
                  Kembali ke Foto Ilustrasi
                </button>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  src={videoUrl}
                  poster={thumbnailUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                  onError={() => setHasError(true)}
                >
                  Browser Anda tidak mendukung tag video HTML5.
                </video>

                {/* Floating Close Button */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute top-2.5 right-2.5 z-20 px-2.5 py-1 rounded-xl bg-black/75 hover:bg-black/95 text-white text-[11px] font-bold backdrop-blur-md border border-white/20 transition-all flex items-center gap-1 shadow-lg cursor-pointer"
                  aria-label="Tutup Pemutar Video"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Tutup</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Card Info Footer */}
      <div className="mt-3 px-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-bold text-ink/80">
          <Video className="w-3.5 h-3.5 text-red" />
          <span>Panduan Visual First Responder</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-light">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Video Tersemat</span>
        </div>
      </div>
    </div>
  );
}

