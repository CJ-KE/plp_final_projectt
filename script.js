function searchCourses() {
    let query = document.getElementById('search').value;
    alert('Search for: ' + query);
}

function showMoreCourses() {
    let courseList = document.getElementById('courseList');
    let extraCourses = [
        'Python for Everybody',
        'AI & Machine Learning',
        'Cybersecurity Basics',
        'Front-End Web Development'
    ];
    extraCourses.forEach(course => {
        let div = document.createElement('div');
        div.className = 'course-card';
        div.textContent = course;
        courseList.appendChild(div);
    });
    document.getElementById('showMore').style.display = 'none';
}

function toggleDropdown() {
    let dropdown = document.getElementById('exploreDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
function hideDropdown() {
    let dropdown = document.getElementById('exploreDropdown');
    dropdown.style.display = 'none';
}