(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{293:function(t,e,n){"use strict";n.r(e);var r=n(14),o=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"设计目的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计目的"}},[t._v("#")]),t._v(" ⭐️ 设计目的")]),t._v(" "),e("p",[t._v("随着前端技术的发展，前端项目正在变得越来越复杂。"),e("code",[t._v("JavaScript")]),t._v(" 作为一门弱类型解释性编程语言，其灵活多变的语法极大的提高了前端开发效率，但同时也存在一系列问题。在大型项目开发过程中，代码维护所占的时间比重往往大于新功能的开发。因此编写符合团队编码规范的代码是至关重要的。 一致性的代码规范可以增强团队开发协作效率、提高代码质量、减少遗留系统维护的负担。但是每个人的代码编写喜好不同，代码风格也会迥然不同，若要一个团队内所有的成员都能发挥最大程度的价值，一个具有普适性的标准是必不可少的。")]),t._v(" "),e("p",[t._v("那么，如何制定前端团队的代码规范，如何在团队内进行最小成本的推广，就是一个合格的前端架构师面临的一大难题。很多团队的基础建设都只是简单地知晓其中一部分规范工具的使用，但却没有一套完整的工程化产出来助力研发同学实现规范落地。因此，如果我们能够产出一套完整化的前端编码规范工具，都会对不仅能够解决存量项目的编码异味，还能够保证后续所有项目的编码质量。")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"最终效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最终效果"}},[t._v("#")]),t._v(" 💡 最终效果")]),t._v(" "),e("ol",[e("li",[t._v("通过 "),e("code",[t._v("monorepo")]),t._v(" 和 "),e("code",[t._v("pnpm")]),t._v(" 的多包管理方式开发一套多 "),e("code",[t._v("npm")]),t._v(" 包的管理方式，以及如何将发包流程植入 "),e("code",[t._v("CI")]),t._v(" 实现自动化发布，以及"),e("code",[t._v("CHANGLOG")]),t._v("的自动化更新部署；")]),t._v(" "),e("li",[t._v("结合前端前沿的研发流程下，我们可以通过以下工具提升项目的编码规范，并提供配套工具的最佳实践，包括但不限于"),e("code",[t._v("eslint")]),t._v("、"),e("code",[t._v("stylelint")]),t._v("、"),e("code",[t._v("commitlint")]),t._v("、"),e("code",[t._v("markdownlint")]),t._v("、"),e("code",[t._v("husky")]),t._v("等，以及如何将单元测试植入配套工具的具体实现；")]),t._v(" "),e("li",[t._v("通过脚手架的方式，以交互式形式一键接入，实现对"),e("code",[t._v("JavaScript")]),t._v("、"),e("code",[t._v("Typescript")]),t._v("、"),e("code",[t._v("React")]),t._v("、"),e("code",[t._v("Vue")]),t._v("等不同类型的前端项目下的标准的语法限制；")]),t._v(" "),e("li",[t._v("对存量项目进行优化：对于存量代码不符合规范的问题，支持一键扫描和一键修复，一键式的修复存量问题，最小化存量代码的更新成本；")]),t._v(" "),e("li",[t._v("对新项目添加规范：支持一键接入新增项目，通过结合"),e("code",[t._v("gitpre-commit")]),t._v("钩子，对提交文件进行编码规范的扫描；同时通过"),e("code",[t._v("husky")]),t._v("的"),e("code",[t._v("commit-msg")]),t._v("钩子，对本次代码提交"),e("code",[t._v("message")]),t._v("的格式进行扫描。")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"配套工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配套工具"}},[t._v("#")]),t._v(" 🛋 配套工具")]),t._v(" "),e("p",[t._v("我们引入了多个业界流行的 "),e("code",[t._v("Linter")]),t._v(" 作为规约文档的配套工具，并根据规约内容定制了对应的规则包，它们包括：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("规约")]),t._v(" "),e("th",[t._v("Lint 工具")]),t._v(" "),e("th",[t._v("NPM 包")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("JavaScript 编码规范 "),e("br"),t._v(" TypeScript 编码规范 "),e("br"),t._v(" Node 编码规范")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/wufankong-eslint-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("wufankong-eslint-config"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("CSS 编码规范")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/wufankong-stylelint-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("wufankong-stylelint-config"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("Git 规范")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/wufankong-commitlint-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("wufankong-commitlint-config"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("文档规范")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/DavidAnson/markdownlint",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdownlint"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/wufankong-markdownlint-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("wufankong-markdownlint-config"),e("OutboundLink")],1)])])])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"联系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系"}},[t._v("#")]),t._v(" ✉️ 联系")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("邮箱")]),t._v(": "),e("a",{attrs:{href:"mailto:wufankong@163.com"}},[t._v("wufankong@163.com")])]),t._v(" "),e("li",[e("strong",[t._v("GitHub")]),t._v(": "),e("a",{attrs:{href:"https://github.com/wufankong/de-spec",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wufankong/de-spec"),e("OutboundLink")],1)])]),t._v(" "),e("br")])}),[],!1,null,null,null);e.default=o.exports}}]);