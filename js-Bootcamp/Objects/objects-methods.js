let resturaunt = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatLeft;
  },
};

let status = resturaunt.checkAvailability(74);

console.log(status);
