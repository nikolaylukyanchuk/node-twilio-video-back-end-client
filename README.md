nodejs twilio-video back-end client
===============

This is realisation how we can use twilio video library on back-end

please see (https://github.com/twilio/twilio-video.js) the original browser library for additional details

# Getting Started

## Prerequisites

* wrtc (https://github.com/js-platform/node-webrtc/)

## Twilio video tokens

Setup twilio tokens

* account_sid               ACCOUNT SID - get from you account settings
* api_key                   API KEY SID - get from api settings
* api_secret                API KEY SECRET - get from api settings when you create api key
* configuration_profile_sid RTC PROFILE SID - get from video profile
* auth_token                AUTH TOKEN - get from you account settings

## Install

The easiest way to install all dependencies is via npm:

````
npm install
````

## Run

```
npm run start
```

### Logs

```text
2017-03-09 10:27:54.630Z | INFO in [LocalParticipant #1]: Created a new Participant
2017-03-09 10:27:54.630Z | INFO in [Client #1]: Getting ICE servers
2017-03-09 10:27:55.310Z | INFO in [Client #1]: Got ECS configuration
2017-03-09 10:27:55.312Z | INFO in [Client #1]: Got ICE servers
2017-03-09 10:27:55.312Z | INFO in [Client #1]: Got ICE servers
2017-03-09 10:27:56.496Z | INFO in [Room #1: RMe161e9d572f202aaa0c6c21277bed2af]: Created a new Room: test-room
2017-03-09 10:27:56.497Z | INFO in [Client #1]: Connected to Room: [Room #1: RMe161e9d572f202aaa0c6c21277bed2af]
2017-03-09 10:27:56.497Z | INFO in [Client #1]: Room name: test-room
```
