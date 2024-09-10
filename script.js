document.addEventListener('DOMContentLoaded', function() {
    // delete button dito
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirect to delete the task
                    window.location.href = `notes.php?delete=${index}`;
                }
            });
        });
    });

    // sweetalert here
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    if (status) {
        if (status === 'added') {
            Swal.fire({
                icon: 'success',
                title: 'Task Added',
                text: 'Your task has been added successfully!',
                confirmButtonText: 'OK'
            });
        } else if (status === 'deleted') {
            Swal.fire({
                icon: 'success',
                title: 'Task Deleted',
                text: 'Your task has been deleted successfully!',
                confirmButtonText: 'OK'
            });
        }

        window.history.replaceState({}, document.title, window.location.pathname);
    }
});
