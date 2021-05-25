const Handler = require('./Handler');
const DiseaseSeverity = require('./DiseaseSeverity');

class TraineeDoctor extends Handler {

    handlePatient(patient) {

        super.handlePatient(patient);

        if (patient.diseaseSeverity === DiseaseSeverity.LOW) {
            console.log("Diagnose the Patient " + patient.name + " by the Trainee Doctor \n");
        } else {
            console.log("Passing the Patient " + patient.name + " to Higher Authority from Trainee Doctor");
            this.successor.handlePatient(patient);
        }

    }

}

module.exports = TraineeDoctor;