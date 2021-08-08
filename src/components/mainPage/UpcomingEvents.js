import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GatsbyImage, StaticImage} from 'gatsby-plugin-image';
import {COLORS} from '../../styles/Colors';

const UpcomingEvents = () => {
  return (
    <div>
      <div className={css(styles.root)}>
        {[0, 1, 2, 3, 5, 32, 2].map((item, id) => (
          <div className={css(styles.container)} key={id}>
            <StaticImage
              src="../../images/ihih.png"
              alt="robot"
              className={css(styles.image)}
            />

            <p className={css(styles.title)}>Google I/O 2021</p>
            <p className={css(styles.date)}>September 1st Week</p>
            <p className={css(styles.text)}>
              Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit,
              est, mattis urna. Malesuada amet nisi libero, urna tristique
              aliquam.{' '}
            </p>

            <div className={css(styles.knowMoreContainer)}>
              <p className={css(styles.moreText)}>Know More</p>
              <i className="ri-arrow-right-line" style={{marginLeft: 6}}></i>
            </div>
          </div>
        ))}
      </div>
      <div className={css(styles.centerDiv)}>
        <button className={css(styles.viewMoreButton)}>View All Events</button>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    marginLeft: 102,
    marginRight: 102,
    paddingTop: 96,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  container: {
    width: 357,
    marginBottom: 80,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 357,
    height: 357,
  },
  title: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '34px',
    color: COLORS.secondary,

    marginBottom: 0,
  },
  date: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '152%',
    color: 'rgba(0, 2, 73, 0.54)',
    marginTop: 4,
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '152%',
    color: COLORS.primary,
  },
  knowMoreContainer: {
    display: 'flex',
    alignItems: 'center',
    color: COLORS.secondary,
    marginTop: 16,
  },
  moreText: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '30px',
    textAlign: 'center',
  },

  centerDiv: {
    width: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  viewMoreButton: {
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
    marginTop: 5,

    marginBottom: 32,
  },
  space: {
    width: 82,
  },
});

export default UpcomingEvents;
