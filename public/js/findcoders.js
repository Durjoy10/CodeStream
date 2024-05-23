


document.addEventListener('DOMContentLoaded', function () {
    const profiles = [
        
        // Add profiles here...
        { name: 'Akaid Islam', id: '201-15-12345', batch: '55th', email: 'akaid@diu.edu.bd', phone: '+1234567890', telegram: '@akaid' ,image: 'profile-images/profile1.svg' },
        { name: 'Durjoy Dey', id: '201-15-12346', batch: '24th', email: 'durjoy@diu.edu.bd', phone: '+1234567890', telegram: '@durjoy' ,image: 'profile-images/profile1.svg' },
        { name: 'Abir Roy', id: '201-15-12347', batch: '24th', email: 'abir@diu.edu.bd', phone: '+1234567890', telegram: '@abir' ,image: 'profile-images/profile1.svg' },
        { name: 'Bitan Halder', id: '201-15-12348', batch: '24th', email: 'bitan@diu.edu.bd', phone: '+1234567890', telegram: '@bitan' ,image: 'profile-images/profile1.svg' },
        { name: 'Shovon Ahmed', id: '201-15-12349', batch: '25th', email: 'shovon@diu.edu.bd', phone: '+1234567890', telegram: '@shovon' ,image: 'profile-images/profile1.svg' },
        { name: 'Shafin Ahmed', id: '201-15-12350', batch: '25th', email: 'shafin@diu.edu.bd', phone: '+1234567890', telegram: '@shafin' ,image: 'profile-images/profile1.svg' },
        { name: 'Shihab Sarker', id: '201-15-12351', batch: '25th', email: 'shihab@diu.edu.bd', phone: '+1234567890', telegram: '@shihab' ,image: 'profile-images/profile1.svg' },
        { name: 'Kazi Ashik', id: '201-15-12352', batch: '25th', email: 'ashik@diu.edu.bd', phone: '+1234567890', telegram: '@ashik' ,image: 'profile-images/profile1.svg' }
    ];

    const container = document.getElementById('profile-container');

    profiles.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-3';

        card.innerHTML = `
            <div class="card profile-card">
                <div class="card-body">
                    <img src="${profile.image}" class="card-img-top rounded-circle mx-auto mt-3" style="width: 100px; height: 100px;" alt="${profile.name}">
                    <h5 class="card-title">${profile.name}</h5>
                    <p class="card-text">Student ID: ${profile.id}</p>
                    <p class="card-text">Batch: ${profile.batch}</p>
                    <button type="button" class="btn btn-primary contact-btn" data-bs-toggle="modal" data-bs-target="#contactModal" data-email="${profile.email}" data-phone="${profile.phone}" data-telegram="${profile.telegram}">Contact</button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // Function to populate contact details modal
    const contactModal = document.getElementById('contactModal');
    contactModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const email = button.getAttribute('data-email');
        const phone = button.getAttribute('data-phone');
        const telegram = button.getAttribute('data-telegram');
        const modalBody = contactModal.querySelector('.modal-body');

        let contactDetailsHTML = '<p>To Contact Please Follow Any</p>';
        if (email) {
            contactDetailsHTML += `<p>Email: ${email}</p>`;
        }
        if (phone) {
            contactDetailsHTML += `<p>Phone: ${phone}</p>`;
        }
        if (telegram) {
            contactDetailsHTML += `<p>Telegram: ${telegram}</p>`;
        }

        modalBody.innerHTML = contactDetailsHTML;
    });
});


function openJoinModal() {
    document.getElementById('joinModal').style.display = 'block';
}

function closeJoinModal() {
    document.getElementById('joinModal').style.display = 'none';
}