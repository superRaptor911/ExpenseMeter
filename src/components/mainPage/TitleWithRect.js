import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';
import PropTypes from 'prop-types';

const TitleWithRect = ({name}) => {
  return (
    <div className={css(styles.root)}>
      <p className={css(styles.title)}>{name}</p>
      <div className={css(styles.rectangle)}></div>
    </div>
  );
};

TitleWithRect.propTypes = {
  name: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    width: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '126.78%',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: COLORS.primary,
    marginBottom: 0,
  },
  rectangle: {
    height: 12,
    width: '70%',
    backgroundColor: COLORS.secondary,
    marginTop: -12,
  },
});

export default TitleWithRect;
