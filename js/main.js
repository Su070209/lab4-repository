/* =========================================================
   main.js — 项目渲染 + 导航切换 + 对话框过渡
   ========================================================= */
(function () {
  "use strict";

  /* ---------- 1. 渲染项目面板（数据驱动，便于扩展） ---------- */
  var list = document.getElementById("projects-list");
  var projects = (window.portfolioData && window.portfolioData.projects) || [];

  projects.forEach(function (p) {
    var item = document.createElement("article");
    item.className = "project-panel";

    var thumb = document.createElement("div");
    thumb.className = "project-thumb";
    var img = document.createElement("img");
    img.src = p.image;
    img.alt = p.name + " 项目封面";
    img.loading = "lazy";
    thumb.appendChild(img);

    var body = document.createElement("div");
    body.className = "project-body";

    var title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = p.name;

    var meta = document.createElement("div");
    meta.className = "project-meta";
    var cat = document.createElement("span");
    cat.className = "cat-tag " + (p.categoryClass || "web");
    cat.textContent = p.category;
    var date = document.createElement("span");
    date.className = "project-date";
    date.textContent = "完成时间 · " + p.date;
    meta.appendChild(cat);
    meta.appendChild(date);

    var desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = p.desc;

    var techRow = document.createElement("div");
    techRow.className = "tech-row";
    (p.tech || []).forEach(function (t) {
      var tag = document.createElement("span");
      tag.className = "tech-tag";
      tag.textContent = t;
      techRow.appendChild(tag);
    });

    body.appendChild(title);
    body.appendChild(meta);
    body.appendChild(desc);
    body.appendChild(techRow);

    item.appendChild(thumb);
    item.appendChild(body);
    list.appendChild(item);
  });

  /* ---------- 2. 导航切换：游戏对话框式过渡 ---------- */
  var modal = document.getElementById("dialog");
  var content = document.querySelector(".content");
  var modalTimer = null;

  function openDialog(text, onDone) {
    modal.innerHTML =
      '<div class="dialog" role="dialog" aria-label="提示">' +
        '<span class="speak">▼ 苏 威 溏</span>' +
        '<p class="dialog-text">' +
          '<svg class="tree" viewBox="0 0 20 24" aria-hidden="true">' +
            '<rect x="8" y="14" width="4" height="10" fill="#7c5230"/>' +
            '<rect x="2" y="6" width="16" height="10" fill="#5f9c47"/>' +
            '<rect x="4" y="2" width="8" height="6" fill="#7cb342"/>' +
          '</svg>' +
          '<span id="dialog-text"></span>' +
        '</p>' +
        '<p class="dialog-hint">▸ 按任意键继续</p>' +
      '</div>';
    modal.classList.add("show");

    var textEl = modal.querySelector("#dialog-text");
    var i = 0;
    clearInterval(modalTimer);
    modalTimer = setInterval(function () {
      if (i <= text.length) {
        textEl.textContent = text.slice(0, i);
        i++;
      } else {
        clearInterval(modalTimer);
      }
    }, 22);

    var dismiss = function () {
      clearInterval(modalTimer);
      if (onDone) onDone();
      closeModal();
    };
    modal.addEventListener("click", dismiss, { once: true });
    modal.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") dismiss();
    }, { once: true });
    modal.setAttribute("tabindex", "0");
    modal.focus();
  }

  function closeModal() {
    modal.classList.remove("show");
    setTimeout(function () { modal.innerHTML = ""; }, 200);
  }

  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var target = link.getAttribute("data-go");
      var targetEl = document.querySelector(target);
      if (!targetEl) return;

      openDialog("正在前往 { " + link.textContent.trim() + " }……", function () {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  });

  /* ---------- 3. 联系方式按钮（留一句话） ---------- */
  var sayHi = document.getElementById("say-hi");
  if (sayHi) {
    sayHi.addEventListener("click", function () {
      openDialog("感谢你的访问，期待与你交流、一起合作！", null);
    });
  }
})();