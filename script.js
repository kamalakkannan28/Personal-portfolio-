// Select all buttons
const buttons = document.querySelectorAll('.button-container button');

buttons.forEach(btn => 
{
btn.addEventListener('click', () => 
{
const targetId = btn.getAttribute('data-target');
// Hide all sections
document.querySelectorAll('section').forEach(sec => 
{
sec.style.display = 'none';
}
);
// Show the clicked section
const targetSection = document.getElementById(targetId);
if (targetSection) 
{
targetSection.style.display = 'block';
targetSection.scrollIntoView({ behavior: 'smooth' });
}
});
});
