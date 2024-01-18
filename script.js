document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    const lines = textElement.innerHTML.split('<br>');
    let lineIndex = 0;
    let charIndex = 0;

    function type() {
        textElement.innerHTML = lines[lineIndex].substring(0, charIndex);
        charIndex++;

        if (charIndex <= lines[lineIndex].length) {
            setTimeout(type, 100); // Adjust typing speed (milliseconds)
        } else if (lineIndex < lines.length - 1) {
            lineIndex++;
            charIndex = 0;
            setTimeout(type, 500); // Adjust delay between lines (milliseconds)
        } else {
            // Append the already typed lines to the existing HTML content
            textElement.innerHTML += lines.slice(1).join('<br>'); // Skip the first line (already typed)
        }
    }

    type();
});
