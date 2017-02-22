import fetch from 'isomorphic-fetch';
import _ from 'lodash';
/**
 * Memberships API JS client.
 *
 * In order to use Memberships API you should create an instance of this class.
 * ~~~~
 * import Memberships from "tm-memberships-api-client-js";
 * const products = new Memberships ('http://service-memberships.dev/api/v1', 'en');
 * ~~~~
 * @constructor Memberships
 */
export default class Memberships {
  locale = null;
  url = null;

  constructor (url, locale = 'en') {
    this.locale = locale;
    this.url = url;
  }

  /**
   * Return list of membership groups.
   * @param params {Object} Membership groups parameters
   * <pre>
   *   {
   *    type_id: Number
   *   }
   * </pre>
   * @returns {Object} <pre>{
   * "currentPageIndex":1,
   * "totalCount":11,
   * "lastPageIndex":6,
   * "items": [
   *   {
   *     "id":"1",
   *     "name":"Name",
   *     "active_icon":"http://s3.amazonaws.com/doc/2017-02-02/",
   *     "inactive_icon":"http://s3.amazonaws.com/doc/2017-02-02/",
   *     "type_id":"17763",
   *   }, ...]
   *  }</pre>
   * @method Memberships#getMembershipGroups
   */
  getMembershipGroups (token, params = {}) {
    return false;
  }

  /**
   * Return list of membership groups.
   * @param params {Object} Membership groups parameters
   * <pre>
   *   {
   *    group_id: Number
   *   }
   * </pre>
   * @returns {Object} <pre>{
   * "currentPageIndex":1,
   * "totalCount":11,
   * "lastPageIndex":6,
   * "items": [
   *   {
   *    "id":"1",
   *    "title":"Premium",
   *    "descriptions":"Example description",
   *    "group_id":"1",
   *    "price": 199,
   *    "max_downloads":"10",
   *    "duration_days":"30",
   *    }, ...]
   *  }</pre>
   * @method Memberships#getMemberships
   */
  getMemberships (params = {}) {
    return false;
  }

  /**
   * Return list of subscriptions
   .
   * @param token {String} User token
   * @param params {Object} Membership groups parameters
   * <pre>
   *   {
   *    status : String,
   *    membership_id : Number,
   *    group_id : Number
   *   }
   * </pre>
   * @returns {Object} <pre>{
   * "currentPageIndex":1,
   * "totalCount":11,
   * "lastPageIndex":6,
   * "items": [
   *   {
   *    "id":"1",
   *    "membership": {
   *       "id":"1",
   *       "title":"Premium",
   *       "descriptions":"Example description",
   *       "group_id":"1",
   *       "price": 199,
   *       "max_downloads":"10",
   *       "duration_days":"30",
   *    },
   *    "user_id":"12345",
   *    "status":"active"
   *    "end_date":"1038444",
   *    "downloads":"0",
   *    "downloads_quota": 100,
   *   }, ...]
   *  }</pre>
   * @method Memberships#getListOfSubscriptions
   */
  getListOfSubscriptions (token, params = {}) {
    return false;
  }

  /**
   * Return subscription
   .
   * @param token {String} User token
   * @returns {Object} <pre>{
   *  "id":"1",
   *  "membership": {
   *    "id":"1",
   *    "title":"Premium",
   *    "descriptions":"Example description",
   *    "group_id":"1",
   *    "price": 199,
   *    "max_downloads":"10",
   *    "duration_days":"30",
   *  },
   *  "user_id":"12345",
   *  "status":"active"
   *  "end_date":"1038444",
   *  "downloads":"0",
   *  "downloads_quota": 100,
   * }</pre>
   * @method Memberships#getSubscription
   */
  getSubscription (token, params = {}) {
    return false;
  }

  /**
   * Return list of downloads.
   * @param token {String} User token
   * @returns {Object} <pre>{
   * "currentPageIndex":1,
   * "totalCount":11,
   * "lastPageIndex":6,
   * "items": [
   *   {
   *     "id":"1",
   *     "product_id":"143142",
   *     "created_at":"12345"
   *   }, ...]
   *  }</pre>
   * @method Memberships#getListOfDownloads
   */
  getListOfDownloads(token, params = {}) {
    return false;
  }
}
