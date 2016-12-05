const $ = require('cash-dom');
const { getStars } = require('./widget-utils');

function getHeading(review) {
  const picturePath = 'images/' + (
    review.fullName
      .toLowerCase()
      .replace(/ /g, '-')
  ) + '.png';

  const picture = $('<img />')
    .addClass('tp-widget-content-profile')
    .prop('src', picturePath);

  const title = $('<span>')
    .addClass('tp-widget-content-title')
    .text(review.reviewTitle);

  const name = $('<span>')
    .addClass('tp-widget-content-name')
    .text(review.fullName + ' - ' + review.location);

  return $('<div>')
    .addClass('tp-widget-content-heading')
    .append(picture)
    .append(title)
    .append(name);
}

function getParagraph(review) {
  let expanded = false;

  const paragraph = $('<p>')
    .addClass('tp-content-collapsed')
    .text(review.reviewBody);

  const showMoreButton = $('<button>')
    .addClass('tp-widget-content-more')
    .text('Show more')
    .on('click', () => {
      expanded = !expanded;

      if (expanded) {
        paragraph.addClass('tp-content-collapsed');
        showMoreButton.text('Show more');
      } else {
        paragraph.removeClass('tp-content-collapsed');
        showMoreButton.text('Show less');
      }

      return false;
    });

  return $('<div>')
    .addClass('tp-widget-content-paragraph tp-can-fade-text')
    .append(paragraph)
    .append(showMoreButton);
}

function getContent(reviews) {
  const review = reviews[3];

  const reviewContainer = $('<div>')
    .addClass('tp-widget-content-review')
    .append(getStars(review.starRating, 'content'))
    .append(getHeading(review))
    .append(getParagraph(review));

  return $('<div>')
    .addClass('tp-widget-content')
    .append(reviewContainer);
}

module.exports = getContent;
