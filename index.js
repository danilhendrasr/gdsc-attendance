const attendance = [
  {
    id: 1,
    name: "John",
    social_link: "https://linkedin.com/in/john",
  },
  {
    id: 2,
    name: "John 2",
    social_link: "https://linkedin.com/in/john",
  },
];

const ol = document.querySelector("ol");

for (let i = 0; i < attendance.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = attendance[i].social_link;
  a.textContent = attendance[i].name;

  li.appendChild(a);
  ol.appendChild(li);
}
