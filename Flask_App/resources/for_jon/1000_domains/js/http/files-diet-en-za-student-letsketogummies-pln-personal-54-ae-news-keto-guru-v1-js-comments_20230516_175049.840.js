// вывод окна, очистка полей и отправка формы
function sendComment() {
  popupWindow.style.display = "block";
  setTimeout(function () {
    textArea.value = "";
    if (nameInput !== null) nameInput.value = ""; 
    popupWindow.style.display = "none";
    counter++;
    // document.querySelector(".form-for-comment").submit();
  }, 3000);
}

// меняем цвет рамки на 2 секунды при отсутствии текста в полях
function errorInput(elem) {
  elem.style.borderColor = "#ec3535";
  setTimeout(function () {
    elem.style.borderColor = "#dddfe2";
  }, 2000);
  console.log(elem + "Error: length 0");
  return false;
}

// проверяем количество символов в поле и возвращаем результат
function getInputLength(input) {
  if (input !== null) {
    var result = input.value.length > 1 ? true : errorInput(input);
  } else {
    return true;
  }
  return result;
}

var button = document.getElementById("sendCommentButt"),
  popupWindow = document.querySelector(".my-own-popup-window"),
  textArea = document.getElementById("userText"),
  nameInput = document.querySelector('input[name="commName"]'),
  counter = 1;

button.addEventListener("click", function (event) {
  event.preventDefault();
  if (nameInput.getAttribute("type") == "hidden") {
    if (getInputLength(textArea) && counter == 1) sendComment();
  } else {
    if (getInputLength(nameInput) && getInputLength(textArea) && counter == 1) sendComment();
  }
});

var textarea = document.getElementsByTagName("textarea")[0];
textarea.addEventListener("keydown", resize);
function resize() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = "height:auto;";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 1);
}
