
const baseUrl = "http://localhost:3000/";

export const deleteImage = (imageId) => {
  fetch(baseUrl + 'images/' + imageId, {method: 'DELETE'})
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log(err));
};

export const getUserByEmail = (email, callback) => {
  fetch(baseUrl + 'users/' + email, {method: 'GET'})
    .then((res) => res.json())
    .then((json) => {
      callback(json);
    })
    .catch((err) => console.log(err));

};

export const createUser = (user, callback) => {
  fetch(baseUrl + 'users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((json) => {
      callback(json);
    })
    .catch((err) => console.log(err));
}

export const uploadImage = (photo, callback) => {
  fetch(baseUrl + 'images', {
    method: 'POST',
    body: JSON.stringify(photo),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((json) => {
      callback(json);
    })
    .catch((err) => console.log(err));
}

export const updateImage = (photo, callback) => {
  fetch(baseUrl + 'images/' + photo._id, {
    method: 'PUT',
    body: JSON.stringify(photo),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((json) => {
      callback(json);
    })
    .catch((err) => console.log(err));
}
