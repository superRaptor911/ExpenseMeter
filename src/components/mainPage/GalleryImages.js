import React, {useEffect, useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GatsbyImage, getImage, StaticImage} from 'gatsby-plugin-image';
import iphoneImg from '../../images/iphone.png';
import ihiImg from '../../images/ihih.png';
import roboImg from '../../images/roboMan.png';
import {AnimatePresence, motion} from 'framer-motion';
import {COLORS} from '../../styles/Colors';

const GalleryImages = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState([
    iphoneImg,
    ihiImg,
    roboImg,
    iphoneImg,
    ihiImg,
    roboImg,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndex(imageIndex + 1 == images.length ? 0 : imageIndex + 1);
    }, 2000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [imageIndex]);

  const variants = {
    initial: {x: 420},
    animate: {
      x: 0,
      scale: 1,
    },
    middle: {
      scale: 1.2,
    },
  };

  const getImages = () => {
    const offSet = imageIndex + 3;
    if (offSet >= images.length) {
      return [
        ...images.slice(imageIndex),
        ...images.slice(0, offSet - images.length),
      ];
    }

    return images.slice(imageIndex, offSet);
  };

  return (
    <div>
      <div className={css(styles.root)}>
        {getImages().map((item, id) => (
          <motion.img
            className={css(styles.images)}
            key={id * imageIndex + 100 * Math.random()}
            src={item}
            animate={{
              y: id === 1 ? -40 : 0,
              scale: id === 1 ? 1.2 : 1,
            }}
            transition={{
              duration: 0.5,
            }}
          />
        ))}
      </div>

      {/* Indicator for current image */}
      <div className={css(styles.dotsConatiner)}>
        {images.map((_item, id) => (
          <div
            className={
              id === imageIndex
                ? css(styles.dotsSelectedOuter)
                : css(styles.dots)
            }
            key={id}>
            {id === imageIndex && (
              <div className={css(styles.dotsSelected)}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    marginTop: 96,
    overflowX: 'hidden',
    overflowY: 'hidden',
    justifyContent: 'space-evenly',
    height: 'max-content',
  },

  images: {
    width: 400,
    height: 400,
    marginLeft: 50,
    marginTop: 100,
    marginBottom: 70,
  },

  dotsConatiner: {
    display: 'flex',
    width: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: COLORS.primary,
  },

  dotsSelectedOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.secondary}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  dotsSelected: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
  },
  empty: {
    width: 0,
    height: 0,
  },
});

export default GalleryImages;
