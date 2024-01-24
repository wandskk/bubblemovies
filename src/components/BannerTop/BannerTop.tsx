import SearchBar from "../SearchBar/SearchBar";
import styles from "../../styles/BannerTop/BannerTop.module.scss";

const BannerTop = () => {
  return (
    <section className={styles.bannerTop}>
      <div className={`container ${styles.bannerTop__content}`}>
        <SearchBar />
      </div>
    </section>
  );
};

export default BannerTop;
