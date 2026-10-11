<template>

    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit Student</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.student.name" class="form-control"/>
                </div>
                 <div class="mb-3">
                    <label for="">Department</label>
                    <select v-model.number="model.student.department_id" class="form-select">
                        <option :value="null" disabled>Select a deparment</option>
                        <option :value="1">YBS</option>
                        <option :value="2">Software</option>
                        <option :value="3">Computer</option>
                    </select>
                </div>        
                 <div class="mb-3">
                    <label for="">Grade Average</label>
                    <input type="number" step="0.01" v-model="model.student.grade_average" class="form-control"/>
                </div> 
                 <div class="mb-3">
                    <button type="button" @click="updateStudent" class="btn btn-primary">Update</button>
                </div>               
            </div>
        </div>
    </div>
</template>

//webten eklediklerimi db ye kaydekmet için

<script>
export default {
  name: 'studentEdit',
  data() {
    return {
      studentId: null,
      model: {
        student: {
          name: '',
          department_id: null,
          grade_average: null
        }
      }
    }
  },
  mounted() {
    this.studentId = this.$route.params.id; // URL'deki id'yi alır
    this.getStudentsData(this.studentId);    // Mevcut öğrenci verisini backend'den çeker
  },
  methods: {
    async getStudentsData(id) {
      try {
        const res = await fetch('https://student-api-ux6q.onrender.com/api/students' + id);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        this.model.student = {
          name: data.name,
          department_id: data.department_id,
          grade_average: data.grade_average
        };
      } catch (err) {
        console.error('student retrieval error:', err);
        alert('student information could not be loaded.');
      }
    },

    async updateStudent() {
      try {
        const rest = await fetch('https://student-api-ux6q.onrender.com/api/students' + this.studenId, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.model.student)
        });
        if(!res.ok) throw new Error('HTTP' + res.status);
        alert('The student was successfully updated.');
        this.$router.push('/students');
      } catch (err) {
        console.error('update error:', err);
        alert('an error occurred while updating the student.');
      }
    }
  }
}
</script>