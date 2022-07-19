import { storageService } from "./storage-service.js"
import { utilService } from "./util-service.js"
import axios from "axios"

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

async function query() {
  try {
    // const res = await axios.get(BASE_URL, { params: filterBy })
    const res = await storageService.query(TOY_KEY)
    return res.data
  } catch (err) {
    console.error(err)
  }

  // return axios.get(BASE_URL, { params: filterBy }).then((res) => res.data)
  // return storageService.query(TOY_KEY)
}

async function getById(gigId) {
  try {
    // const res = await axios.get(BASE_URL + gigId)
    const res = await storageService.get(KEY, gigId)
    return res.data
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
    return res.data
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
      return res.data
    } else {
      // const res = await axios.post(BASE_URL, gig)
      const res = await storageService.post(KEY, gig)
      return res.data
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
  return {
   
  }
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
