/* eslint-disable no-bitwise */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import PropTypes from "prop-types";
import timer from "battery-friendly-timer";

class AutoReload extends Component {
  constructor(props) {
    super(props);
    this.previousHash = null;
    this.state = {
      codeHasChanged: false,
    };
    this.fetchSource = this.fetchSource.bind(this);
  }

  componentDidMount() {
    const { tryDelay, forceDelay } = this.props;
    this.fetchSource();
    this.interval = timer.setInterval(this.fetchSource, tryDelay, forceDelay);
  }

  componentWillUnmount() {
    timer.clearInterval(this.interval);
  }

  fetchSource() {
    const { url } = this.props;
    return fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("offline");
        }
        return response.text();
      })
      .then((html) => {
        const hash = this.hash(html);
        if (!this.previousHash) {
          this.previousHash = hash;
          console.log(
            "AutoReload -> fetchSource -> this.previousHash first",
            this.previousHash,
            hash
          );
          return;
        }
        console.log(
          "AutoReload -> fetchSource -> this.previousHash secound",
          this.previousHash,
          hash
        );
        if (this.previousHash !== hash) {
          console.log(
            "AutoReload -> fetchSource -> this.previousHash third",
            this.previousHash,
            hash
          );
          this.previousHash = hash;
          this.setState({ codeHasChanged: true });
        }
      })
      .catch(() => {
        console.log(
          "AutoReload -> fetchSource -> this.previousHash catch",
          this.previousHash
        );
        /* do nothing */
      });
  }

  /**
   * Java-like hashCode function for strings
   *
   * taken from http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery/7616484#7616484
   */
  // eslint-disable-next-line class-methods-use-this
  hash(str) {
    const len = str.length;
    let hash = 0;
    if (len === 0) return hash;
    let i;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < len; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

  // eslint-disable-next-line class-methods-use-this
  reloadApp(e) {
    window.location.reload(true);
    e.preventDefault();
  }

  render() {
    const { codeHasChanged } = this.state;
    if (!codeHasChanged) return null;
    const style = {
      position: "absolute",
      top: 10,
      right: 10,
      padding: "1em",
      zIndex: 1050,
      backgroundColor: "bisque",
      borderRadius: 5,
      textAlign: "center",
    };
    return (
      <div style={style}>
        <div>SocialPilot has a new version.</div>
        <div>
          <a href="#" onClick={this.reloadApp}>
            Click to reload
          </a>
        </div>
      </div>
    );
  }
}

AutoReload.propTypes = {
  url: PropTypes.string,
  tryDelay: PropTypes.number,
  forceDelay: PropTypes.number,
};

AutoReload.defaultProps = {
  url: "/",
  tryDelay: 5 * 60 * 1000, // 5 minutes
  forceDelay: 24 * 60 * 60 * 1000, // 1 day
};

export default AutoReload;
