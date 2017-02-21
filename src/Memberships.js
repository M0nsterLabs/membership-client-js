import fetch from 'isomorphic-fetch';
import _ from 'lodash';
/**
 * Memberships API JS client.
 *
 * In order to use Memberships API you should create an instance of this class.
 * ~~~~
 * import Memberships from "tm-memberships-api-client-js";
 * const products = new Memberships ('http://api.templatemonster.com/products/v1', 'en');
 * const list = products.getProducts ([12345, 55555]);
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


}