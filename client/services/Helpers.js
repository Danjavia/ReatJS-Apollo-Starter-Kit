/**
 * External resources
 * */
import numeral from 'numeral';
import moment from 'moment';
moment.locale('es'); // set language to es_ES
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/**
 * Izitoast Settings
 * */
iziToast.settings({
  timeout: 10000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  zindex: 99,
  position: 'topRight',
  onOpen: function(){
    console.log('callback abriu!');
  },
  onClose: function(){
    console.log("callback fechou!");
  }
});

/**
 * `hasPermissions`: Set permission for visual presentatioin layer
 * @param {array} Permissions Allowable permission for the current view
 * @return {boolean} true|false
 * */
const hasPermissions = function(permissions = []) {

  const userPermissions = [
    'manager',
    'manager_payment',
    'manager_accounts',
    'agent',
    'agent_accounts',
    'agent_soat'
  ];

  return containsAny(userPermissions, permissions);
};

/**
 * `containsAny`: Check if the source array is contained into the some target array
 * @param {array} source Original source array
 * @param {array} target Target array
 * @return {boolean} true|false
 * */
function containsAny(source, target) {
  let result = source.filter(function(item){ return target.indexOf(item) > -1});
  return (result.length > 0);
}

/**
 * `getWaitTimeText`: Show specific date adding minutes, seconds and other conventions
 * @param {string} dateStr Date ISO format to convert in readable string
 * @return {string} Date
 * */
const getWaitTimeText = function (dateStr) {

  if (!dateStr) {
    dateStr = moment().format();
  }

  let start = moment(dateStr);
  let end = moment();
  let diffTime = end.diff(start);
  let duration = moment.duration(diffTime, 'milliseconds');

  if (duration.days() > 0) {
    return `${duration.days()} días, ${duration.hours()}, horas y ${duration.minutes()} minutos.`;
  } else {
    return `${duration.hours()} horas y ${duration.minutes()} minutos.`;
  }
};

/**
 * `nodeatob`: Convert base64 hash into array splitted by ':'
 * @param {string} Base64 Hash
 * @return {array} Array of elements in Base64 Hash
 * */
const nodeatob = function (nodeHash) {
  return atob(nodeHash).split(':');
};

/**
 * `nodebtoa`: Convert nodeType and value to Base64 Hash
 * @param {string} nodeType NodeType e.g. UserNode|OpportunityNode
 * @param {string} value Value to set into Base64 Hash
 * @return {string} Hash
 * */
const nodebtoa = function (nodeType, value) {
  return btoa(`${nodeType}:${value}`);
};

/**
 * `logException`: Catch handle exceptions via Raven for sending to Sentry server
 * @param {string} ex Exception
 * @param {array} context Exception context
 * */
const logException = function (ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window.console && console.error && console.error(ex);
};

/**
 * `formatDate`: Format ISO fate to string readable date.
 * @param {string} date Date to transform.
 * @param {string} format Format string for the date.
 * @param {string} type Format type definition for the date a|b.
 * */
const formatDate = function (dateStr, format, custom = false) {

  if (!dateStr) {
    dateStr = moment().format();
  }

  if (!format) {
    format = 'YYYY-MM-DD, h:mm a';
  }

  if (custom == true) {
    return moment(dateStr, format);
  } else {
    return moment(dateStr).format(format);
  }
};

/**
 * `formatNumber` Format number into specific number.
 * @param {string} value Value to transform
 * @param {string} format Format type
 * */
const formatNumber = function (value, format = '$0,0') {
  return numeral(value).format(format);
};

/**
 * `rawNumber`: Transform number from string
 * @param {string} valueStr String to transform into raw value
 * */
const rawNumber = function (valueStr) {
  return numeral(valueStr).value();
};

/**
 * `toastHelper`: Helper for showing beauty notifications Within crm
 * more info in http://izitoast.marcelodolce.com/
 * */
const toastHelper = iziToast;

/**
 * `capitalizeFirstLetter`: Set first letter in uppercase.
 * @param {string} string String to convert.
 * */
const capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export {
  hasPermissions,
  getWaitTimeText,
  nodeatob,
  nodebtoa,
  logException,
  formatDate,
  formatNumber,
  rawNumber,
  toastHelper,
  capitalizeFirstLetter
};
