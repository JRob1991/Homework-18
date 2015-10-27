
function PersonTemp(data) {
  return `
    <li>${data.FirstName} ${data.LastName} is ${data.Age} years old and is employed as a ${data.Occupation}</li>
  `;
}

export default PersonTemp
