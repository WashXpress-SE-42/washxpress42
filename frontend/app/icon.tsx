import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56">
                {/* Subtle glow behind */}
                <rect x="4" y="6" width="48" height="48" rx="13" fill="#0ea5e9" opacity="0.25" />
                {/* Main square */}
                <rect x="2" y="4" width="48" height="48" rx="13" fill="#0369a1" />
                {/* Gloss shine */}
                <rect x="2" y="4" width="48" height="24" rx="13" fill="#ffffff" opacity="0.1" />

                {/* W mark — 4 strokes, tight geometry */}
                <path d="M11 16 L17 38" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <path d="M17 38 L23 23" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <path d="M23 23 L29 38" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <path d="M29 38 L35 16" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />

                {/* Water drop — top right, clean teardrop bezier */}
                <path
                    d="M44 9 C44 9 39 17 39 21 C39 24.3 41.2 27 44 27 C46.8 27 49 24.3 49 21 C49 17 44 9 44 9 Z"
                    fill="white"
                    opacity="0.95"
                />
                {/* Drop inner highlight */}
                <ellipse cx="42.2" cy="19.5" rx="1.2" ry="1.8" fill="white" opacity="0.45" transform="rotate(-15 42.2 19.5)" />
            </svg>
        ),
        {
            width: 56,
            height: 56,
        }
    )
}
