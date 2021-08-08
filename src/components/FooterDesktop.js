import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../styles/Colors';
import {StaticImage} from 'gatsby-plugin-image';

const FooterDesktop = () => {
  return (
    <div className={css(styles.root)}>
      <div>
        <p className={css(styles.title)}>Hack Club CUCEK</p>
        <p className={css(styles.text)}>Events</p>
        <p className={css(styles.text)}>Our Team</p>
        <p className={css(styles.text)}>Join Us</p>
        <p className={css(styles.text)}>Scrapbook</p>
        <p className={css(styles.text)}>Gallery</p>
      </div>

      <div className={css(styles.container)}>
        <p className={css(styles.title)}>Address</p>
        <p className={css(styles.text)}>
          Cochin University College of Engineering Kuttanad(CUCEK), Pulincunnu
          P.O, Alleppey, 688504, Kerala
        </p>
        <p className={css(styles.text)}>
          All Rights Reserved 2021, Hack Club CUCEK Designed with ❤️ by
          @akhil__tj
        </p>
        <p className={css(styles.text)}>
          Programmed By -
          <a href="https://github.com/superRaptor911">Aditya Aravind</a>
        </p>
      </div>

      <div className={css(styles.container)}>
        <p className={css(styles.title)}>Socials</p>
        <StaticImage src="../images/icons/hackclubFlagIcon.png" alt="gg" />

        <div className={css(styles.iconContainer)}>
          <StaticImage
            src="../images/icons/twitter.png"
            alt="twitter-social"
            className={css(styles.socialIcons)}
          />
          <StaticImage
            src="../images/icons/github.png"
            alt="github-social"
            className={css(styles.socialIcons)}
          />
          <StaticImage
            src="../images/icons/linkedin.png"
            alt="linkedin-social"
            className={css(styles.socialIcons)}
          />
          <StaticImage
            src="../images/icons/instagram.png"
            alt="instagram-social"
            className={css(styles.socialIcons)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.primary,
    paddingLeft: 102,
    paddingRight: 102,
    paddingTop: 72,
    paddingBottom: 72,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 120,
  },
  title: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '22px',
    lineHeight: '27px',
    marginBottom: 32,
    color: COLORS.secondary,
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#FFFFFF',
  },
  container: {
    maxWidth: 408,
  },
  iconContainer: {
    display: 'flex',
    marginTop: 52,
    justifyContent: 'space-between',
  },
  socialIcons: {
    width: 28,
    height: 28,
  },
});

export default FooterDesktop;
