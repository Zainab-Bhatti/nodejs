const students = [
  {
    name: "Muhammad",
    degree: "bscs",
    level:"Graduated",
    city:"Peshawar"
  },
  {
    name: "Nabeel",
    degree: "bscs",
    level:"semester-6",
    city:"karachi"
  
  },
  {
    name: "Mubara",
    degree: "bscs",
    level:"semester-7",
    city:"Lahore"
  
  },
];

const studentModal = {
  getAll: () => {
  return students;
  },
};

export default studentModal;
