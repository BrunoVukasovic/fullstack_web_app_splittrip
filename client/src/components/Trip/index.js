import React, { Component } from "react";
import axios from "axios";
import Layout from "../Layout";
import { MainImage } from "..";
import imageNeki from "../../images/krka.jpg";

export default class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "",
      description: "",
      slug: "/blur"
    };
  }

  componentDidMount() {
    // console.log(this.props.location.pathname);
    const { pathname } = this.props.location;

    axios.post("/api/trips/one", { pathname }).then(res => {
      console.log("uspilo");
      // console.log(res.data.Slug);
      const { Heading, Description, Slug } = res.data;
      this.setState({ heading: Heading, description: Description, slug: Slug });
    });
  }
  render() {
    const { heading, description, slug } = this.state;
    console.log(typeof description);
    return (
      <Layout>
        <MainImage src={require("../../images" + slug + ".jpg")}></MainImage>
        <h2>{heading}</h2>
        <div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </Layout>
    );
  }
}
