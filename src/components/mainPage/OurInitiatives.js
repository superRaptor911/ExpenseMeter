import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {StaticImage} from 'gatsby-plugin-image';
import {COLORS} from '../../styles/Colors';

const OurInitiatives = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.itemContainer)}>
        <StaticImage
          src="../../images/roboMan.png"
          alt="robot"
          className={css(styles.img)}
        />

        <div className={css(styles.space)} />
        <div className={css(styles.textContainer)}>
          <p className={css(styles.heading)}>Id vel varius mauris morbi quis</p>
          <p className={css(styles.text)}>
            In dignissim ut tortor quam. In et convallis suspendisse vel. Urna,
            ante ut mauris, dolor interdum libero, proin accumsan, vitae. In
            risus sit convallis volutpat.
          </p>

          <ul className={css(styles.text)}>
            <li>GG wp nt</li>
            <li>Doom slayer</li>
            <li>For the emperor</li>
          </ul>
          <button className={css(styles.button)}>Live Demo</button>
        </div>
      </div>

      <div className={css(styles.itemContainer)}>
        <div className={css(styles.textContainer)}>
          <p className={css(styles.heading)}>Id vel varius mauris morbi quis</p>
          <p className={css(styles.text)}>
            In dignissim ut tortor quam. In et convallis suspendisse vel. Urna,
            ante ut mauris, dolor interdum libero, proin accumsan, vitae. In
            risus sit convallis volutpat.
          </p>
          <button className={css(styles.button)}>Know More</button>
        </div>

        <div className={css(styles.space)} />
        <StaticImage
          src="../../images/iphone.png"
          alt="robot"
          className={css(styles.img)}
        />
      </div>

      <div className={css(styles.itemContainer)}>
        <StaticImage
          src="../../images/ihih.png"
          alt="robot"
          className={css(styles.img)}
        />

        <div className={css(styles.space)} />
        <div className={css(styles.textContainer)}>
          <p className={css(styles.heading)}>Id vel varius mauris morbi quis</p>
          <p className={css(styles.text)}>
            In dignissim ut tortor quam. In et convallis suspendisse vel. Urna,
            ante ut mauris, dolor interdum libero, proin accumsan, vitae. In
            risus sit convallis volutpat.
          </p>
          <button className={css(styles.button)}>Know More</button>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {},
  itemContainer: {
    display: 'flex',
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'max-content',
    marginBottom: 40,
  },
  img: {},
  space: {
    marginLeft: 120,
  },
  textContainer: {
    maxWidth: 600,
  },
  heading: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '34px',
    color: COLORS.primary,
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '152%',
    color: COLORS.primary,
  },
  button: {
    background: '#FFFFFF',
    border: `2px solid ${COLORS.secondary}`,
    boxSizing: 'border-box',
    borderRadius: '76px',
    padding: 12,
    color: COLORS.secondary,
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '128.7%',
    letterSpacing: '0.0125em',
    marginTop: 32,
  },
});

export default OurInitiatives;
