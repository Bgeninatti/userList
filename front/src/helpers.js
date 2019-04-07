function parseUser(userJson) {
  return {
    id: userJson.id,
    email: userJson.email
  };
}

export function parseResponseJson(json) {
  return json.map(r => parseUser(r));
}
