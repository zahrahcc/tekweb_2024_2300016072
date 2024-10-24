const body = document.body
document.title = 'Praktikum DOM'

const h2 = document.getElementsByTagName('h2')[0] // Mengambil tag h2 pertama
h2.style.color = 'brown' // Merubah warna teks
h2.innerHTML = 'My To-Do List' // Merubah teks h2
h2.style.fontFamily = 'tahoma' // Merubah font h2
h2.style.fontSize = '30px' // Merubah ukuran font h2

// Fungsi untuk menambahkan task
function addTask() {
    const newTask = document.getElementById('newTask').value

    if (newTask.trim() !== "") { // Mengecek apakah input tidak kosong
        const li = document.createElement('li') // Membuat elemen <li> baru

        const kalimatInput = document.createElement('input') // Membuat input untuk task
        kalimatInput.type = 'text'
        kalimatInput.value = newTask // Mengisi input dengan task baru
        kalimatInput.disabled = true // Menonaktifkan input awalnya

        // Tombol Edit
        const editButton = document.createElement('button')
        editButton.innerText = 'Edit'
        editButton.className = 'edit'
        editButton.onclick = function() {
            if (kalimatInput.disabled) {
                kalimatInput.disabled = false
                editButton.innerText = 'Save'
            } else {
                kalimatInput.disabled = true
                editButton.innerText = 'Edit'
            }
        }

        // Tombol Delete
        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        deleteButton.className = 'delete'
        deleteButton.onclick = function() {
            taskList.removeChild(li) // Menghapus <li> dari list
        }

        // Menambahkan input dan tombol ke dalam <li>
        li.appendChild(kalimatInput)
        li.appendChild(editButton)
        li.appendChild(deleteButton)

        // Menambahkan <li> ke dalam <ul>
        const taskList = document.getElementById('taskList')
        taskList.appendChild(li)

        // Mengosongkan input setelah task ditambahkan
        document.getElementById('newTask').value = ''
    } else {
        alert("Kalimat tidak boleh kosong!") // Pesan peringatan jika input kosong
    }
}