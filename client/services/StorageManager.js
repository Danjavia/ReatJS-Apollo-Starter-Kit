/**
 * External resources
 * */
import store from 'store2';
import _ from 'underscore';


/**
 * `StorageHelper`: Simple class for manage storage in browser.
 * */
class StorageManager {

  /**
   * `update`: Update storage
   * @param {string} key Key of the storage namespace
   * @param {string} value Value for the key
   * @param {string} newValue Value for update specific key
   * */
  update = (key, value, newValue = null) => {

    if (newValue) {
      try {
        if (store.has(key)) {
          let data = JSON.parse(store.get(key));
          data[value] = newValue;
          store.set(key, JSON.stringify(data));
          return true;
        } else {
          store.set(key, JSON.stringify(newValue));
        }

      } catch(e) {
        // statements
        throw new Error(`You has the following error:  ${e}`);
      }
    } else {
      try {
        if (store.has(key)) {
          let newState;
          let data = JSON.parse(store.get(key));

          if (typeof value === 'object' && typeof data === 'object') {
            newState = _.extend(data, value);
          } else {
            newState = value;
          }

          store.set(key, JSON.stringify(newState));
        } else {
          store.set(key, JSON.stringify(value));
        }
      } catch(e) {
        throw new Error(`You has the following error:  ${e}`);
      }
    }
  };

  /**
   * `log`: Useful for debugging and get key value!
   * @param {string} entity Key for showing.
   * */
  log = (entity) => {
    let logData = JSON.parse(store.get(entity));
    return logData;
  };

  /**
   * `has`: Check if key exists in storage.
   * @param {string} entity Key for verifing.
   * @return {boolean} Return if the entity exists in storage. true|false
   * */
  has = (entity) => {
    return !!store.has(entity);
  };

  /**
   * `get`: Get specfic key in storage!
   * @param {string} entity Key for showing.
   * @attr {string} attr Specific attribute to return
   * @return {object|string} Return the needed query
   * */
  get = (entity, attr) => {

    if (attr && store.has(entity)) {
      let data = JSON.parse(store.get(entity));
      return data[attr];
    }

    return JSON.parse(store.get(entity));
  };

  /**
   * `remove`: Check if key exists in storage for removing.
   * @param {string} entity Key to remove.
   * */
  remove = (entity) => {
    store.remove(entity);
  };

  /**
   * `clear`: Clean storage.
   * */
  clear = () => {
    store.clearAll();
  };

  /**
   * `getSize`: Print storage size.
   * */
  getSize = () => {

    let total = 0;
    let data = {};

    for(let x in localStorage) {
      let amount = (localStorage[x].length * 2) / 1024;
      total += amount;
      data[x] = amount.toFixed(2) + " KB";
    }

    data['Total'] = total.toFixed(2) + " KB";

    return data;
  };
}

export default new StorageManager();
