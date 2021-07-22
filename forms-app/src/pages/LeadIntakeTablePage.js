import { LeadIntakeTable } from "../components/LeadIntakeTable";

const dummyData = [
  {
    "id": 1,
    "fullName": "John Smith",
    "nNumber": "n1244245",
    "agencyEmail": "jonny@example.com",
    "agencyPhoneNumber":"2344454322",
    "insuredName":"Cabinet",
    "firstName":"Sam",
    "lastName": "Dwane",
    "customerPhoneNumber": "3456789023",
    "streetAddress":"123 NW Tuxedo",
    "city":"Seattle",
    "state": "WA",
    "customerEmailAddress":"Sam.D@example.com",
    "descBusinessOperation":"This is the place to store business operation",
    "typeOfQuote":"Auto",
    "coverages": ["Property","Auto"],
    "blscRepName":"Johnny",
    "formType":"Call transferred to BLSC. I will warm transfer my customer to the BLSC (844-219-6911) or am already working with the BLSC on this customer. (You MUST tell the agent that you've clicked submit so they can find this referral."
  },{
    "id": 2,
    "fullName": "Olive Yew",
    "nNumber": "n1244245",
    "agencyEmail": "olive@example.com",
    "agencyPhoneNumber":"2344454322",
    "insuredName":"Cabinet",
    "firstName":"Aida",
    "lastName": "Bugg",
    "customerPhoneNumber": "3456789023",
    "streetAddress":"234 N Scylla",
    "city":"Tacoma",
    "state": "WA",
    "customerEmailAddress":"Aida.B@example.com",
    "descBusinessOperation":"This is the place to store business operation",
    "typeOfQuote":"Auto",
    "coverages": ["Property","Auto", "General Liability"],
    "blscRepName":"Olive",
    "formType":"Call transferred to BLSC. I will warm transfer my customer to the BLSC (844-219-6911) or am already working with the BLSC on this customer. (You MUST tell the agent that you've clicked submit so they can find this referral."
  },
  {
    "id": 3,
    "fullName": "Patty O'Furniture",
    "nNumber": "n1244245",
    "agencyEmail": "Patty@example.com",
    "agencyPhoneNumber":"2344454322",
    "insuredName":"Cabinet",
    "firstName":"Allie",
    "lastName": "Grater",
    "customerPhoneNumber": "3456789023",
    "streetAddress":"234 NE Malcolm",
    "city":"Flushing",
    "state": "NY",
    "customerEmailAddress":"Allie.G@example.com",
    "descBusinessOperation":"This is the place to store business operation",
    "typeOfQuote":"Auto",
    "coverages": ["Property","General Liability"],
    "blscRepName":"Patty",
    "formType":"Call NOT transferred to BLSC. I would like the first available Business Lines sales representative to contact my customer."
  }
]

export const LeadIntakeTablePage = () => {

  const deleteRow = (event) => {
    console.log(event.target.id);
  }

  return (
    <div>
      <header>
        <h1>Small Commercial Lead Intake Table</h1>
      </header>
      <p>Here is a list of the lead intakes!</p>
      <LeadIntakeTable leadIntakeData={dummyData} deleteRow={deleteRow}/>
    </div>
  );

};
