// Write your solution in this file!
customerName = 'bob'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName
};

function setBestCustomer() {
  bestCustomer = `not ${customerName.toLowerCase()}`
  return bestCustomer
};

function overwriteBestCustomer() {
  bestCustomer = `maybe ${customerName.toLowerCase()}`
  return bestCustomer
};

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'bob'
  leastFavoriteCustomer = 'bill'
}
