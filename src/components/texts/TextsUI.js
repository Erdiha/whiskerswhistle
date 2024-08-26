const FirstLandingText = "An estimated 10 million animals die from abuse or cruelty every year in the United States.";

const AboutUsText = {
  title: "Advocating for Abused and Voiceless Pets",
  body: {
    header: "Our mission is to combat animal abuse and neglect. In the USA, millions of pets suffer from mistreatment each year, with insufficient legal protections in place.",
    main:
    {
      title: "Abuse Comes in Many Forms:",
      body: ["Lack of stringent laws preventing abusers from acquiring pets.",
        "Inadequate protection for pets against neglect and abandonment.",
        "Abandonment due to pets' age or disabilities.",
        "Neglect of basic needs like food, shelter, and medical care.",
        "Physical harm or cruelty."]
    }

  },
  footer: "We can minimize harm by informing shelters and breeders about malicious individuals."
}

const SecondLandingText = {
  titles:
    { main: 'HOW DOES IT WORK?', subtitles: { first: "How the reports work?", second: 'How Can You Access the Data?' } },
  body: {
    first: "We collect reports from shelters, animal owners, and eyewitnesses.Each claim is thoroughly investigated, and upon validation, the data is stored in our database for access by breeders and shelters.",
    second: " You can click on the contact us page and send us your inquiries. Provide the information asked. We will get in touch with code or link for you to use to access the database. Once you have access to the database, you can use the search function to look up names. If the name is in the database, you will get the result; otherwise, you will be prompted as 'No Data Found.'"
  }
}

const mockData = {
  id: 1000, name: 'James Butt',
  country: { name: 'Algeria', code: 'dz' },
  company: 'Benton, JohnB Jr', date: '2015 -09 - 13', status: 'unqualified', verified: true, activity: 17, representative:
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' }, balance: 70663
}
const mockOTP = [
  "A1B2C3",
  "D4E5F6",
  "G7H8I9",
  "J0K1L2",
  "b2c3",
  "P6Q7R8",
  "S9T0U1",
  "V2W3X4",
  "Y5Z6A7",
  "B8C9D0"
];



export { AboutUsText, FirstLandingText, SecondLandingText, mockData, mockOTP };

