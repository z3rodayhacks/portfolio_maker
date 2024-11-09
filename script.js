document.getElementById('portfolio-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession').value;
    const bio = document.getElementById('bio').value;

    document.getElementById('portfolio-name').innerText = name;
    document.getElementById('portfolio-age').innerText = age;
    document.getElementById('portfolio-profession').innerText = profession;
    document.getElementById('portfolio-bio').innerText = bio;

    document.getElementById('portfolio').classList.remove('hidden');
});
