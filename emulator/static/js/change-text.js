function changeText(element, promptMessage) {
    const newText = prompt(promptMessage);
    if (newText !== null) {
        element.textContent = newText;
    }
}

function selectImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const image = document.getElementById('product-image');
                image.src = e.target.result;
            }

            reader.readAsDataURL(file);
        }
    });

    input.click();
}