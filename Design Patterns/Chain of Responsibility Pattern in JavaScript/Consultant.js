const Handler = require('./Handler');
const DiseaseSeverity = require('./DiseaseSeverity');

class Consultant extends Handler {

    handlePatient(patient) {

        super.handlePatient(patient);

        if (patient.diseaseSeverity === DiseaseSeverity.CRITICAL) {
            console.log("Diagnose the Patient " + patient.name + " by the Consultant \n");
        }

    }

}

module.exports = Consultant;