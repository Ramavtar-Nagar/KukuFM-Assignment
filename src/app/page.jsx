"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { fetchData } from "./actions";
import { Carousel, Header, LoadMore, Footer } from "@/components";

// Home component for the main page
export default function Home() {
  const [slides, setSlides] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Fetch initial data when the component mounts
    const fetchInitialData = async () => {
      const initialData = await fetchData();
      
      // Filter items to include only those with a non-empty 'shows' array
      const filteredData = initialData.items.filter(
        (item) => Array.isArray(item.shows) && item.shows.length > 0
      );
      
      // Extract banners from the initial data
      const banners = initialData.items.find(
        (item) => item.type === "banner"
      ).banners;

      setFilteredItems(filteredData);
      setSlides(banners);
      setHasMore(initialData.has_more || false);
    };
    fetchInitialData();
  }, []);

  return (
    <main className={styles.container}>
      {/* Header section */}
      <div className={styles.header}>
        <Header />
      </div>
      
      {/* Carousel for displaying banner slides */}
      <Carousel slide={slides} />
      
      {/* Main content section */}
      <section className={styles.main}>
        {/* Render a carousel for each filtered item */}
        {filteredItems?.map((item, index) => (
          <Carousel key={index} slide={item} />
        ))}
        {/* Load more component to handle pagination */}
        <LoadMore hasMorePages={hasMore} />
      </section>
      
      {/* Footer section */}
      <Footer />
    </main>
  );
}
