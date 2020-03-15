let getOut = {
    "id": "047bc58d-fc74-4b3b-972b-5e458b7fa166",
    "externalId": "100",
    "meta": {
        "version": 0,
        "created": "2019-12-11T10:40:18.180Z",
        "lastModified": "2019-12-11T10:40:18.180Z"
    },
    "userName": "baverka",
    "name": {
        "familyName": "Averka",
        "givenName": "Brad"
    },
    "emails": [
        {
            "value": "B.Averka@pwrr.com",
            "primary": false
        }
    ],
    "groups": [
        {
            "value": "20ef605e-2e7d-46e9-b378-f4876def9d1b",
            "display": "uaa.offline_token",
            "type": "DIRECT"
        },
        {
            "value": "128a967e-ffec-4987-bafb-98922cffccfc",
            "display": "scim.userids",
            "type": "DIRECT"
        },
        {
            "value": "048cc738-d9a8-408e-844d-f029a1ee305e",
            "display": "user_attributes",
            "type": "DIRECT"
        },
        {
            "value": "0e923183-e0e0-400a-8a47-f04e4606f268",
            "display": "password.write",
            "type": "DIRECT"
        },
        {
            "value": "91f24124-1d27-4ea4-8480-3db8af761b4e",
            "display": "scim.me",
            "type": "DIRECT"
        },
        {
            "value": "a23331da-e045-4a10-9b7e-d86a54ba3f6f",
            "display": "cloud_controller.write",
            "type": "DIRECT"
        },
        {
            "value": "e3f040e3-22b5-4d12-bb51-0c8620267d62",
            "display": "Customer:PANDW",
            "type": "DIRECT"
        },
        {
            "value": "6ae17b38-8ca7-4e8f-a9e5-55e37394907f",
            "display": "oauth.approvals",
            "type": "DIRECT"
        },
        {
            "value": "9f256923-5d7f-41d7-94d3-ee073b66091b",
            "display": "profile",
            "type": "DIRECT"
        },
        {
            "value": "19763938-c8f0-4328-aa70-fa278a400294",
            "display": "roles",
            "type": "DIRECT"
        },
        {
            "value": "b0b1b9c7-2792-4bf3-be63-e6539af3ac41",
            "display": "approvals.me",
            "type": "DIRECT"
        },
        {
            "value": "fe04a03a-a2af-43e9-a19d-adc41cf9d679",
            "display": "openid",
            "type": "DIRECT"
        },
        {
            "value": "d2eeec3d-c1b5-410f-9cf4-ddc988d1c676",
            "display": "cloud_controller.read",
            "type": "DIRECT"
        },
        {
            "value": "58b73226-3165-44a6-a305-8f883c125883",
            "display": "cloud_controller_service_permissions.read",
            "type": "DIRECT"
        },
        {
            "value": "ae1c5156-7d89-4815-93df-1031938d55ba",
            "display": "uaa.user",
            "type": "DIRECT"
        }
    ],
    "approvals": [],
    "phoneNumbers": [
        {
            "value": "508-865-7581"
        }
    ],
    "active": true,
    "verified": true,
    "origin": "uaa",
    "zoneId": "uaa",
    "passwordLastModified": "2019-12-11T10:40:18.000Z",
    "previousLogonTime": 1578885854007,
    "lastLogonTime": 1578899445304,
    "schemas": [
        "urn:scim:schemas:core:1.0"
    ]
};

// let filters = { "display": "Customer:"};
 let results = getOut.groups;

let matchValue = '';
let obj = results.find(o => {
  if(o.display.indexOf("Customer:") != -1){
     matchValue = o.display;
  }
});

let sp = matchValue.split(':');
console.log(sp[1]);
let final = sp[1];
console.log("Final ->", final);
