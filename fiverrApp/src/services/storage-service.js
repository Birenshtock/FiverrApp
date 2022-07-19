import { gigService } from '../services/gig-service.js'

// const fs = require('fs')
// const gigs = require('../../data/gigs.json')

import gigs from '../../data/gigs.json'


export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  postMany,
}

function query() {
  console.log('gigss',gigs)
 

  // var entities = JSON.parse(localStorage.getItem(entityType)) || []
  return Promise.resolve(gigs)
}

function get(entityType, entityId) {
  console.log(entityId)
  return query(entityType).then(entities =>
    entities.find(entity => entity._id === entityId)
  )
}

function post(entityType, newEntity) {
  newEntity._id = _makeId()
  return query(entityType).then(entities => {
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  })
}

function postMany(entityType, newEntities) {
  return query(entityType).then(entities => {
    entities.push(...newEntities)
    _save(entityType, entities)
    return entities
  })
}

function put(entityType, updatedEntity) {
  return query(entityType).then(entities => {
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  })
}

function remove(entityType, entityId) {
  return query(entityType).then(entities => {
    const idx = entities.findIndex(entity => entity._id === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
  })
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
