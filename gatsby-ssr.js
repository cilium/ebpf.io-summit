const React = require('react');

const postBodyComponents = [
  // eslint-disable-next-line react/jsx-filename-extension
  <script type="text/javascript" src="https://sessionize.com/api/v2/yp5syx3f/view/GridSmart" />,
];

const SUMMIT_PAGE_NAME = '/summit-2021/';

exports.onRenderBody = ({ pathname, setPostBodyComponents }) => {
  if (pathname === SUMMIT_PAGE_NAME) {
    setPostBodyComponents(postBodyComponents);
  }
};
