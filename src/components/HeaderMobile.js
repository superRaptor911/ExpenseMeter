import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {StaticImage} from 'gatsby-plugin-image';

const HeaderMobile = () => {
  return (
    <div className={css(styles.rootHeader)}>
      <StaticImage
        src="../images/hackClubFlag.png"
        quality={95}
        // formats={['AUTO', 'WEBP', 'AVIF']}
        alt="flag"
        className={css(styles.flag)}
      />

      <StaticImage
        src="../images/icons/menubar.png"
        alt="menu bar"
        className={css(styles.menuBar)}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  rootHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flag: {
    height: 69,
    left: 16,
    width: 124,
  },
  menuBar: {
    height: 16,
    right: 22,
    top: 22,
    width: 18,
  },
});

export default HeaderMobile;
