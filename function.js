var _last
function now() {
  var time = Date.now();

  var last = _last || time;

  if ( time > last )
    return _last = time

  return _last = last + 1;
}

console.log( now(), _last )

console.log( now(), _last )
