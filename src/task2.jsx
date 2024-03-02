import React, { Component } from 'react';

class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://cdn.dummyjson.com/product-images/1/1.jpg',
        'https://cdn.dummyjson.com/product-images/2/1.jpg',
        'https://cdn.dummyjson.com/product-images/3/1.jpg',
        'https://cdn.dummyjson.com/product-images/5/1.jpg',
        'https://cdn.dummyjson.com/product-images/4/1.jpg',
      ],
      currentIndex: 0,
      isPlaying: false,
    };
  }

  componentDidMount() {
    this.startSlider();
  }

  componentWillUnmount() {
    this.stopSlider();
  }

  startSlider = () => {
    this.sliderInterval = setInterval(this.goToNextImage, 2000);
  };

  stopSlider = () => {
    clearInterval(this.sliderInterval);
  };

  goToNextImage = () => {
    const { currentIndex, images } = this.state;
    this.setState({
      currentIndex: (currentIndex + 1) % images.length,
    });
  };

  goToPrevImage = () => {
    const { currentIndex, images } = this.state;
    this.setState({
      currentIndex: (currentIndex - 1 + images.length) % images.length,
    });
  };

  togglePlayPause = () => {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.stopSlider();
    } else {
      this.startSlider();
    }
    this.setState({
      isPlaying: !isPlaying,
    });
  };

  render() {
    const { images, currentIndex, isPlaying } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="img-fluid mb-3" />
            <div>
              <button className="btn btn-primary mr-2" onClick={this.goToPrevImage}>Prev</button>
              <button className="btn btn-primary mr-2" onClick={this.goToNextImage}>Next</button>
              <button className="btn btn-primary mr-2" onClick={this.togglePlayPause}>
                {isPlaying ? 'Stop' : 'Play'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task2;
