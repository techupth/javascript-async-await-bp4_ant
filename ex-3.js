//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
// async function getData() {
//   try{
//     const johnProfile = await getJohnProfile();
//     console.log(johnProfile);
//     const johnOrders = await getJohnOrders();
//     console.log(johnOrders)
//   }catch(error) {
//     console.log(error)
//   }
// }
function onSuccess(data) {
  console.log(data)
}
function onFailed(error) {
  console.log(error)
}
getJohnProfile().then(onSuccess).then(getJohnOrders).then(onSuccess).catch(onFailed)