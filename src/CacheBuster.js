import meta from "./meta.json";
import React from "react";
const fs = require("fs");

// version from response - first param, local version second param
const semverGreaterThan = (versionA, versionB) => {
  const versionsA = versionA.split(/\./g);

  const versionsB = versionB.split(/\./g);
  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());

    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) continue;
    // eslint-disable-next-line no-restricted-globals
    return a > b || isNaN(b);
  }
  return false;
};

class CacheBuster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLatestVersion: false,
      refreshCacheAndReload: () => {
        console.log("Clearing cache and hard reloading...");
        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(function (names) {
            for (let name of names) caches.delete(name);
          });
        }

        // delete browser cache and hard reload
        window.location.reload(true);
      },
    };
  }

  componentDidMount() {
    try {
      fs.readFile("./meta.json", "utf8", function (err, data) {
        if (err) throw err;
        meta = JSON.parse(data);
        const latestVersion = meta.version;
        const currentVersion = localStorage.getItem("version");

        const shouldForceRefresh = semverGreaterThan(
          latestVersion,
          currentVersion
        );
        if (shouldForceRefresh) {
          console.log(
            `We have a new version - ${latestVersion}. Should force refresh`
          );
          localStorage.setItem("version", latestVersion);
          this.setState({ loading: false, isLatestVersion: false });
        } else {
          console.log(
            `You already have the latest version - ${latestVersion}. No cache refresh needed.`
          );
          this.setState({ loading: false, isLatestVersion: true });
        }
      });
    } catch (error) {
      console.log("CacheBuster -> componentDidMount -> error", error);
    }
  }
  render() {
    const { loading, isLatestVersion, refreshCacheAndReload } = this.state;
    return this.props.children({
      loading,
      isLatestVersion,
      refreshCacheAndReload,
    });
  }
}

export default CacheBuster;
