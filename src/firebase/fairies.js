import { firebaseFirestore } from './firebaseConfig';

export async function becomeAFairy (fairy, setFairyFunc) {
  firebaseFirestore.collection('fairys').add({
    name: fairy.name, email: fairy.email, birthday: fairy.birthday, 
  }).then((doc) => {
    console.log(doc.id); 
    const newFairy = {
      id: doc.id, name: fairy.name, email: fairy.email, birthday: fairy.birthday
    }; 
    setFairyFunc(newFairy); 
    console.log(fairy);
  }).catch((error) => {
    console.log(error); 
    console.log("Fairy not added"); 
  });
};

export async function getMatchedTwins (birthday) {
  firebaseFirestore.collection('twins').where("birthday", "==", birthday).get().then((query) => {
    const matchedTwins = query.docs;
    console.log(matchedTwins); 
    console.log("Got matched Twins!"); 
    return matchedTwins;
  }).catch((error) => {
    console.log(error); 
    console.log("Error getting matched twins");
    return '';
  });
};

export async function selectATwin (twin, fairy, setSelectedTwinFunc) {
  setSelectedTwinFunc(twin); 
  firebaseFirestore.collection('twins').doc(twin.id).update({
    match: fairy.email, 
  }).then(() => {
    console.log("Twin Selected!"); 
  }).catch((error) => {
    console.log(error); 
    console.log("Twin not selected"); 
  });
};

export async function getFilteredCakes (tag1, tag2, tag3, setMatchedCakesFunc, matchedCakes) {
  const tag1CakesRef = firebaseFirestore.collection('cakes').where("tag", "==", tag1).get(); 
  const tag2CakesRef = firebaseFirestore.collection('cakes').where("tag", "==", tag2).get(); 
  const tag3CakesRef = firebaseFirestore.collection('cakes').where("tag", "==", tag3).get(); 

  const [tag1CakesSnapshot, tag2CakesSnapshot, tag3CakesSnapshot] = await Promise.all([
    tag1CakesRef, tag2CakesRef, tag3CakesRef
  ]);

  const tag1Cakes = tag1CakesSnapshot.docs; 
  const tag2Cakes = tag2CakesSnapshot.docs;
  const tag3Cakes = tag3CakesSnapshot.docs;
  const filteredCakes = tag1Cakes.concat(tag2Cakes).concat(tag3Cakes);

  filteredCakes.forEach((cake) => {
    setMatchedCakesFunc([...matchedCakes, cake]); 
  }); 
};

export async function purchaseCake (order, setOrder) {
  setOrder(order); 
  firebaseFirestore.collection('orders').add({
    cakeID: order.cakeID, 
    address: order.address, 
    complete: false, 
  }).then((doc) => {
    console.log(doc); 
    console.log("Order sent to DB"); 
      setOrder(null); 
  }).then((error) => {
    console.log(error); 
    console.log("Order not sent to DB"); 
  });
};



// export async function addFairy (name) {
//   firebaseFirestore.collection('privileged').add({
//     name: name.name, 
//   }).then((doc) => {
//     console.log(doc.id); 
//     const newFairy = {
//       name: name.name
//     }; 
   
//     console.log(newFairy);
//   }).catch((error) => {
//     console.log(error); 
//     console.log("Fairy not added"); 
//   });
// };