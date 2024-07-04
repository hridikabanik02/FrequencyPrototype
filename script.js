/*document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function(menu) {
        menu.addEventListener('click', function(e) {
            e.stopPropagation();
            var target = e.target;
            if (target.tagName === 'A') {
                var btn = this.parentNode.querySelector('.dropdown-toggle');
                btn.textContent = target.textContent;
                btn.appendChild(document.createElement('span')).className = 'caret';
            }
        });
    });
});*/
document.addEventListener('DOMContentLoaded', function() {
    // Select all functionality
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function(menu) {
        menu.addEventListener('click', function(e) {
            e.stopPropagation();
            var target = e.target;
            if (target.tagName === 'A') {
                var btn = this.parentNode.querySelector('.dropdown-toggle');
                btn.textContent = target.textContent;
                btn.appendChild(document.createElement('span')).className = 'caret';
            }
        });
    });
    // Group change functionality
    document.querySelectorAll('.dropdown-menu a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const reason = this.textContent;
            const dropdownButton = this.closest('.dropdown').querySelector('.dropdown-toggle');
            dropdownButton.textContent = reason;
            dropdownButton.appendChild(document.createElement('span')).className = 'caret';
        });
    });

    // Change frequency for selected substructure
    function changeFrequencyForSubstructure(substructure, newFrequency) {
        document.querySelectorAll(`tr[data-substructure="${substructure}"] .frequency-cell`).forEach(cell => {
            cell.textContent = newFrequency;
        });
    }

    // Handle button click to change frequency
    document.getElementById('change-frequency-button').addEventListener('click', function() {
        const selectedSubstructure = document.getElementById('substructure-select').value;
        const newFrequency = document.getElementById('frequency-input').value;
        changeFrequencyForSubstructure(selectedSubstructure, newFrequency);
    });
});
