/* PWA  code start*/
if ("serviceWorker" in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('tic_tac_toe_service_worker.js').then(() => {
      console.log('Service Worker Registered')
    })
  })
}
/* PWA  code end*/

window.document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
})

tic_tac_toe_app_body = document.querySelector('.tic_tac_toe_app_body')
tic_tac_toe_menu_dots = document.querySelector('.tic_tac_toe_menu_dots');
tic_tac_toe_dot_menu_section = document.querySelector('.tic_tac_toe_dot_menu_section');

tic_tac_toe_info_section = document.querySelector('.tic_tac_toe_info_section');


tic_tac_toe_menu_dots.addEventListener('click', function () {
  tic_tac_toe_dot_menu_section.classList.add('open');
  document.removeEventListener('click', tic_tac_toe_close_menu);
  document.addEventListener('click', tic_tac_toe_close_menu);
  function tic_tac_toe_close_menu(Event) {
    if (Event.target != tic_tac_toe_menu_dots && Event.target != tic_tac_toe_menu_dots.children[0] && Event.target != tic_tac_toe_menu_dots.children[1] && Event.target != tic_tac_toe_menu_dots.children[2]) {
      tic_tac_toe_dot_menu_section.classList.remove('open');
    }
  }
})

function tic_tac_toe_info_open_function() {
  tic_tac_toe_app_body.style.overflow = 'hidden'
  tic_tac_toe_info_section.style.display = 'block';
  setTimeout(function () {
    tic_tac_toe_info_section.style.opacity = 1;
  }, 2)
}

function tic_tac_toe_info_close_function() {
  tic_tac_toe_app_body.style.overflow = ''
  tic_tac_toe_info_section.style.opacity = 0;
  setTimeout(function () {
    tic_tac_toe_info_section.style.display = 'none';
  }, 200)
}


tic_tac_toe_app_boxs = document.querySelectorAll('.tic_tac_toe_app_box');

tic_tac_toe_player_status_box_1_bar = document.querySelector('.tic_tac_toe_player_status_box_1_bar');
tic_tac_toe_player_status_box_2_bar = document.querySelector('.tic_tac_toe_player_status_box_2_bar');

tic_tac_toe_player_status_box_1_bar.classList.add('active');
tic_tac_toe_player_status_box_2_bar.classList.remove('active');

tic_tac_toe_player_1 = true;
tic_tac_toe_player_2 = false;

var tic_tac_toe_box_1;
var tic_tac_toe_box_2;
var tic_tac_toe_box_3;
var tic_tac_toe_box_4;
var tic_tac_toe_box_5;
var tic_tac_toe_box_6;
var tic_tac_toe_box_7;
var tic_tac_toe_box_8;
var tic_tac_toe_box_9;

var tic_tac_toe_active = true;

var tic_tac_toe_x_score = 0;
var tic_tac_toe_o_score = 0;

tic_tac_toe_arr = [];


tic_tac_toe_win_horizontal_left_line = document.querySelector('.tic_tac_toe_win_horizontal_left_line');
tic_tac_toe_win_horizontal_middle_line = document.querySelector('.tic_tac_toe_win_horizontal_middle_line');
tic_tac_toe_win_horizontal_right_line = document.querySelector('.tic_tac_toe_win_horizontal_right_line');

tic_tac_toe_win_vertical_top_line = document.querySelector('.tic_tac_toe_win_vertical_top_line');
tic_tac_toe_win_vertical_middle_line = document.querySelector('.tic_tac_toe_win_vertical_middle_line');
tic_tac_toe_win_vertical_bottom_line = document.querySelector('.tic_tac_toe_win_vertical_bottom_line');

tic_tac_toe_win_cross_1_line = document.querySelector('.tic_tac_toe_win_cross_1_line');
tic_tac_toe_win_cross_2_line = document.querySelector('.tic_tac_toe_win_cross_2_line');

tic_tac_toe_win_x_main_box = document.querySelector('.tic_tac_toe_win_x_main_box');
tic_tac_toe_win_o_main_box = document.querySelector('.tic_tac_toe_win_o_main_box');
tic_tac_toe_draw_main_box = document.querySelector('.tic_tac_toe_draw_main_box');

