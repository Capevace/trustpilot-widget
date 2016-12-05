// Hey,
// so a little explanation of why I chose to do what.
// While planning, I thought about using the library Vue.js for this.
// This seemed like a great idea because it's a very simple to use library
// and I've grown quite good at it.
// But then I thought about what the widget is gonna be used for. And I realized
// that it'll be implemented in a site. And in my opinion, widgets like these
// should put as little weight on the site as possible. While Vue is relatively
// small, I thought that I could go even smaller.

// I'm using 'cash' by Ken Wheeler as a smaller replacement for jQuery.
const $ = require('cash-dom');
const fetchReviews = require('./fetchReviews');
const { renderWidget, renderWidgetError } = require('./widget');

$(document).ready(() => {
  $('.tp-widget').each((widget) => {
    const id = $(widget).data('id');

    fetchReviews(id, (err, reviews) => {
      if (err) {
        renderWidgetError();
      } else {
        renderWidget(widget, reviews);
      }
    });
  });
});

// When data is fetched, pass that data to the renderWidget method
