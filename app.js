const AccessToken = require('twilio').AccessToken;
const VideoGrant = AccessToken.VideoGrant;

const TWILIO = {
    "account_sid": "XXX", // ACCOUNT SID - get from you account settings
    "api_key": "XXX", //  API KEY SID - get from api settings
    "api_secret": "XXX", // API KEY SECRET - get from api settings when you create api key
    "configuration_profile_sid": "XXX", //RTC PROFILE SID - get from video profile
    "auth_token": "XXX" // auth TOKEN - get from you account settings
};

const identity = 'twilio-back-end';
const roomName = 'test-room';


// RTCPeerConnection.getRemoteStreams required by twilio video - just mock it!
const wrtc = require('wrtc');
wrtc.RTCPeerConnection.prototype.getRemoteStreams = function() {
  return [];
};

//required by twilio video - just move this to global scoepe
global.RTCIceCandidate = wrtc.RTCIceCandidate;
global.RTCPeerConnection = wrtc.RTCPeerConnection;
global.RTCSessionDescription = wrtc.RTCSessionDescription;


//after setup global variables, we can require video lib
const Video = require('twilio-video');

//create client
const clientTwilio = require('twilio')(TWILIO.account_sid , TWILIO.auth_token);

//generate token
const videoToken =  new AccessToken(
            TWILIO.account_sid,
            TWILIO.api_key,
            TWILIO.api_secret
          );

videoToken.identity = identity;

const grant = new VideoGrant();
grant.configurationProfileSid = TWILIO.configuration_profile_sid;
videoToken.addGrant(grant);

// token ready for usage

const clientVideo = new Video.Client(videoToken.toJwt(),
  {
    audio: false,
    video: false,
    logLevel: 'info'
  });


return clientVideo.connect({ to: roomName })
  .then(room => {
    room.participants.forEach(participant =>  console.log(`${participant.identity}`));

    room.on('participantConnected', participant => {
      console.log(`participantConnected: ${participant.identity}`)
    });

    room.on('participantDisconnected', participant => {
      console.log(`participantDisconnected: ${participant.identity}`)
    });
});