document.getElementById('email-input').onfocus = function() {
  console.log('email input selected');
  option_red();
}

document.getElementById('email-input').onblur = function() {
  console.log('email input deselected');
  option_default();
}

document.getElementById('select_menu').onchange = function() {
  console.log(this.options[this.selectedIndex].value);
  switch (this.options[this.selectedIndex].value) {
    case 'option_default':
      option_default();
      break;
    case 'option_red':
      option_red();
      break;
    case 'option_green':
      option_green();
      break;
    case 'option_blue':
      option_blue();
      break;
    case 'option_monochrome':
      option_monochrome();
      break;
    default:
      console.log('Bad menu selection');
      break;
  }
}

function option_default() {
  document.body.style.color = "#FAF6F8";
  document.body.style.backgroundColor = "#3D212B";
}

function option_red() {
  document.body.style.color = "#FAF6F8";
  document.body.style.backgroundColor = "#D94242";
}

function option_green() {
  document.body.style.color = "#FAF6F8";
  document.body.style.backgroundColor = "#275430";
}

function option_blue() {
  document.body.style.color = "#FAF6F8";
  document.body.style.backgroundColor = "#264875";
}

function option_monochrome() {
  document.body.style.color = "#FAF6F8";
  document.body.style.backgroundColor = "#181A1D";
}
