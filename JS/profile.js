window.addEventListener('load', function () {
    const profileContainer = document.getElementById('profileContainer');
    const profileInfo = document.getElementById('profileInfo');
    const editProfileForm = document.getElementById('editProfileForm');
    const editProfileButton = document.getElementById('editProfileButton');
    const cancelEditButton = document.getElementById('cancelEditButton');

    editProfileButton.addEventListener('click', function () {
        profileInfo.style.display = 'none';
        editProfileForm.style.display = 'block';
    });

    cancelEditButton.addEventListener('click', function () {
        profileInfo.style.display = 'block';
        editProfileForm.style.display = 'none';
        editProfileForm.reset();
    });

    editProfileForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(editProfileForm);
        const user = {};

        for (let [key, value] of formData.entries()) {
            user[key] = value;
        }

        // Update the profile information
        document.getElementById('firstName').textContent = user.editFirstName;
        document.getElementById('lastName').textContent = user.editLastName;
        document.getElementById('username').textContent = user.editUsername;
        document.getElementById('email').textContent = user.editEmail;

        // Do something with the user object, e.g., send it to a server

        profileInfo.style.display = 'block';
        editProfileForm.style.display = 'none';
        editProfileForm.reset();
    });
});

