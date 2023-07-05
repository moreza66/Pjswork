let resturaunt = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

resturaunt.seatParty(72);
console.log(resturaunt.checkAvailability(4));
resturaunt.removeParty(5);
console.log(resturaunt.checkAvailability(4));
