//call method
const p_info = {
  pDetails: function (rating, price) {
    return this.pId + " " + this.pName + " " + rating + " " + price;
  },
};
const product = {
  pId: "1001",
  pName: "vivo",
};
console.log(p_info.pDetails.call(product, 4, 100000)); //call method for accessing various object
