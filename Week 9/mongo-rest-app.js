const express=require('express');
const mongooes=require('mongoose');

const app=express();
const port=3000;

app.use(express.json());

const dbURL='mongodb://127.0.0.1:27017/mydatabase';

mongooes.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})

.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:',err);
}); 
const studentSchema=new mongooes.Schema({
    name:{type:String,required:true},
    rollNumber:{type:Number,required:true, unique:true},
    course:String,
    isActive:{type:Boolean,default:true}
});

const student=mongooes.model('Student',studentSchema);

app.post('/students',async(req,res)=>{
    try{
        const newStudent=new student(req.body);
        const savedStudent=await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        res.status(400).json({ message: "Error saving student", error: err.message });
    }
});

app.get('/students',async(req,res)=>{
    try{
        const students=await student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: "Error fetching students", error: err.message });
    }
});

app.put('/students/:id',async(req,res)=>{
    try{
        const updatedStudent=await student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updatedStudent){
            return res.status(404).json({ message: "Student not found" });
        } 
    } 
    catch (err) {
        res.status(400).json({ message: "Error updating student", error: err.message });
    }   
});

app.delete('/students/:id',async(req,res)=>{
    try{
        const deletedStudent=await student.findByIdAndDelete(req.params.id);
        if(!deletedStudent){
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting student", error: err.message });
    }
});

app.listen(port,()=>{})