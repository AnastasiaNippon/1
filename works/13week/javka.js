function calculateDays() {
    const birthdayInput = document.getElementById("birthday");
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    const birthdayValue = birthdayInput.value;
    if (!birthdayValue) {
      error.style.display = "block";
      result.textContent = "";
      return;
    }

    error.style.display = "none";

    const today = new Date();
    const birthday = new Date(birthdayValue);
    birthday.setFullYear(today.getFullYear());

    if (birthday < today) {
      birthday.setFullYear(today.getFullYear() + 1);
    }

    const differenceInTime = birthday.getTime() - today.getTime();
    const differenceInDays = Math.ceil(
      differenceInTime / (1000 * 3600 * 24)
    );

    const dayWord = getDayWord(differenceInDays);
    result.textContent = `До вашего дня рождения осталось ${differenceInDays} ${dayWord}.`;
  }

  function getDayWord(days) {
    if (days % 10 === 1 && days % 100 !== 11) {
      return "день";
    } else if (
      [2, 3, 4].includes(days % 10) &&
      ![12, 13, 14].includes(days % 100)
    ) {
      return "дня";
    } else {
      return "дней";
    }
  }