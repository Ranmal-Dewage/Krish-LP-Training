const Handler = require('./Handler');
const DiseaseSeverity = require('./DiseaseSeverity');

class SeniorDoctor extends Handler {

    handlePatient(patient) {

        super.handlePatient(patient);

        if (patient.diseaseSeverity === DiseaseSeverity.HIGH) {
            console.log("Diagnose the Patient " + patient.name + " by the Senior Doctor \n");
        } else {
            console.log("Passing the Patient " + patient.name + " to Higher Authority from Senior Doctor");
            this.successor.handlePatient(patient);
        }

    }

}

module.exports = SeniorDoctor;