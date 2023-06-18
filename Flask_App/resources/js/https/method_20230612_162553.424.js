/*
 * @Author: SANJI
 * @Description: 
 * @Date: 2023-06-06 11:25:33
 * @LastEditTime: 2023-06-06 11:34:35
 * @FilePath: /landing_pages/static/mmr_1/method.js
 * @LastEditors: SANJI
 */
const MethodType = {
    WhatsApp: "whatapp",
    Zalo: "zalo",
    Line: "line",
    Telegram: "telegram",
    Messenger: "facebook",
  };

   const getGetSchemeUrl = (method, number) => {
    switch (String(method)) {
      case MethodType.WhatsApp:
        return (
          // https://wa.me/whatsappphonenumber?text=urlencodedtext
          "whatsapp://send?phone=" + number + "&text=" + encodeURIComponent("Hi")
        );
      case MethodType.Zalo:
        return "zalo://zaloapp.com/qr/link/" + number;
      case MethodType.Line:
        return "line://ti/p/~" + number;
      case MethodType.Telegram:
        return "tg:resolve?domain=" + number;
      case MethodType.Messenger:
        return "fb-messenger://user/" + number + "/";
      default:
        return null;
    }
  };

  let prevIndex = undefined;

  const randomPhone = (numbers) => {
    let randomNumber = Math.floor(Math.random() * numbers.length);
    if (prevIndex !== randomNumber) {
      prevIndex = randomNumber;
      return numbers[randomNumber];
    } else {
      randomPhone(numbers);
    }
  };
  
  window.onload = () => {
    const icon = document.getElementById("jump_icon");
    icon && (icon.src = `./asset/icons/${method}.png`);

    const btns = document.getElementsByName("jump_btn");
    const url = getGetSchemeUrl(method, randomPhone(account_list));
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const a = document.createElement("a"); // 创建一个a标签
        a.href = url; // 设置a标签的链接
        a.target = "_blank"; // 设置打开链接的方式
        document.body.appendChild(a); // 将a标签添加到页面中
        a.click(); // 触发点击事件打开新页面
        document.body.removeChild(a); // 将a标签从页面中移除
      });
    });
  };     