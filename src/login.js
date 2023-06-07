import { userData } from './transfer2.js';
const exportedVariables = userData()
if (exportedVariables) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    if (exportedVariables.nombreCliente == "Micaela Cuto") {
        Toast.fire({
            icon: 'success',
            title: 'Bienvenida, belleza correntina, y buenos días!'
        })
    } else {
        Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
        })
    }
}