import React from "react";
import styles from "../css/PartnerBrands.module.css";

// Replace these URLs with your actual partner brand logo image URLs
const brands = [
  { name: "Zomato", logo: "https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo-768x432.png" },
  { name: "Coco Cola", logo: "https://www.freepnglogos.com/uploads/coca-cola-png/coca-cola-logopedia-fandom-powered-wikia-13.png" },
  { name: "Swiggy", logo: "https://svgmix.com/uploads/62e52c-swiggy-logo.svg" },
  { name: "Nestle", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtn2iTpqPjcdm5E85Lf6jNqy8V7ah7T0hQg&s" },
  { name: "Pepsico", logo: "https://download.logo.wine/logo/Pepsi/Pepsi-Logo.wine.png" },
  { name: "BigBasket", logo: "https://imagekit.io/blog/content/images/2021/03/Big-basket-01.png" },
  { name: "Blinkit", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbp-C1-hpTvVKe-9sqWQt8OivDdObwn7TLPw&s" },
  { name: "Zepto", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/1200px-Zepto_Logo.svg.png" },
];

export default function PartnerBrands() {
  return (
    <section className={styles.partnerSection}>
      <h2 className={styles.title}>Our Partner Brands</h2>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          {[...brands, ...brands].map((brand, i) => (
            <span className={styles.brandLogo} key={i}>
              <img
                src={brand.logo}
                alt={brand.name}
                className={styles.logoImg}
                title={brand.name}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}