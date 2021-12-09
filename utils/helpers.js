module.exports = {
  format_name: (name) => {
    // Format date as MM/DD/YYYY
    return name.toLocaleDateString();
  },
  format_grade: (grade) => {
    // format large numbers with commas
    return grade.toLocaleString();
  },
  
};
