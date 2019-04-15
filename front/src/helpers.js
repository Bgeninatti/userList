function parseUser(userJson) {
  return {
    id: userJson.id,
    //id: userJson.id.value,
    email: userJson.email
  };
}

export function parseResponseJson(json) {
  return json.map(r => parseUser(r));
  //return json.results.map(r => parseUser(r));
}

export function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim()
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

