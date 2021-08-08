import {css, StyleSheet} from 'aphrodite';
import React from 'react';

const ThingsWeDoMob = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.title)}>Things We Do</div>{' '}
    </div>
  );
};
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});
export default ThingsWeDoMob;
