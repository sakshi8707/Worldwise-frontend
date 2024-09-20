import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Product.module.css";
import PageNav from "../Components/PageNav";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomArrow = ({ type, onClick }) => {
  const isNext = type === "next";
  return (
    <button
      onClick={onClick}
      className={`${styles.customArrow} ${isNext ? styles.next : styles.prev}`}
    >
      <FontAwesomeIcon
        icon={isNext ? faChevronRight : faAngleLeft}
        style={{ color: "#00c46a", fontSize: "26px" }}
        className={styles.iconSize}
      />
    </button>
  );
};

// Extracted Slide Component
const Slide = ({ imgSrc, title, text1, text2 }) => (
  <div className={styles.slide}>
    <section>
      <img src={imgSrc} alt={title} />
      <div className={styles.overlay}>
        <h2>{title}</h2>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </section>
  </div>
);

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <Carousel
        showStatus={false}
        renderArrowNext={(onClickHandler) => (
          <CustomArrow type="next" onClick={onClickHandler} />
        )}
        renderArrowPrev={(onClickHandler) => (
          <CustomArrow type="prev" onClick={onClickHandler} />
        )}
      >
        <Slide
          imgSrc="greenNature.jpg"
          title="Emerald Haven."
          text1="One traveler described this lush, green paradise as a hidden sanctuary, where nature's colors come alive in every direction, from the towering trees to the peaceful meadows."
          text2="The serenity of this place leaves you speechless, as you wander through the endless trails, surrounded by the gentle rustling of leaves and the crisp, fresh air."
        />

        <Slide
          imgSrc="imgFive.jpg"
          title="Golden Horizons."
          text1="A visitor once stood at the edge of the world, gazing at a sunset so golden it felt as if the sky was painted with strokes of fire and amber. Every evening here is a masterpiece."
          text2="As the sun dips below the horizon, the warmth lingers in the air, creating memories of peace and awe that last a lifetime."
        />

        <Slide
          imgSrc="imgFour.jpg"
          title="Majestic Peaks."
          text1="Adventurers have marveled at the grandeur of these towering mountains, their rugged silhouettes stretching into the sky. It's a place where the air is thin but the experience is breathtaking."
          text2="With every step, you feel the pulse of the earth beneath you, surrounded by cliffs and valleys that have stood the test of time, leaving you in awe of nature's power."
        />
      </Carousel>
    </main>
  );
}
