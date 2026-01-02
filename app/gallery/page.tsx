"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";

const galleryImages = [
  { src: "/images/orbit.png", alt: "Harmony Living Building Exterior", category: "Building" },
  { src: "/images/drone.png", alt: "Pramukh Anand Building", category: "Building" },
  { src: "/images/2bed.jpeg", alt: "Double Sharing Room", category: "Rooms" },
  { src: "/images/3bed.jpeg", alt: "Triple Sharing Room", category: "Rooms" },
  { src: "/images/4bed.jpeg", alt: "Four Sharing Room", category: "Rooms" },
  { src: "/images/1.png", alt: "Night View", category: "Building" },
  { src: "/images/2.png", alt: "Corridor", category: "Common Areas" },
  { src: "/images/washroom.png", alt: "Clean Washroom Facilities", category: "Facilities" },
  { src: "/images/common3.png", alt: "Water Cooler", category: "Facilities" },
  { src: "/images/common2.png", alt: "Lift", category: "Facilities" },
  { src: "/images/balcony.png", alt: "Balcony", category: "Rooms" },
  { src: "/images/kitchen.png", alt: "Mess Area", category: "Common Areas" },
];

const categories = ["All", "Rooms", "Common Areas", "Building", "Facilities"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Photo Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              Take a virtual tour of our facilities. See our rooms, common areas, and amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-secondary-foreground font-medium">{image.alt}</p>
                    <p className="text-secondary-foreground/70 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-secondary-foreground hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Pictures Don't Do It Justice
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Schedule a visit to experience the Harmony Living difference in person. We'd love to show you around!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;