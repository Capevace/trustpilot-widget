const $ = require('cash-dom');
const getHeader = require('./widget-header');
const getContent = require('./widget-content');

function renderWidget(widget, reviews) {
  const container = $('<div></div>')
    .addClass('tp-widget-container')
    .append(getHeader(3, 5))
    .append(getContent(reviews));

  $(widget).append(container);
}

module.exports = {
  renderWidget
};
