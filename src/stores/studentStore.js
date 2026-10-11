import { defineStore } from 'pinia'
import { ref } from 'vue'

export const studentStore = defineStore('student', () => {
    const studentsData = ref([])

    
    function getStudent() {
        return fetch('https://student-api-ux6q.onrender.com')
            .then(res => {
                if (!res.ok) throw new Error('api error')
                return res.json()
            })
            .then(data => {
                studentsData.value = data
            })
            .catch(err => {
                console.error('data fetch error', err)
            })
    }

    // yeni öğrenci eklemek için
    function addStudent(studentData) {
        return fetch('https://student-api-ux6q.onrender.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        }).then(res => {
            if (!res.ok) throw new Error('fetch error')
            return res.json()
        })
    }

    // edit kısmı için id ile tek öğrenci getirr
    function getStudentById(id) {
        return fetch('https://student-api-ux6q.onrender.com' + id)
            .then(res => {
                if (!res.ok) throw new Error('student not found')
                return res.json()
            })
    }

    // editte  öğrenciyi gğnceller
    function updateStudent(id, studentData) {
        return fetch('https://student-api-ux6q.onrender.com' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        }).then(res => {
            if (!res.ok) throw new Error('update error')
            return res.json()
        })
    }

    return {
        studentsData,
        getStudent,
        addStudent,
        getStudentById,
        updateStudent
    }
})   