<template>
    <div class="container">
         <div class="card">
            <div class="card-header">
                <h4>
                  Students
                  <RouterLink to="/students/create" class="btn btn-primary float-end"> 
                    Add Student
                 </RouterLink>
                </h4>
          </div>
          <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Grade Average</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(student, index) in store.studentsData" :key="index">
                        <td>{{ student.id }}</td>
                        <td>{{ student.name }}</td>
                        <td>{{ student.department }}</td>
                        <td>{{ student.grade_average }}</td>
                        <td>
                            <RouterLink :to="{ path: '/students/' + student.id + '/edit' }"" class="btn btn-success ms-2">
                            Edit
                        </RouterLink>
                        <button type="button" class="btn btn-danger">
                            Delete
                        </button>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
    </div>
</template>

<script>
import {studentStore} from '@/stores/studentStore'

export default {
    name: 'student',
    data() {
        return {
            store: studentStore()
        }
    },
    mounted() {
        this.store.getStudent()
    }

}
</script>


//option api. thead sürun başliklari(id,name,department)
//v-for elemanlari sirayla dolaşarak ekrana verir. tbody + v-for her öğrenci için bir satir üretir.

//students:[] reaktif state:API den gelen öğrenci listesi

//this.getStudents() bileşen DOM a bağlaninca api çağrisi yapar
//this.students = res.data yaniti reaktif state e atar
//axios api in urlsine get isteği atar. gelen json this.students a atanir.vue otomatik olarak v-for döngüsünü günceller ve tablo dolar
//axios rest api lerle iletişim yapmak için kullanilir. http istamci kütüphanesi
//res response
