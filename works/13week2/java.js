function transformName(name) {
    name = name.trim();
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return name;
  }
  
  function checkSpam(str) {
    const spamWords = ["viagra", "xxx"];
    let result = str;
    spamWords.forEach((word) => {
      const regex = new RegExp(word, "gi");
      result = result.replace(regex, "***");
    });
    return result;
  }
  
  function getRandomAvatar() {
    const avatars = [
      "https://www.example.com/avatar1.png",
      "https://www.example.com/avatar2.png",
      "https://www.example.com/avatar3.png",
      "https://www.example.com/avatar4.png",
      "https://www.example.com/avatar5.png",
      "https://www.example.com/avatar6.png",
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
  }
  
  function addComment() {
    const nameField = document.getElementById("name");
    const avatarField = document.getElementById("avatar");
    const messageField = document.getElementById("message");
    const showNameYes = document.getElementById("showNameYes");
    const showNameNo = document.getElementById("showNameNo");
  
    let name = showNameYes.checked
      ? transformName(nameField.value) || "username"
      : "username";
    const avatar = avatarField.value || getRandomAvatar();
    let message = checkSpam(messageField.value);
  
    const commentSection = document.getElementById("comments");
  
    const comment = document.createElement("div");
    comment.classList.add("comment");
  
    const avatarImg = document.createElement("img");
    avatarImg.src = avatar;
    comment.appendChild(avatarImg);
  
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;
    comment.appendChild(nameHeading);
  
    const dateSpan = document.createElement("span");
    const now = new Date();
    dateSpan.textContent = `(${now.toLocaleDateString()} ${now.toLocaleTimeString()})`;
    comment.appendChild(dateSpan);
  
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = message;
    comment.appendChild(messageParagraph);
  
    commentSection.appendChild(comment);
  
    nameField.value = "";
    avatarField.value = "";
    messageField.value = "";
  }
  