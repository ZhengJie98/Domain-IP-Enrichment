$(document).ready(function(){
	$('.collapse').collapse();
});

//=============== login =============
$(document).ready(function(){
  $("#auth").ready(function(){
    $("#Auth_Modal").modal();
  });
});
//=============== login ==============

//=============== login =============
$(document).ready(function(){
  $("#ajout").click(function(){
    $("#ajout_Modal").modal();
  });
});
//=============== login ==============


//=============== login2 =============
$(document).ready(function(){
  $("#auth2").click(function(){
    $("#Auth_Modal").modal();
  });
});
//=============== login2 ==============

//=============== Bon_modal =============
$(document).ready(function(){
  $("#bj").click(function(){
    $("#b_Modal").modal();
  });
});
//=============== bon ==============

//=============== vehi_modal =============
$(document).ready(function(){
  $("#vaj").click(function(){
    $("#ve_Modal").modal();
  });
});

$(document).ready(function(){
  $("#vmod").ready(function(){
    $("#vm_Modal").modal();
  });
});

$(document).ready(function(){
  $("#vsup").ready(function(){
    $("#vs_Modal").modal();
  });
});
//=============== vehi ==============

//=============== pneu_modal =============
$(document).ready(function(){
  $("#paj").click(function(){
    $("#pa_Modal").modal();
  });
});

$(document).ready(function(){
  $("#pmod").ready(function(){
    $("#pm_Modal").modal();
  });
});

$(document).ready(function(){
  $("#psup").ready(function(){
    $("#ps_Modal").modal();
  });
});
//=============== pneu ==============

//=============== liv_modal =============
$(document).ready(function(){
  $("#laj").click(function(){
    $("#la_Modal").modal();
  });
});

$(document).ready(function(){
  $("#lmod").ready(function(){
    $("#lm_Modal").modal();
  });
});

$(document).ready(function(){
  $("#lsup").ready(function(){
    $("#ls_Modal").modal();
  });
});
//=============== liv ==============

//=============== con_modal =============
$(document).ready(function(){
  $("#caj").click(function(){
    $("#ca_Modal").modal();
  });
});

$(document).ready(function(){
  $("#cmod").ready(function(){
    $("#cm_Modal").modal();
  });
});

$(document).ready(function(){
  $("#csup").ready(function(){
    $("#cs_Modal").modal();
  });
});
//=============== con ==============

//=============== dep_modal =============
$(document).ready(function(){
  $("#daj").click(function(){
    $("#da_Modal").modal();
  });
});

$(document).ready(function(){
  $("#pave").click(function(){
    $("#pav_modal").modal();
  });
});

$(document).ready(function(){
  $("#dmod").ready(function(){
    $("#dm_Modal").modal();
  });
});

$(document).ready(function(){
  $("#dsup").ready(function(){
    $("#ds_Modal").modal();
  });
});
//=============== dep ==============

//=============== modal_auto =============
$(document).ready(function(){
  $("#new").click(function(){
    $("#nw_Modal").modal();
  });
});
//=============== modal_auto ==============

//=============data_table__________________________

//$(document).ready( function () {
//    var table = $('#example').dataTable();
//    var tableTools = new $.fn.dataTable.TableTools( table, {
  //      "buttons": [
    //        "copy",
      //      "csv",
        //    "xls",
          //  "pdf",
    //        { "type": "print", "buttonText": "Print me!" }
      //  ]
   // } );

   // $( tableTools.fnContainer() ).insertAfter('div.info');
//} );

$(document).ready(function() {
    $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'excel', 'pdf'
        ]
    } );
} );


//=============== modal_retire_p =============
$(document).ready(function(){
  $("#pr").ready(function(){
    $("#p_Modal").modal();
  });
});
//=============== modal_retire_p ==============

//================ confirmation liv ================
$(document).ready(function(){
  $("#cnBtn").ready(function(){
    $("#cnModal").modal("show");
  });
  $("#cnModal").on('show.bs.modal', function(){
   // alert('Bon ajouter!!');
  });
});

//================ confirmation liv ================



//================ message_ajout_bon ===============
$(document).ready(function(){
  $('[data-toggle="aj_b"]').tooltip();   
});
//================ fin =============================

//================== search depenses ===============
$(document).ready(function(){
  $("#verif").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#table_verif tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
//================== fin ===========================

//================== search depenses_V ===============
$(document).ready(function(){
  $("#detail").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#detail_Table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
//================== fin ===========================


//================ calcul_auto =======================
/*function calcul(){
                var prix = Number(document.getElementById("heuresI").value);
 
                var quantite = Number(document.getElementById("txhoraire").value);
 
                var ttc = Number(prix * quantite);
                document.getElementById("ttc").value = ttc;
            }*/
//================ calcul_auto =======================

//==================== menu_on_click===============================
/*$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});*/
//=============================== menu_on_click ==============================
