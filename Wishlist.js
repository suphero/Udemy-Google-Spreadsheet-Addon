function updateWishlist() {
  checkTokenExistence();
  var data = getWishlist();
  var header = getWishlistHeader();
  var sheet = prepareSheet('Wishlist');
  prepareHeader(sheet, header);
  prepareWishlistData(sheet, data);
  sortWishlist(sheet);
  setWishlistFilter(sheet);
}

function getWishlistHeader() {
  return [
    'Title',
    'Url',
    'Lectures',
    'Content Length',
    'Last Update',
    'Subscribers',
    'Reviews',
    'Rating',
    'Price'
  ];
}

function prepareWishlistData(sheet, data) {
  for (var i = 0; i < data.length; i++) {
    appendWishlistRow(sheet, data[i], i + 2);
  }
}

function appendWishlistRow(sheet, result, i) {
  var row = [
    result.title,
    result.url,
    result.num_lectures,
    result.estimated_content_length,
    result.last_update_date,
    result.num_subscribers,
    result.num_reviews,
    result.rating,
    result.discount.price.amount
  ];
  appendRow(sheet, row, i);
}

function sortWishlist(sheet) {
  var sortRange = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn());
  sortRange.sort([{column: 8, ascending: false}]);
}

function setWishlistFilter(sheet) {
  var filterRange = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn());
  var filter = filterRange.createFilter();
}