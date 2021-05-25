const Handler = require('./Handler');
const DiseaseSeverity = require('./DiseaseSeverity');

class GeneralDoctor extends Handler {

    handlePatient(patient) {

        super.handlePatient(patient);

        if (patient.diseaseSeverity === DiseaseSeverity.MODERATE) {
            console.log("Diagnose the Patient " + patient.name + " by the General Doctor \n");
        } else {
            console.log("Passing the Patient " + patient.name + " to Higher Authority from General Doctor");
            this.successor.handlePatient(patient);
        }

    }

}

module.exports = GeneralDoctor;