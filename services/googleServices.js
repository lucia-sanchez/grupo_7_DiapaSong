const passport = require('passport');
const oAuth2Strategy = require('passport-google-oauth').OAuth2Strategy


const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const callbackURL = process.env.GOOGLE_REDIRECT_CALLBACK;

const strategyConfig = new oAuth2Strategy({
    clientID,
    clientSecret,
    callbackURL,
    scope: ['profile']
    
},(accessToken,refreshToken,profile,done)=> {
    console.log(profile)

    done(null, profile)
})
module.exports= {
loginGoogleInitialize :()=> passport.use(strategyConfig)

}