import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: require("./Images/1.JPG").default,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("./Images/2.JPG").default,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("./Images/3.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/4.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/5.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/6.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/7.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/8.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/9.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/10.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/11.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/12.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/13.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/14.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/15.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/16.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/17.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/18.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/19.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/20.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/21.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/22.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/23.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("./Images/24.JPG").default,
    altText: "Slide 3",
    caption: "",
  },
];

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default ImageCarousel;
