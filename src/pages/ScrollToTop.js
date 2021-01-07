import React from 'react';

class ScrollToTop extends React.Component {

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const { location = {} } = prevProps;

        if (this.props.location.pathname !== location.pathname) {
            window.scrollTo(0, 0);
        }
    }


render() {
    return this.props.children;
  }
 }

 export default ScrollToTop