tic_tac_toe_x_score_info = document.querySelector('.tic_tac_toe_x_score_info');
tic_tac_toe_o_score_info = document.querySelector('.tic_tac_toe_o_score_info');

tic_tac_toe_app_boxs.forEach(element => {
  element.addEventListener('click', function () {
    var element_id = this.id;
    var element_number = element_id.split('_');
    element_number = parseInt(element_number[6]);

    if (!tic_tac_toe_arr.includes(element_number) && tic_tac_toe_active == true) {

      tic_tac_toe_arr.push(element_number);

      switch (element_number) {
        case 1:
          if (tic_tac_toe_player_1 == true) {
            tic_tac_toe_box_1 = 1;
          }
          else if (tic_tac_toe_player_2 == true) {
            tic_tac_toe_box_1 = 2;
          }
          break;

        case 2:
          if (tic_tac_toe_player_1 == true) {
            tic_tac_toe_box_2 = 1;
          }
          else if (tic_tac_toe_player_2 == true) {
            tic_tac_toe_box_2 = 2;
          }
          break;

        case 3:
          if (tic_tac_toe_player_1 == true) {
            tic_tac_toe_box_3 = 1;
          }
          else if (tic_tac_toe_player_2 == true) {
            tic_tac_toe_box_3 = 2;
          }
          break;

        case 4:
          if (tic_tac_toe_player_1 == true) {
            tic_tac_toe_box_4 = 1;
          }
          else if (tic_tac_toe_player_2 == true) {
            tic_tac_toe_box_4 = 2;
          }
          break;

        case 5:
          if (tic_tac_toe_player_1 == true) {
            tic_tac_toe_box_5 = 1;
          }
          else if (tic_tac_toe_player_2 == true) {
            tic_tac_toe_box_5 = 2;
          }
          break;

        case 6:
          if (tic_tac_toe_player_1 == true) {
            tic_tac_toe_box_6 = 1;
          }
          else if (tic_tac_toe_player_2 == true) {
            tic_tac_toe_box_6 = 2;
          }
          break;

        case 7:
          if (tic_tac_toe_player_1 == true) {
            tic_tac_toe_box_7 = 1;
          }
          else if (tic_tac_toe_player_2 == true) {
            tic_tac_toe_box_7 = 2;
          }
          break;

        case 8:
          if (tic_tac_toe_player_1 == true) {
            tic_tac_toe_box_8 = 1;
          }
          else if (tic_tac_toe_player_2 == true) {
            tic_tac_toe_box_8 = 2;
          }
          break;

        case 9:
          if (tic_tac_toe_player_1 == true) {
            tic_tac_toe_box_9 = 1;
          }
          else if (tic_tac_toe_player_2 == true) {
            tic_tac_toe_box_9 = 2;
          }
          break;
      }
      if (tic_tac_toe_player_1 == true) {
        element.children[0].style.display = 'block';
      }
      else if (tic_tac_toe_player_2 == true) {
        element.children[1].style.display = 'block';
      }


      // Player 1

      if (tic_tac_toe_box_1 == 1 && tic_tac_toe_box_2 == 1 && tic_tac_toe_box_3 == 1) {
        tic_tac_toe_win_vertical_top_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_x_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_x_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_x_score = tic_tac_toe_x_score + 1;
        tic_tac_toe_x_score_info.innerHTML = tic_tac_toe_x_score;
      }

      else if (tic_tac_toe_box_4 == 1 && tic_tac_toe_box_5 == 1 && tic_tac_toe_box_6 == 1) {
        tic_tac_toe_win_vertical_middle_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_x_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_x_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_x_score = tic_tac_toe_x_score + 1;
        tic_tac_toe_x_score_info.innerHTML = tic_tac_toe_x_score;

      }

      else if (tic_tac_toe_box_7 == 1 && tic_tac_toe_box_8 == 1 && tic_tac_toe_box_9 == 1) {
        tic_tac_toe_win_vertical_bottom_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_x_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_x_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_x_score = tic_tac_toe_x_score + 1;
        tic_tac_toe_x_score_info.innerHTML = tic_tac_toe_x_score;

      }


      else if (tic_tac_toe_box_1 == 1 && tic_tac_toe_box_4 == 1 && tic_tac_toe_box_7 == 1) {
        tic_tac_toe_win_horizontal_left_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_x_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_x_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_x_score = tic_tac_toe_x_score + 1;
        tic_tac_toe_x_score_info.innerHTML = tic_tac_toe_x_score;

      }

      else if (tic_tac_toe_box_2 == 1 && tic_tac_toe_box_5 == 1 && tic_tac_toe_box_8 == 1) {
        tic_tac_toe_win_horizontal_middle_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_x_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_x_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_x_score = tic_tac_toe_x_score + 1;
        tic_tac_toe_x_score_info.innerHTML = tic_tac_toe_x_score;
      }

      else if (tic_tac_toe_box_3 == 1 && tic_tac_toe_box_6 == 1 && tic_tac_toe_box_9 == 1) {
        tic_tac_toe_win_horizontal_right_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_x_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_x_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_x_score = tic_tac_toe_x_score + 1;
        tic_tac_toe_x_score_info.innerHTML = tic_tac_toe_x_score;
      }

      else if (tic_tac_toe_box_1 == 1 && tic_tac_toe_box_5 == 1 && tic_tac_toe_box_9 == 1) {
        tic_tac_toe_win_cross_1_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_x_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_x_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_x_score = tic_tac_toe_x_score + 1;
        tic_tac_toe_x_score_info.innerHTML = tic_tac_toe_x_score;
      }

      else if (tic_tac_toe_box_3 == 1 && tic_tac_toe_box_5 == 1 && tic_tac_toe_box_7 == 1) {
        tic_tac_toe_win_cross_2_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_x_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_x_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_x_score = tic_tac_toe_x_score + 1;
        tic_tac_toe_x_score_info.innerHTML = tic_tac_toe_x_score;
      }

      // Player 2

      else if (tic_tac_toe_box_1 == 2 && tic_tac_toe_box_2 == 2 && tic_tac_toe_box_3 == 2) {
        tic_tac_toe_win_vertical_top_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_o_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_o_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_o_score = tic_tac_toe_o_score + 1;
        tic_tac_toe_o_score_info.innerHTML = tic_tac_toe_o_score;
      }

      else if (tic_tac_toe_box_4 == 2 && tic_tac_toe_box_5 == 2 && tic_tac_toe_box_6 == 2) {
        tic_tac_toe_win_vertical_middle_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_o_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_o_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_o_score = tic_tac_toe_o_score + 1;
        tic_tac_toe_o_score_info.innerHTML = tic_tac_toe_o_score;
      }

      else if (tic_tac_toe_box_7 == 2 && tic_tac_toe_box_8 == 2 && tic_tac_toe_box_9 == 2) {
        tic_tac_toe_win_vertical_bottom_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_o_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_o_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_o_score = tic_tac_toe_o_score + 1;
        tic_tac_toe_o_score_info.innerHTML = tic_tac_toe_o_score;
      }


      else if (tic_tac_toe_box_1 == 2 && tic_tac_toe_box_4 == 2 && tic_tac_toe_box_7 == 2) {
        tic_tac_toe_win_horizontal_left_line.classList.add('active');
        tic_tac_toe_active = false;
        
        setTimeout(function () {
          tic_tac_toe_win_o_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_o_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_o_score = tic_tac_toe_o_score + 1;
        tic_tac_toe_o_score_info.innerHTML = tic_tac_toe_o_score;
      }

      else if (tic_tac_toe_box_2 == 2 && tic_tac_toe_box_5 == 2 && tic_tac_toe_box_8 == 2) {
        tic_tac_toe_win_horizontal_middle_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_o_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_o_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_o_score = tic_tac_toe_o_score + 1;
        tic_tac_toe_o_score_info.innerHTML = tic_tac_toe_o_score;
      }

      else if (tic_tac_toe_box_3 == 2 && tic_tac_toe_box_6 == 2 && tic_tac_toe_box_9 == 2) {
        tic_tac_toe_win_horizontal_right_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_o_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_o_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_o_score = tic_tac_toe_o_score + 1;
        tic_tac_toe_o_score_info.innerHTML = tic_tac_toe_o_score;
      }

      else if (tic_tac_toe_box_1 == 2 && tic_tac_toe_box_5 == 2 && tic_tac_toe_box_9 == 2) {
        tic_tac_toe_win_cross_1_line.classList.add('active');
        tic_tac_toe_active = false;

        setTimeout(function () {
          tic_tac_toe_win_o_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_o_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_o_score = tic_tac_toe_o_score + 1;
        tic_tac_toe_o_score_info.innerHTML = tic_tac_toe_o_score;
      }

      else if (tic_tac_toe_box_3 == 2 && tic_tac_toe_box_5 == 2 && tic_tac_toe_box_7 == 2) {
        tic_tac_toe_win_cross_2_line.classList.add('active');
        tic_tac_toe_active = false;
       
        setTimeout(function () {
          tic_tac_toe_win_o_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_win_o_main_box.style.opacity = 1;
          }, 50)
        }, 475)

        tic_tac_toe_o_score = tic_tac_toe_o_score + 1;
        tic_tac_toe_o_score_info.innerHTML = tic_tac_toe_o_score;
      }

      else if ((tic_tac_toe_arr.length) == 9) {
        setTimeout(function () {
          tic_tac_toe_draw_main_box.style.display = 'block';
          setTimeout(function () {
            tic_tac_toe_draw_main_box.style.opacity = 1;
          }, 50)
        }, 475)
      }


      if (tic_tac_toe_player_1 == true && tic_tac_toe_active == true) {
        tic_tac_toe_player_status_box_1_bar.classList.remove('active');
        tic_tac_toe_player_status_box_2_bar.classList.add('active');

        tic_tac_toe_player_1 = false;
        tic_tac_toe_player_2 = true;
      }
      else if (tic_tac_toe_player_2 == true && tic_tac_toe_active == true) {
        tic_tac_toe_player_status_box_1_bar.classList.add('active');
        tic_tac_toe_player_status_box_2_bar.classList.remove('active');

        tic_tac_toe_player_1 = true;
        tic_tac_toe_player_2 = false;
      }

    }
  })

});


function tic_tac_toe_reset_function() {
  tic_tac_toe_box_1 = null;
  tic_tac_toe_box_2 = null;
  tic_tac_toe_box_3 = null;
  tic_tac_toe_box_4 = null;
  tic_tac_toe_box_5 = null;
  tic_tac_toe_box_6 = null;
  tic_tac_toe_box_7 = null;
  tic_tac_toe_box_8 = null;
  tic_tac_toe_box_9 = null;

  tic_tac_toe_player_1 = true;
  tic_tac_toe_player_2 = false;

  tic_tac_toe_player_status_box_1_bar.classList.add('active');
  tic_tac_toe_player_status_box_2_bar.classList.remove('active');

  tic_tac_toe_active = true;

  tic_tac_toe_arr = [];

  tic_tac_toe_win_horizontal_left_line.classList.remove('active');
  tic_tac_toe_win_horizontal_middle_line.classList.remove('active');
  tic_tac_toe_win_horizontal_right_line.classList.remove('active');

  tic_tac_toe_win_vertical_top_line.classList.remove('active');
  tic_tac_toe_win_vertical_middle_line.classList.remove('active');
  tic_tac_toe_win_vertical_bottom_line.classList.remove('active');

  tic_tac_toe_win_cross_1_line.classList.remove('active');
  tic_tac_toe_win_cross_2_line.classList.remove('active');

  tic_tac_toe_app_boxs.forEach(e => {
    e.children[0].style.display = 'none';
    e.children[1].style.display = 'none';
  });

}

function tic_tac_toe_x_win_close_function() {
  tic_tac_toe_app_body.style.overflow = ''
  tic_tac_toe_win_x_main_box.style.opacity = 0;
  setTimeout(function () {
    tic_tac_toe_win_x_main_box.style.display = 'none';
  }, 250)
  tic_tac_toe_reset_function()
}

function tic_tac_toe_o_win_close_function() {
  tic_tac_toe_app_body.style.overflow = ''
  tic_tac_toe_win_o_main_box.style.opacity = 0;
  setTimeout(function () {
    tic_tac_toe_win_o_main_box.style.display = 'none';
  }, 250)
  tic_tac_toe_reset_function()
}

function tic_tac_toe_draw_close_function() {
  tic_tac_toe_app_body.style.overflow = ''
  tic_tac_toe_draw_main_box.style.opacity = 0;
  setTimeout(function () {
    tic_tac_toe_draw_main_box.style.display = 'none';
  }, 250)
  tic_tac_toe_reset_function()
}