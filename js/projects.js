/* =========================================================
   projects.js — 项目数据（集中管理，便于后续扩展）
   · 新增项目只需在数组末尾追加一项即可
   · image：内联 SVG 生成的像素封面（无需网络）
   ========================================================= */
(function () {
  "use strict";

  // 本地生成像素插画封面（内联 SVG，无需网络请求）
  function svgCover(inner) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30" width="160" height="120" shape-rendering="crispEdges">' + inner + '</svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  var PROJECTS = [
    {
      name: "轻记账",
      category: "移动应用",
      categoryClass: "app",
      date: "2025-04",
      tech: ["TypeScript", "微信小程序", "微信云开发", "ECharts"],
      desc: "“轻记账”是一款面向日常生活场景的极简记账微信小程序，重点解决快速记录和查看个人收支的问题。项目支持语音快捷记账、月度收支统计和预算提醒，并使用微信云开发完成数据存储与后端能力。",
      image: svgCover('<rect width="40" height="30" fill="#fdf1d3"/><rect x="13" y="3" width="14" height="24" fill="#6b4423"/><rect x="15" y="5" width="10" height="20" fill="#f6e8c8"/><rect x="17" y="8" width="6" height="1" fill="#c9a55c"/><rect x="17" y="11" width="6" height="6" fill="#ffd966"/><rect x="19" y="12" width="2" height="4" fill="#a4502c"/><rect x="17" y="20" width="6" height="1" fill="#8a5a32"/><rect x="17" y="22" width="4" height="1" fill="#8a5a32"/><rect x="18" y="26" width="4" height="1" fill="#6b4423"/>')
    },
    {
      name: "拾光集市",
      category: "Web应用",
      categoryClass: "web",
      date: "2025-09",
      tech: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
      desc: "“拾光集市”是一个面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。",
      image: svgCover('<rect width="40" height="30" fill="#bfe3f5"/><rect y="22" width="40" height="8" fill="#e9c46a"/><rect x="6" y="10" width="28" height="3" fill="#a4502c"/><rect x="6" y="13" width="28" height="2" fill="#c96b3a"/><rect x="6" y="15" width="28" height="9" fill="#9c6b3f"/><rect x="9" y="18" width="6" height="6" fill="#d9b65a"/><rect x="17" y="18" width="6" height="6" fill="#7bb25e"/><rect x="25" y="18" width="6" height="6" fill="#e8894a"/><rect x="10" y="20" width="4" height="1" fill="#6b4423"/><rect x="18" y="20" width="4" height="1" fill="#4f8f3f"/><rect x="26" y="20" width="4" height="1" fill="#a4502c"/>')
    },
    {
      name: "城市脉搏",
      category: "数据可视化",
      categoryClass: "viz",
      date: "2026-03",
      tech: ["TypeScript", "HTML/CSS", "Canvas", "SVG", "ECharts"],
      desc: "“城市脉搏”是一个城市实时交通与天气数据可视化大屏，用于集中展示交通、天气和城市运行信息。项目通过多数据源轮询聚合数据，并结合 SVG 图表、Canvas 粒子地图和响应式布局实现大屏可视化展示。",
      image: svgCover('<rect width="40" height="30" fill="#2b3a55"/><rect x="3" y="12" width="5" height="14" fill="#3d5478"/><rect x="9" y="7" width="6" height="19" fill="#45608a"/><rect x="16" y="14" width="5" height="12" fill="#3d5478"/><rect x="22" y="4" width="6" height="22" fill="#45608a"/><rect x="29" y="10" width="5" height="16" fill="#3d5478"/><rect x="4" y="14" width="2" height="2" fill="#ffd966"/><rect x="10" y="9" width="2" height="2" fill="#ffd966"/><rect x="23" y="6" width="2" height="2" fill="#ffd966"/><rect x="30" y="12" width="2" height="2" fill="#ffd966"/><rect x="2" y="24" width="36" height="4" fill="#e8894a"/><rect x="5" y="25" width="2" height="2" fill="#fdf1d3"/><rect x="12" y="25" width="2" height="2" fill="#fdf1d3"/><rect x="20" y="25" width="2" height="2" fill="#fdf1d3"/><rect x="28" y="25" width="2" height="2" fill="#fdf1d3"/>')
    },
    {
      name: "课语通",
      category: "AI应用",
      categoryClass: "ai",
      date: "2026-07",
      tech: ["Python", "FastAPI", "RAG", "向量检索", "大语言模型 API", "Streamlit"],
      desc: "“课语通”是一个基于大语言模型的课程问答助手。用户上传课程资料后，系统能够建立知识索引，根据课程内容回答问题，并提供引用出处和知识点小测，帮助学生快速复习和整理课程重点。",
      image: svgCover('<rect width="40" height="30" fill="#fdf1d3"/><rect x="4" y="20" width="32" height="6" fill="#8a5a32"/><rect x="6" y="14" width="14" height="6" fill="#f6e8c8"/><rect x="6" y="14" width="14" height="2" fill="#c9a55c"/><rect x="7" y="17" width="12" height="1" fill="#8a5a32"/><rect x="7" y="19" width="9" height="1" fill="#8a5a32"/><rect x="24" y="6" width="10" height="10" fill="#7bb25e"/><rect x="26" y="4" width="6" height="2" fill="#5f9c47"/><rect x="26" y="16" width="6" height="2" fill="#5f9c47"/><rect x="22" y="8" width="2" height="6" fill="#5f9c47"/><rect x="34" y="8" width="2" height="6" fill="#5f9c47"/><rect x="27" y="9" width="4" height="4" fill="#ffd966"/>')
    }
  ];

  window.portfolioData = {
    projects: PROJECTS
  };
})();