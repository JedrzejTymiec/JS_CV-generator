class appUI {
  static changeTemplate(template) {
    let buttonList = document.getElementsByClassName("ap template-button");
    for (var i = 0; buttonList.length > i; i++) {
      buttonList[i].className = "ap template-button";
    }
    document.getElementById("template-type").href =
      "./css/" + template + ".css";

    document.getElementById(template).classList.add("current");
    localStorage.setItem("template", template);
  }

  static setTemplate() {
    let template = localStorage.getItem("template");
    let color = localStorage.getItem("color");

    if (template && color) {
      this.changeTemplate(template);
      this.changeColor("dot-" + (parseInt(color) + 1));
    } else {
      this.changeTemplate("basic");
      this.changeColor("dot-1");
    }
  }

  static changeColor(id) {
    if (document.getElementById(id)) {
      let colorDots = document.getElementsByClassName("ap color-dot");
      for (var i = 0; colorDots.length > i; i++) {
        colorDots[i].className = "ap color-dot";
      }
      document.getElementById(id).classList.add("current");
    }

    if (id === "dot-1") {
      document.documentElement.style.setProperty("--mainColor", "#4758a8");
      document.documentElement.style.setProperty("--secondaryColor", "#3bbeff");
      document.documentElement.style.setProperty("--contactColor", "#15243d");
      document.documentElement.style.setProperty("--creativeColor", "#42c2b9");
      document.documentElement.style.setProperty(
        "--headerBackground",
        "#4758a8"
      );
      localStorage.setItem("color", "0");
    }
    if (id === "dot-2") {
      document.documentElement.style.setProperty("--mainColor", "#051561");
      document.documentElement.style.setProperty("--secondaryColor", "#7a84b3");
      document.documentElement.style.setProperty("--contactColor", "#782270");
      document.documentElement.style.setProperty("--creativeColor", "#370f33");
      document.documentElement.style.setProperty(
        "--headerBackground",
        "#808080"
      );
      localStorage.setItem("color", "1");
    }
    if (id === "dot-3") {
      document.documentElement.style.setProperty("--mainColor", "#616d84");
      document.documentElement.style.setProperty("--secondaryColor", "#9fafce");
      document.documentElement.style.setProperty("--contactColor", "#65df6f");
      document.documentElement.style.setProperty("--creativeColor", "#80e588");
      document.documentElement.style.setProperty(
        "--headerBackground",
        "#051561"
      );
      localStorage.setItem("color", "2");
    }
  }

  static pagesDone(currentPage) {
    if (currentPage === "basic") {
      document.getElementById("basic-form-dot").innerHTML = `<p>1</p>`;
      document.getElementById("experience-form-dot").innerHTML = `<p>2</p>`;
      document.getElementById("skills-form-dot").innerHTML = `<p>3</p>`;
    } else if (currentPage === "experience") {
      document.getElementById(
        "basic-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
      document.getElementById("experience-form-dot").innerHTML = `<p>2</p>`;
      document.getElementById("skills-form-dot").innerHTML = `<p>3</p>`;
    } else if (currentPage === "skills") {
      document.getElementById(
        "basic-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
      document.getElementById(
        "experience-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
      document.getElementById("skills-form-dot").innerHTML = `<p>3</p>`;
    } else if (currentPage === "download") {
      document.getElementById(
        "basic-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
      document.getElementById(
        "experience-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
      document.getElementById(
        "skills-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
    }
  }
}

export default appUI;
