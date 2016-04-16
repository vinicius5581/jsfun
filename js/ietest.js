var msIE = false,
    UA = window.navigator.userAgent,
    oldIE,
    newIE;

oldIE = UA.indexOf('MSIE ');
newIE = UA.indexOf('Trident/');

if ((oldIE > -1) || (newIE > -1)) {
  msIE = true;
}
if (msIE) {
  $('body').addClass('ie-fix');
} else {
  $('body').addClass('no-ie-fix');
}