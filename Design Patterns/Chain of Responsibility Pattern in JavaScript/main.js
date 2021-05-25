const Handler = require('./Handler');
const DiseaseSeverity = require('./DiseaseSeverity');
const TraineeDoctor = require('./TraineeDoctor');
const GeneralDoctor = require('./GeneralDoctor');
const SeniorDoctor = require('./SeniorDoctor');
const Consultant = require('./Consultant');
const Patient = require('./Patient');


const traineeDoctor = new TraineeDoctor();
const generalDoctor = new GeneralDoctor();
const seniorDoctor = new SeniorDoctor();
const consultant = new Consultant();


traineeDoctor.successor = generalDoctor;
generalDoctor.successor = seniorDoctor;
seniorDoctor.successor = consultant;


const p1 = new Patient("Avishka", DiseaseSeverity.LOW, 28);
traineeDoctor.handlePatient(p1);

const p2 = new Patient("Dilum", DiseaseSeverity.MODERATE, 40);
traineeDoctor.handlePatient(p2);

const p3 = new Patient("naduni", DiseaseSeverity.HIGH, 52);
traineeDoctor.handlePatient(p3);

const p4 = new Patient("Kanthi", DiseaseSeverity.CRITICAL, 78);
traineeDoctor.handlePatient(p4);