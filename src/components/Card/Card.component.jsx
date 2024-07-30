import React from "react";
import cardStyles from "./Card.module.css";
import Image from "next/image";

// MediaCard component to display an item's image, title, and a play button link
const MediaCard = ({ item }) => {
  return (
    <div className={cardStyles.cardItem}>
      {item ? (
        <>
          {/* Display item image */}
          <Image
            src={item.image}
            alt={item.title}
            className={cardStyles.cardImage}
            height={150}
            width={150}
          />
          
          {/* Display item details */}
          <div className={cardStyles.cardDetails}>
            <p className={cardStyles.cardTitle}>{item.title}</p>
            
            {/* Play button link */}
            <a
              className={cardStyles.cardPlayButton}
              href={`/show/${item.item_id}?play=true`}
            >
              <Image
                className={cardStyles.cardPlayIcon}
                src="https://d1l07mcd18xic4.cloudfront.net/static/play-outline.svg"
                alt="Play"
                width={10}
                height={10}
              />
            </a>
          </div>
        </>
      ) : (
        <>
          {/* Display message when no item is found */}
          <i>No Items Found</i>
        </>
      )}
    </div>
  );
};

export default MediaCard;
