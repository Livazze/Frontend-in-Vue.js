import { defineStore } from 'pinia'
import { ref } from 'vue'

const VITE_API_URL = import.meta.env.VITE_API_URL;
 
export const studentStore = defineStore('student', () => {
    const studentsData = ref([])

    function getStudent() {
        return fetch('${VITE_API_URL}/api/students')
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
        return fetch('${VITE_API_URL}/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        }).then(res => {
            if (!res.ok) throw new Error('fetch error')
            return res.json()
        })
    }

    // edit kısmı için id ile tek öğrenci getirir
    function getStudentById(id) {
        return fetch(`${VITE_API_URL}/api/students/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('student not found')
                return res.json()
            })
    }

    // editte öğrenciyi günceller
    function updateStudent(id, studentData) {
        return fetch(`${VITE_API_URL}/api/students/${id}`, {
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