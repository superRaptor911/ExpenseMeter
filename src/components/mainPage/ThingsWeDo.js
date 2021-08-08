import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {StaticImage} from 'gatsby-plugin-image';
import {COLORS} from '../../styles/Colors';
import {Link} from 'gatsby';

const ThingsWeDo = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.itemContainer)}>
        <StaticImage
          src="../../images/icons/heartIcon.png"
          alt="heartIcon"
          className={css(styles.icon)}
        />
        <p className={css(styles.title)}>Networking</p>
        <p className={css(styles.text)}>
          Bibendum etiam nec massa ok ok bendum etiam nec massa ok ok posuere
          neque diam. Mattis molestie feugiat nisi.
        </p>

        <Link to="/" className={css(styles.link)}>
          Read More
          <i className="ri-arrow-right-line" style={{marginLeft: 6}}></i>
        </Link>
      </div>

      <div className={css(styles.itemContainer)}>
        <StaticImage
          src="../../images/icons/flagIcon.png"
          alt="heartIcon"
          className={css(styles.icon)}
        />
        <p className={css(styles.title)}>Skill Enhancement</p>
        <p className={css(styles.text)}>
          Bibendum etiam nec massa ok ok bendum etiam nec massa ok ok posuere
          neque diam. Mattis molestie feugiat nisi.
        </p>

        <Link to="/" className={css(styles.link)}>
          Read More
          <i className="ri-arrow-right-line" style={{marginLeft: 6}}></i>
        </Link>
      </div>

      <div className={css(styles.itemContainer)}>
        <StaticImage
          src="../../images/icons/cpuIcon.png"
          alt="heartIcon"
          className={css(styles.icon)}
        />
        <p className={css(styles.title)}>Development</p>
        <p className={css(styles.text)}>
          Bibendum etiam nec massa ok ok bendum etiam nec massa ok ok posuere
          neque diam. Mattis molestie feugiat nisi.
        </p>

        <Link to="/" className={css(styles.link)}>
          Read More
          <i className="ri-arrow-right-line" style={{marginLeft: 6}}></i>
        </Link>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    marginLeft: 80,
    marginRight: 80,
    marginTop: 72,
    justifyContent: 'space-evenly',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 350,
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '29px',
    textAlign: 'center',
    color: COLORS.primary,
    marginTop: 20,
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '152%',
    textAlign: 'center',
    color: COLORS.primary,
    marginTop: 24,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '30px',
    textAlign: 'center',
    textDecoration: 'none',
    color: COLORS.secondary,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default ThingsWeDo;
