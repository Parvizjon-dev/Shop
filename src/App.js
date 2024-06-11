import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderCarousel from "./components/HeaderCarousel";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "iPhone 14 Light-blue",
          img: "iphone-14-blue.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "999",
        },
        {
          id: 2,
          title: "iPhone 14 Light-blue",
          img: "iphone-14-blue.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "999",
        },
        {
          id: 3,
          title: "iPhone 14 Light-blue",
          img: "iphone-14-blue.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "999",
        },
        {
          id: 4,
          title: "iPhone 14 Light-blue",
          img: "iphone-14-blue.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "999",
        },
        {
          id: 5,
          title: "iPhone 14 Light-blue",
          img: "iphone-14-blue.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "999",
        },
        {
          id: 6,
          title: "iPhone 14 Light-blue",
          img: "iphone-14-blue.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "999",
        },
        {
          id: 7,
          title: "iPhone 14 Light-blue",
          img: "iphone-14-blue.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "999",
        },
        {
          id: 8,
          title: "iPhone 14 Light-blue",
          img: "iphone-14-blue.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "999",
        }
      ]
    }
  }
  render() {
    return (
      <div className="wrapper" >
        <Header />
        <HeaderCarousel />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
