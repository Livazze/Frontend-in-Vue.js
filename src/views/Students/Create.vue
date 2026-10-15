<template>

    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Student</h4>
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
                    <button type="button" @click="saveStudent" class="btn btn-primary">Save</button>
                </div>               
            </div>
        </div>
    </div>
</template>

//webten eklediklerimi db ye kaydekmet için

<script>

export default {
    name: 'studentCreate',
    data(){
        return {
            model: {
                student: {
                    name: '',
                    department_id: null,
                    grade_average: null
                }
            }
        }
    },

    methods: {
        async saveStudent(){
            try {
                const res = await fetch('http://127.0.0.1:3000/api/students', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.model.student)
                });
                if (!res.ok) throw new Error('HTTP ' + res.status);
                const data = await res.json();
                console.log(data);
                alert('The student was successfully added.');

                this.model.student = {
                    name: '',
                    department_id: null,
                    grade_average: null
                }
            } catch (err) {
                console.error('student addition error:', err);
                alert('an error occurred while adding the student.');
            }
        }
    },
}

</script>


