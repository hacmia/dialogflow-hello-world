'use strict';
const { dialogflow,SimpleResponse,BasicCard,Image,Suggestions,MediaObject,SignIn,Permission } = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({debug:true, clientId: '<<CLIENT_ID>>'});

// https://7bb8f9be.ngrok.io/sample-nfwbyf/us-central1/dialogflowFirebaseFulfillment
// https://us-central1-sample-nfwbyf.cloudfunctions.net/dialogflowFirebaseFulfillment

// app.middleware(async(conv) => {

// });

app.intent('Default Fallback Intent', async (conv, params, signin) => {
    conv.ask(new SimpleResponse({
        speech: 'Hello Fallback Intent SimpleResponse speech',
        text: 'Hello Fallback Intent SimpleResponse text'
    }));
    conv.ask(new BasicCard({
        title: 'Hi this is my Fallback BasicCard title',
        subtitle: 'Hi this is my Fallback BasicCard sub title',
        text: 'This is my FallbackBasicCard text'
    }));
});

app.intent('Default Welcome Intent', async (conv, params, signin) => {
    conv.ask(new SimpleResponse({
        speech: `Hi, Welcome to this application. Here I can help you get basic information. If you want to test an intent that requires you to link your google account with this application, say "Do Something".`,
        text: 'Hi...'
    }));
    conv.ask(new BasicCard({
        title: 'Welcome',
        subtitle: 'How are you today you rock star?',
        text: `Hi, Welcome to this application. Here I can help you get basic information. If you want to test an intent that requires you to link your google account with this application, say "Do Something".`
    }));

});

app.intent('Do Something', async (conv) => {
    const payload = conv.user.profile.payload;
    conv.data.current_intent = 'do_something';
    if (payload === undefined) {
        conv.followup('sign_in');
    } else {
        conv.ask(new SimpleResponse({
            speech: `Hey ${payload.given_name}, Let's do something now.`,
            text: 'Hi...'
        }));
        conv.ask(new BasicCard({
            title: 'Welcome',
            subtitle: 'How are you today you rock star?',
            text: `Hey ${payload.given_name}, Let's do something now.`
        }));
    }
});

app.intent('Start Signin', (conv) => {
    conv.ask(new SignIn('To get your account details'));
});

app.intent('Get Signin', (conv, params, signin) => {
    if (signin.status === 'OK') {
        conv.followup('do_something');
        // createUserInfo(payload.given_name,'GOOGLE_SAMPLE_'+payload.sub);
    } else {
      conv.ask(`I won't be able to save your data, but what do you want to do next?`);
    }
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);