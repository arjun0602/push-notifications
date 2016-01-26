/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

// Version 0.1

'use strict';

console.log('Started', self);
self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});
self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});

self.addEventListener('push', function(event) {
  console.log('Push message', event);
  var title = 'Oh Yeah';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: 'The Message body',
      icon: 'images/icon.png',
      tag: 'my-tag'
    }));
});










self.addEventListener('notificationclick', function(event) {
    console.log('Notification click: tag ', event.notification.tag);
    event.notification.close();
    var url = 'https://youtu.be/gYMkEMCHtJ4';
    event.waitUntil(
        clients.matchAll({
            type: 'window'
        })
        .then(function(windowClients) {
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});


// TODO




// AIzaSyB7ZTuniS4usBeydreyYsIhgdi2Y3Av_80
// cH-pciIrsdA:APA91bHkyAdXh7EjYwef0sd…AyjjcfB5Y82jP_p37ieY2mj8AV72SQrqGkf3eurL0fCmo443_N3LTnd_JdLcPIRYr7uKj4kPGO
// cH-pciIrsdA:APA91bHkyAdXh7EjYwef0sdF5GvM_8GfuhKtmQu0wmem3GP0gQCJT_wE7H4_xuOGDnAyjjcfB5Y82jP_p37ieY2mj8AV72SQrqGkf3eurL0fCmo443_N3LTnd_JdLcPIRYr7uKj4kPGO
// cH-pciIrsdA:APA91bHkyAdXh7EjYwef0sdF5GvM_8GfuhKtmQu0wmem3GP0gQCJT_wE7H4_xuOGDnAyjjcfB5Y82jP_p37ieY2mj8AV72SQrqGkf3eurL0fCmo443_N3LTnd_JdLcPIRYr7uKj4kPGO
// https://android.googleapis.com/gcm/send/cH-pciIrsdA:APA91bHkyAdXh7EjYwef0sdF5GvM_8GfuhKtmQu0wmem3GP0gQCJT_wE7H4_xuOGDnAyjjcfB5Y82jP_p37ieY2mj8AV72SQrqGkf3eurL0fCmo443_N3LTnd_JdLcPIRYr7uKj4kPGO
// e8V_-YnTdNs:APA91bHtBVGbzycn-A97JxoPOuuKFf2wz8umLVpBfYLkIi0Tn_DBp-i6IgdAbBcIGFytvOXvjRQvpY_ZkoTX7g2V2XXWRnpwStDzQTjuTILSt7Jyk0U7cCRjCJtwKjy1E5TABm4oZ-d3
