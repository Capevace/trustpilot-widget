const $ = require('cash-dom');

// Widget structure

function starCountToName(starCount) {
  switch (starCount) {
    case 1:
      return 'Bad';
    case 2:
      return 'Poor';
    case 3:
      return 'Average';
    case 4:
      return 'Great';
    case 5:
      return 'Excellent';
    default:
      return 'Average';
  }
}

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

function getHeader(starCount, reviewCount) {
  let header = $('<div>')
    .addClass('tp-widget-header')

  // Average label
  const averageLabel = $('<span>')
    .addClass('tp-widget-header-average')
    .text(starCountToName(starCount));

  const stars = getStars(starCount, 'header');

  const infoLabel = $('<span>')
    .addClass('tp-widget-header-info')
    .html('Based on <b>' + reviewCount + '</b> reviews.');

  return header
    .append(averageLabel)
    .append(stars)
    .append(infoLabel);
}

module.exports = getHeader;
