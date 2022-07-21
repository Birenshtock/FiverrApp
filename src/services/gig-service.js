import { storageService } from "./storage-service.js"
import { utilService } from "./util-service.js"

const KEY = "gigs_db"

// const labels = [
//   "On wheels",
//   "Box game",
//   "Art",
//   "Baby",
//   "Doll",
//   "Puzzle",
//   "Outdoor",
// ]

// _createGigs()

export const gigService = {
  query,
  getById,
  remove,
  save,
  getEmptyGig,
  getLabels,
}

const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? "/api/gig"
    : "//localhost:3030/api/gig"

async function query(filterBy) {
  try {
    // const entities= 'gigs'

    const gigs = await storageService.query(KEY)

  const {title, catagory } = filterBy
  const regex = new RegExp(title, 'i')
  console.log('ata mefager')
  let filteredGigs 
  if (!catagory){
    filteredGigs = gigs.filter((gig) => regex.test(gig.title))
    return Promise.resolve(filteredGigs)
  } 

  filteredGigs = gigs.filter((gig) => regex.test(gig.title)).filter((gig) => gig.catagory===catagory)

  
  return Promise.resolve(filteredGigs)
} catch (err) {
  console.error(err)
}

  // try {
    
  //   // const res = await axios.get(BASE_URL, { params: filterBy })
  //   const gigs = await storageService.query(filterBy)
  //   // return res.data
  //   return gigs
  // } catch (err) {
  //   console.error(err)
  // }

  // return axios.get(BASE_URL, { params: filterBy }).then((res) => res.data)
  // return storageService.query(TOY_KEY)
}

async function getById(gigId) {
  try {
    // const res = await axios.get(BASE_URL + gigId)
    const gig = await storageService.get(KEY, gigId)
    return gig
  } catch (err) {
    console.error(err)
  }

  // return axios.get(BASE_URL + gigId).then((res) => res.data);
  // return storageService.get(KEY, gigId)
}

async function remove(gigId) {
  try {
    // const res = await axios.delete(BASE_URL + gigId)
    const res = await storageService.remove(KEY, gigId)
    return res
  } catch (err) {
    console.error(err)
  }

  // return axios.delete(BASE_URL + gigId).then((res) => res.data);
  // return storageService.remove(KEY, gigId)
}

async function save(gig) {
  try {
    if (gig._id) {
      // const res = await axios.put(BASE_URL + gig._id, gig)
      const res = await storageService.put(KEY, gig)
      return res
    } else {
      // const res = await axios.post(BASE_URL, gig)
      const res = await storageService.post(KEY, gig)
      return res
    }
  } catch (err) {
    console.error(err)
  }

  // if (gig._id) {
  //   return axios.put(BASE_URL + gig._id, gig).then((res) => res.data);
  // } else {
  //   return axios.post(BASE_URL , gig).then((res) => res.data);
  // }

  // if (gig._id) return storageService.put(KEY, gig)
  // return storageService.post(KEY, gig)
}

function getEmptyGig() {
  return {}
}

function getLabels() {
  return labels
}

// function _createGigs() {
//   let gigs = utilService.loadFromStorage(KEY)
//   if (!gigs || !gigs.length) {
//     gigs = [
//       _createGig('teddy bear', utilService.getRandomIntInc(20, 100)),
//       _createGig('barbi', utilService.getRandomIntInc(20, 150)),
//       _createGig('truck', utilService.getRandomIntInc(20, 100)),
//     ]
//     utilService.saveToStorage(KEY, gigs)
//   }
//   return gigs
// }

// function _createGig(name, price) {
//   return {
//     _id: utilService.makeId(),
//     name,
//     price,
//     labels: ['Doll', 'Battery Powered', 'Baby'],
//     createdAt: Date.now(),
//     inStock: true,
//     reviews: [
//       'review 1 best 1',
//       'review 2 almost 1',
//       'review 3 far from 1',
//     ],
//   }
// }
