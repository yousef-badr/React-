import React, { Component } from 'react';

class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flipkart.com%2Fcute-dogs-animated-hd-matte-finish-poster-paper-print%2Fp%2Fitm682192dd3afbe&psig=AOvVaw12T-SwXAXx847Rb10bdX9D&ust=1709310734178000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiH9uz80IQDFQAAAAAdAAAAABAD',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Dpuppy%2Bcartoon&psig=AOvVaw12T-SwXAXx847Rb10bdX9D&ust=1709310734178000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiH9uz80IQDFQAAAAAdAAAAABAQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxKhPlg-tK801pmTlua-t7ui4qIm3OCDMoA&usqp=CAU',
        'https://t3.ftcdn.net/jpg/00/50/07/64/360_F_50076454_TCvZEw37VyB5ZhcwEjkJHddtuV1cFmKY.jpg',
        'https://t3.ftcdn.net/jpg/05/68/02/36/360_F_568023692_15idt2j4V5fvXr2YDTbijyl292IRyyMJ.jpg',
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
