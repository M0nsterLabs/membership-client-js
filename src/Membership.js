import fetch from 'isomorphic-fetch';
import serialize from 'plasma-serialize';
import Promise from 'bluebird';
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
export default class Membership {
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
   * @returns {Array} <pre>[
   *   {
   *     "id":"1",
   *     "name":"Name",
   *     "active_icon":"http://s3.amazonaws.com/doc/2017-02-02/",
   *     "inactive_icon":"http://s3.amazonaws.com/doc/2017-02-02/",
   *     "type_id":"17763",
   *   }, ...]</pre>
   * @method Memberships#getMembershipGroups
   */
  async getMembershipGroups (params = {}) {
    params = {...params, ...{locale : this.locale}};
    const response = await this._fetchRequest(`${this.url}/membership-groups?${serialize(params)}`);
    return response.json();
  }

  /**
   * Return list of all membership plans.
   * @param params {Object} Membership group parameters
   * <pre>
   *   {
   *    group_id: Number
   *   }
   * </pre>
   * @returns {Array} <pre>[
   *   {
   *    "id":"1",
   *    "title":"Premium",
   *    "descriptions":"Example description",
   *    "group_id":"1",
   *    "price": 199,
   *    "max_downloads":"10",
   *    "duration_days":"30",
   *    }, ...]</pre>
   * @method Memberships#getMemberships
   */
  async getMemberships (params = {}) {
    params = {...params, ...{locale : this.locale}};
    const response = await this._fetchRequest(`${this.url}/memberships?${serialize(params)}`);
    return response.json();
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
   * @returns {Array} <pre>[
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
   *   }, ...]</pre>
   * @method Memberships#getListOfSubscriptions
   */
  async getListOfSubscriptions (token, params = {}) {
    if (!token.length) {
      throw new Error('Token can`t defined');
    }
    params.locale = this.locale;
    const response = await this._fetchRequest(`${this.url}/membership-subscriptions/my?${serialize(params)}`, token);
    return response.json();
  }

  /**
   * Return subscription
   .
   * @param token {String} User token
   * @param id {Number} User id
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
  async getSubscription (token, id) {
    if (!token.length) {
      throw new Error('Token can`t defined');
    }
    if (!this._isValidId(id)) {
      throw new Error('User id isn`t defined.');
    }
    const response = await this._fetchRequest(`${this.url}/membership-subscriptions/${id}?locale=${this.locale}`, token);
    return response.json();
  }

  /**
   * Return list of downloads.
   * @param token {String} User token
   * @param id {Number} Product id
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
  async getListOfDownloads (token, id) {
    if (!token.length) {
      throw new Error('Token can`t defined');
    }
    if (!this._isValidId(id)) {
      throw new Error('Product id isn`t defined.');
    }
    const response = await this._fetchRequest(`${this.url}/membership-subscriptions/my/downloads/${id}?locale=${this.locale}`, token);
    return response.json();
  }

  /**
   * Return Correct id or not
   * @param id {Number} Product id
   * @returns {Bool}
   * @method Memberships#_isValidId
   */
  _isValidId (val) {
    return typeof val == 'number' && val > 0;
  }

  /**
   * Return Fetch Promise
   * @param url {String} Where request go
   * @param token {String} auth user token
   * @returns {Promise}
   * @method Memberships#_fetchRequest
   */
  async _fetchRequest (url, token = false) {
    const headers = token ? new Headers({'Authorization' : token}) : {};
    const response = await fetch(url, {headers: headers, method: 'GET'});
    if (response.status >= 400) {
      throw new Error('Bad server response');
    }
    return response;
  }
}
