'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function MichibataOnBlackPage() {
    const imageCount = 23
    const images = Array.from({ length: imageCount }, (_, i) => `/works/mob/mob_books/mob_book${i + 1}.png`)

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const showPrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
        }
    }

    const showNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length)
        }
    }

    return (
        <div className="mx-auto px-6 py-6 space-y-6">
            
            <p className="text-gray-500 leading-relaxed">
            <strong>冊子</strong>
            <br />
            </p>
        
            <div className="relative mx-auto w-full">
                {images.map((src, index) => (
                    <div key={index} className="relative w-full">
                        <Image
                            src={src}
                            alt={`Page ${index + 1}`}
                            width={1684}
                            height={595}
                            className="object-contain w-full h-auto border border-gray-200 mb-6 hover:scale-103 transition-transform duration-200"
                            onClick={() => setSelectedIndex(index)}
                        />
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
                    onClick={() => setSelectedIndex(null)}
                >
                    <div className="w-full px-20" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={images[selectedIndex]}
                            alt="拡大画像"
                            width={3000}
                            height={2000}
                            className="w-full h-auto shadow-lg"
                        />
                        
                        {/* 左矢印 */}
                        <button
                        onClick={showPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow"
                            >
                            ←
                        </button>

                        {/* 右矢印 */}
                        <button
                            onClick={showNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow"
                            >
                            →
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}