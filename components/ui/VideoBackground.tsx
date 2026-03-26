"use client";

import { useRef, useEffect, ReactNode } from "react";

interface Props {
    children: ReactNode;
    hlsSrc?: string;
    fallbackSrc?: string;
    saturation?: number;
    brightness?: number;
    overlay?: number;
    className?: string;
}

export default function VideoBackground({
    children,
    hlsSrc = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8",
    fallbackSrc = "/videos/Gradient-background.mp4",
    saturation = 0.3,
    brightness = 0.3,
    overlay = 0.5,
    className = "",
}: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = hlsSrc;
        } else {
            import("hls.js")
                .then(({ default: Hls }) => {
                    if (Hls.isSupported()) {
                        const hls = new Hls({ enableWorker: true });
                        hls.loadSource(hlsSrc);
                        hls.attachMedia(video);
                    }
                })
                .catch(() => {
                    video.src = fallbackSrc;
                });
        }
    }, [hlsSrc, fallbackSrc]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        filter: `saturate(${saturation}) brightness(${brightness})`,
                        top: "-20%",
                    }}
                />
                {/* Top fade */}
                <div
                    className="absolute top-0 left-0 right-0 z-[1]"
                    style={{ height: "200px", background: "linear-gradient(to bottom, #14181e, transparent)" }}
                />
                {/* Bottom fade */}
                <div
                    className="absolute bottom-0 left-0 right-0 z-[1]"
                    style={{ height: "200px", background: "linear-gradient(to top, #14181e, transparent)" }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 z-[1]" style={{ backgroundColor: `rgba(20, 24, 30, ${overlay})` }} />
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}