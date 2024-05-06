// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

function addElements() {
  const body = $('body');

  // Add paragraphs
  body.append($('<p>').text('Holberton Dashboard'));
  body.append($('<p>').text('Dashboard data for the students'));

  // Add button
  const button = $('<button>').text('Click here to get started');
  body.append(button);

  // Add count paragraph
  body.append($('<p>').attr('id', 'count'));

  // Add another paragraph
  body.append($('<p>').text('Copyright - Holberton School'));

  // Track button clicks
  let count = 0;
  button.on('click', _.debounce(() => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }, 300)); // Debounce to prevent spamming
}

addElements();
