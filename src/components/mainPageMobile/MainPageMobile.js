import {StyleSheet, css} from 'aphrodite';
import React from 'react';
import {COLORS} from '../../styles/Colors';

const MainPageMobile = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.mainTitle)}>HACK CLUB CUCEK</div>
      <div className={css(styles.subTiile)}>
        A nonprofit network of high school coding clubs and makers around the
        world, for the students, by the students.
      </div>
      <button className={css(styles.button)} onClick={() => {}}>
        Our Vision
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 161,
    marginBottom: 100,
    marginRight: 16,
    marginLeft: 16,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 900,
    fontStyle: 'normal',
    height: 118,
    lineHeight: '122%',
    letterSpacing: '0.045em',
    textTransform: 'uppercase',
    textAlign: 'center',
    WebkitTextFillColor: 'rgba(255, 255, 255,0)',
    WebkitTextStrokeWidth: 1,
  },
  subTiile: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: '146%',
    textAlign: 'center',
    top: 6,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    border: 0,
    borderRadius: 128,
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    height: 59,
    width: 157,
    lineHeight: '128.7%',
    letterSpacing: '0.0125em',
    marginTop: 44,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '19px 36px',
  },
});

export default MainPageMobile;
