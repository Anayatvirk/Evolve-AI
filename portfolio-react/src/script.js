function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

function handleSubmit(e) {
  e.preventDefault();
  alert("Message sent (demo)");
}

