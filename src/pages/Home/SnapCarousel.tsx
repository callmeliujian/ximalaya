import React from "react";
import { hp, viewportWidth, wp } from "../../utils";
import { Image, StyleSheet, View } from "react-native";
import Carousel, { AdditionalParallaxProps, Pagination, ParallaxImage } from "react-native-snap-carousel";

const data = [
  'http://39.105.213.120/images/4.jpg',
  'http://39.105.213.120/images/4.jpg',
  'http://39.105.213.120/images/4.jpg',
  'http://39.105.213.120/images/4.jpg',
  'http://39.105.213.120/images/4.jpg',
];

const sliderWidth = viewportWidth;
const sidewidth = wp(90);
const sideHeight = hp(26)
const itemWidth = sidewidth + wp(2) * 2;

class SnapCarousel extends React.Component {

  state = {
    activeSlide:0,
  }

  onSnapToItem = (index: number) => {
    this.setState({
      activeSlide: index
      }
    )
  }

  renderItem = (
    { item }: { item: string }, parallaxProps?: AdditionalParallaxProps
  ) => {
    return (
      <ParallaxImage
        source={{uri: item}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8}
        showSpinner={true}
        spinnerColor="rgba(0,0,0,0,25)"
        {...parallaxProps}
        />
    )
  };

  get pagination() {
    const {activeSlide} = this.state;
    return (
      <View style={styles.paginatinWrapper}>
        <Pagination
          dotsLength={activeSlide}
          activeDotIndex={data.length}
          containerStyle={styles.paginationContainer}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          inactiveDotScale={0.7}
          inactiveDotOpacity={0.4}
        />
      </View>
    )
  }

  render() {
    return (
      <View>
        <Carousel
          data={data}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          onSnapToItem={this.onSnapToItem}
          loop={true}
          autoplay
        />
        {this.pagination}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: sidewidth,
    height: sideHeight,
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginatinWrapper: {
     justifyContent: 'center',
     alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
});

export default SnapCarousel;
