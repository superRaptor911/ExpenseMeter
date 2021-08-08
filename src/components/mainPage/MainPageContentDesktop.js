/* eslint-disable react/prop-types */
import React from 'react';
import {COLORS} from '../../styles/Colors';
import {StyleSheet, css} from 'aphrodite';

const MainPageContentDesktop = ({pressHandler}) => {
  return (
    <div className={css(styles.container)}>
      <p className={css(styles.title)}>Hack Club CUCEK</p>
      <p className={css(styles.details)}>
        A nonprofit network of high school coding clubs and makers around the
        world, for the students, by the students.
      </p>
      <button className={css(styles.button)} onClick={pressHandler}>
        Our Vision
        <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: 'max-content',
    height: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '85.3333px',
    lineHeight: '126.78%',
    textAlign: 'center',
    letterSpacing: '0.025em',
    textTransform: 'uppercase',
    WebkitTextFillColor: 'rgba(255, 255, 255,0)',
    WebkitTextStrokeWidth: '2px',
    color: '#FFFFFF',
    margin: 0,
  },
  details: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '152%',
    textAlign: 'center',
    color: '#FFFFFF',
    maxWidth: 840,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 4,
  },
  button: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '26.6667px',
    lineHeight: '128.7%',
    letterSpacing: '0.0125em',
    color: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: COLORS.secondary,
    borderRadius: '170.667px',
    padding: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 270,
    marginTop: 54,
    borderTopStyle: 'hidden',
    borderRightStyle: 'hidden',
    borderLeftStyle: 'hidden',
  },
});

export default MainPageContentDesktop;
