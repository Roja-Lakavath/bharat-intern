function showResume() {
    const resumeDiv = document.getElementById('resume');
    resumeDiv.classList.toggle('hidden');
}

function showContent(contentType) {
    // Hide all content
    const allContents = document.querySelectorAll('.content');
    allContents.forEach(content => content.style.display = 'none');

    // Show the selected content
    const selectedContent = document.querySelector(`.content.${contentType}`);
    selectedContent.style.display = 'block';
}
