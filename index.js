// Add your code here
function submitData(name, email) {
    const formData = {
        "name": name,
        "email": email,
    };
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };
    let resp = fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            //good resp
            document.body.innerHTML = document.body.innerHTML + object.id
        })
        .catch(function (error) {
            //bad resp
            document.body.innerHTML = document.body.innerHTML + error.message
        });
    return resp
}