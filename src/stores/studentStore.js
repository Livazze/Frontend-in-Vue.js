import { defineStore } from 'pinia'
import { ref } from 'vue'

export const studentStore = defineStore('student', () => {
    const studentsData = ref([])

    
    function getStudent() {
        return fetch('http://localhost:3000/api/students')
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
        return fetch('http://localhost:3000/api/students', {
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
        return fetch('http://localhost:3000/api/students/' + id)
            .then(res => {
                if (!res.ok) throw new Error('student not found')
                return res.json()
            })
    }

    // editte  öğrenciyi gğnceller
    function updateStudent(id, studentData) {
        return fetch('http://localhost:3000/api/students/' + id, {
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