export function cookieExpireAfter(minutes) {
    var expireCookieTime = new Date();
    expireCookieTime.setMinutes(expireCookieTime.getMinutes() + minutes);
    return expireCookieTime
}