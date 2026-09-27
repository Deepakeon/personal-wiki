// Reusable quiz component for interactive retrieval practice
function selectOption(btn, isCorrect, explanation) {
  const container = btn.closest('.quiz-container');
  const options = container.querySelectorAll('.quiz-option');
  const feedback = container.querySelector('.feedback');
  
  options.forEach(opt => {
    opt.style.pointerEvents = 'none';
    opt.style.opacity = '0.7';
  });
  
  if (isCorrect) {
    btn.style.backgroundColor = '#d4edda';
    btn.style.borderColor = '#28a745';
    btn.style.color = '#155724';
    btn.style.opacity = '1';
    btn.style.fontWeight = 'bold';
    feedback.innerHTML = `<strong>Correct:</strong> ${explanation}`;
    feedback.style.backgroundColor = '#d4edda';
    feedback.style.color = '#155724';
    feedback.style.border = '1px solid #c3e6cb';
  } else {
    btn.style.backgroundColor = '#f8d7da';
    btn.style.borderColor = '#dc3545';
    btn.style.color = '#721c24';
    btn.style.opacity = '1';
    feedback.innerHTML = `<strong>Incorrect:</strong> ${explanation}`;
    feedback.style.backgroundColor = '#f8d7da';
    feedback.style.color = '#721c24';
    feedback.style.border = '1px solid #f5c6cb';
  }
  feedback.style.display = 'block';
}
