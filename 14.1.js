const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmDOM = parser.parseFromString(xmlString, "text/xml");

const list = xmDOM.querySelector("list");
const students = list.querySelectorAll("student");
const studentsList = [];

students.forEach ( eachStudent => {
  
  const name = eachStudent.querySelector("name");
  const lang = name.getAttribute("lang");
  const firstName = eachStudent.querySelector("first");
  const secondName = eachStudent.querySelector("second");
  const prof = eachStudent.querySelector("prof");
  const age = eachStudent.querySelector("age");
  
  studentsList.push ({
    name: firstName.textContent + ' ' +  secondName.textContent,
    prof: prof.textContent,
    age: Number(age.textContent),
    lang: lang,
  });
  
}); 
   const result = {
   List : studentsList
};
  console.log('result', result)