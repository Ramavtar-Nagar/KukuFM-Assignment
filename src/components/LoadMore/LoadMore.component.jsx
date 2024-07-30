"use client";

import { fetchData } from "@/app/actions";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Carousel } from "..";

// Initial page number for fetching data
let page = 2;

// LoadingMore component for loading additional content when scrolled into view
const LoadingMore = ({ hasMorePages }) => {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(hasMorePages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetching data if more pages are available, element is in view, and not currently loading
    if (!hasMore || !inView || loading) return;

    setLoading(true); // Set loading state to true
    fetchData(2)
      .then((res) => {
        // Filtering new data items with valid shows array
        const newData = res.items.filter(
          (item) => Array.isArray(item.shows) && item.shows.length > 0
        );
        if (newData.length > 0) {
          // Updating data state with new data
          setData((prevData) => [...prevData, ...newData]);
          // Updating hasMore state based on response
          setHasMore(res.has_more);
          page++;
          setError(false);
        } else {
          // If no more data to load
          setHasMore(false);
        }
      })
      .catch(() => {
        // Setting error state to true if fetch fails
        setError(true);
      })
      .finally(() => {
        // Reseting loading state
        setLoading(false);
      });
  }, [inView, hasMore, loading]);

  return (
    <>
      <section>
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Render Carousel components for each data item */}
          {data?.map((item, index) => (
            <Carousel key={index} slide={item} />
          ))}
        </div>
        <div ref={ref} className="loading-container">
          {/* Loading indicator */}
          {loading && !error && (
            <div
              style={{
                margin: "1rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="loader"></span>
              <h3>Loading...</h3>
            </div>
          )}
          {/* Error message */}
          {error && <h3>Failed to load more data</h3>}
        </div>
      </section>
    </>
  );
};

export default LoadingMore;
