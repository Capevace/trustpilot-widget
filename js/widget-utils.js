const $ = require('cash-dom');

function getStars(starCount, sectionName) {
  // Stars
  let stars = $('<div>')
    .addClass('tp-widget-' + sectionName + '-stars');

  // Create 5 stars
  for (var starIndex = 0; starIndex < 5; starIndex++) {
    $('<div>')
      // If the current index is smaller than the active count, make it active
      .addClass((starIndex < starCount)
        ? 'tp-widget-' + sectionName + '-star-active'
        : 'tp-widget-' + sectionName + '-star'
      )
      .appendTo(stars);
  }

  return stars;
}

module.exports = {
  getStars
};
