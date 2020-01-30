# hello-world-firebase
Sample firebase agent and function
1. Create a Dialogflow Agent
2. Go to the Dialogflow settings > Export and Import > And Import the sample agent to Dialogflow
3. Go to the Dialogflow settings > General > Click on the GOOGLE PROJECT Project ID "Google Cloud" link
4. Go to the Navigation Menu > APIs & Services > Credentials
5. Go to the OAuth 2.0 Client IDs > New Actions on Google App > Copy the Client ID 
6. Replace <<CLIENT_ID>> with the Client ID you just copied
   note: Your client ID should like like "123445678974-pefrbbng4er1u841sivb1il15vdfcl5c.apps.googleusercontent.com" 

To test locally (make sure you're inside the functions folder)
1. Open a terminal > Type firebase emulators:start
2. Open a terminal > Type npm run tunnel
3. Firebase will supply you with a url that will look like http://localhost:5001/<<YOUR_PROJECT_NAME>>/<<YOUR_PROJECT_REGION>>/dialogflowFirebaseFulfillment
4. Ngrok will supply you with a url that will look like this https://515fee51.ngrok.io
5. Replace http://localhost:5001/ with https://515fee51.ngrok.io sample-nfwbyf/us-central1/dialogflowFirebaseFulfillment
6. Go to Dialogflow > Fulfillment > Then paste the new url in the Webhook

That's it!!!

To Account Link
https://developers.google.com/assistant/identity/google-sign-in

