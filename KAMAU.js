
document.getElementById("commentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const now = new Date();
  const timeString = now.toLocaleString();

  const commentBox = document.createElement("div");
  commentBox.classList.add("comment");
  commentBox.innerHTML = `<p>“message”</p><span>-{name} | ${timeString}</span>`;

  document.getElementById("comments").appendChild(commentBox);

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
});
const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });