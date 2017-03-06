<a name="Memberships"></a>

## Memberships
**Kind**: global class  

* [Memberships](#Memberships)
    * [new Memberships()](#new_Memberships_new)
    * [.getMembershipGroups(params)](#Memberships+getMembershipGroups) ⇒ <code>Array</code>
    * [.getMemberships(params)](#Memberships+getMemberships) ⇒ <code>Array</code>
    * [.getListOfSubscriptions(token, params)](#Memberships+getListOfSubscriptions) ⇒ <code>Array</code>
    * [.getSubscription(token, id)](#Memberships+getSubscription) ⇒ <code>Object</code>
    * [.getListOfDownloads(token, id)](#Memberships+getListOfDownloads) ⇒ <code>Object</code>
    * [._isValidId(id)](#Memberships+_isValidId) ⇒ <code>Bool</code>
    * [._fetchRequest(url, token)](#Memberships+_fetchRequest) ⇒ <code>Promise</code>

<a name="new_Memberships_new"></a>

### new Memberships()
Memberships API JS client.

In order to use Memberships API you should create an instance of this class.
~~~~
import Memberships from "tm-memberships-api-client-js";
const products = new Memberships ('http://service-memberships.dev/api/v1', 'en');
~~~~

<a name="Memberships+getMembershipGroups"></a>

### memberships.getMembershipGroups(params) ⇒ <code>Array</code>
Return list of membership groups.

**Kind**: instance method of <code>[Memberships](#Memberships)</code>  
**Returns**: <code>Array</code> - <pre>[
  {
    "id":"1",
    "name":"Name",
    "active_icon":"http://s3.amazonaws.com/doc/2017-02-02/",
    "inactive_icon":"http://s3.amazonaws.com/doc/2017-02-02/",
    "type_id":"17763",
  }, ...]</pre>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Membership groups parameters <pre>   {    type_id: Number   } </pre> |

<a name="Memberships+getMemberships"></a>

### memberships.getMemberships(params) ⇒ <code>Array</code>
Return list of all membership plans.

**Kind**: instance method of <code>[Memberships](#Memberships)</code>  
**Returns**: <code>Array</code> - <pre>[
  {
   "id":"1",
   "title":"Premium",
   "descriptions":"Example description",
   "group_id":"1",
   "price": 199,
   "max_downloads":"10",
   "duration_days":"30",
   }, ...]</pre>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Membership group parameters <pre>   {    group_id: Number   } </pre> |

<a name="Memberships+getListOfSubscriptions"></a>

### memberships.getListOfSubscriptions(token, params) ⇒ <code>Array</code>
Return list of subscriptions
     .

**Kind**: instance method of <code>[Memberships](#Memberships)</code>  
**Returns**: <code>Array</code> - <pre>[
  {
   "id":"1",
   "membership": {
      "id":"1",
      "title":"Premium",
      "descriptions":"Example description",
      "group_id":"1",
      "price": 199,
      "max_downloads":"10",
      "duration_days":"30",
   },
   "user_id":"12345",
   "status":"active"
   "end_date":"1038444",
   "downloads":"0",
   "downloads_quota": 100,
  }, ...]</pre>  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | User token |
| params | <code>Object</code> | Membership groups parameters <pre>   {    status : String,    membership_id : Number,    group_id : Number   } </pre> |

<a name="Memberships+getSubscription"></a>

### memberships.getSubscription(token, id) ⇒ <code>Object</code>
Return subscription
     .

**Kind**: instance method of <code>[Memberships](#Memberships)</code>  
**Returns**: <code>Object</code> - <pre>{
 "id":"1",
 "membership": {
   "id":"1",
   "title":"Premium",
   "descriptions":"Example description",
   "group_id":"1",
   "price": 199,
   "max_downloads":"10",
   "duration_days":"30",
 },
 "user_id":"12345",
 "status":"active"
 "end_date":"1038444",
 "downloads":"0",
 "downloads_quota": 100,
}</pre>  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | User token |
| id | <code>Number</code> | User id |

<a name="Memberships+getListOfDownloads"></a>

### memberships.getListOfDownloads(token, id) ⇒ <code>Object</code>
Return list of downloads.

**Kind**: instance method of <code>[Memberships](#Memberships)</code>  
**Returns**: <code>Object</code> - <pre>{
"currentPageIndex":1,
"totalCount":11,
"lastPageIndex":6,
"items": [
  {
    "id":"1",
    "product_id":"143142",
    "created_at":"12345"
  }, ...]
 }</pre>  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | User token |
| id | <code>Number</code> | Product id |

<a name="Memberships+_isValidId"></a>

### memberships._isValidId(id) ⇒ <code>Bool</code>
Return Correct id or not

**Kind**: instance method of <code>[Memberships](#Memberships)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | Product id |

<a name="Memberships+_fetchRequest"></a>

### memberships._fetchRequest(url, token) ⇒ <code>Promise</code>
Return Fetch Promise

**Kind**: instance method of <code>[Memberships](#Memberships)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | Where request go |
| token | <code>String</code> | auth user token |

