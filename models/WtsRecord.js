const mongoose = require('mongoose');
const { Schema } = mongoose; 

const wtsRecordSchema = new Schema({
    id: Number, 
    recordName: String, 
    branch: String, 
    employee: String, 
    recordType: String, 
    controlNumber: String, 
    deadline: String
});

mongoose.model('wtsrecords', wtsRecordSchema);
