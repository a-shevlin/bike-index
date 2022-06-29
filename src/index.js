import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './js/bike';

function getElements(response) {
  console.log(response);
  if (response.stolen >= 1) {
    console.log(response.stolen);
  } else {
    console.log('no bikes');
  }
}

async function makeApiCall(id) {
  const response = await BikeService.getBike(id);
  getElements(response);
}

$(document).ready(function() {
  $('#search').click(function() {
    let id = $('#brand').val();
    makeApiCall(id);
  });
});