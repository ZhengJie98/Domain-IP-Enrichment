var logoType = undefined;
var itemSelected = {"photo":"0","logo":0,"iconographie":0,"model":0,"texte":0}

function toggleMaquettePicture(index, type) {
    elem = $('.popupMaquette' + index);
    if (type == "interieur") {
        $(elem).attr('src', $(elem).attr("src").replace("exterieur", "interieur"));
    } else {
        $(elem).attr('src', $(elem).attr("src").replace("interieur", "exterieur"));
    }
}
function selectMaquette(id,name,reference ,designer) {

    $.ajax({
        url: "/workflow/select/maquette/" + id,
        context: document.body
    }).done(function (maquetteData) {
		itemSelected['model'] = 1;
        maquetteData = JSON.parse(maquetteData);
        $('#popupMaquetteName').html(maquetteData.name);
        $('#popupDesignerName').html(maquetteData.designer);
        $('#popupMaquetteReference').html(maquetteData.reference);
        $.ajax({
            url: '/ajax/maquettecouleur/' + id,
            context: document.body
        }).done(function (data) {

            listData = "";
            maquetteData = "";
            index = 0;
            $('#maquetteColorList').find('li').remove();
            $('#maquetteColor').find('.tab-pane').remove();
            $('#biblioModal').modal('hide');
            $('#favorisModal').modal('hide');
            $.each(data.data, function (key, value) {
				$('#recap_'+key).html(value);
			});

			selectMaquetteColor('none','none');

            $.each(data.colors, function (index, color) {
                if (index == 0) {
                    activeCss = "active";
                    $('#maquetteColor').append("<input type='hidden' id='maquette_color_none_file' value='thumb_"+color.id+".png'>");
                } else {
                    activeCss = "";
                    $('#maquetteColor').append("<input type='hidden' id='maquette_color_"+color.color.replace('#','')+"_file' value='thumb_couleur_"+color.color.replace('#','')+"_"+color.id+".png'>");
                }


                if (color.normal != "true") {
                    listData = listData + '<li class="' + activeCss + ' text-center"><a  onclick="setModelColor(\''+color.id+'\')" data-maquette-color-id="'+color.id+'" data-maquette-color="'+color.color.replace("#", "")+'"  href="#color' + index + '" data-toggle="tab">Couleur<div class="colors" style="position:relative;top:5px;background-color:#' + color.color.replace("#", "") + '"></div></a></li>';
                    maquetteData = maquetteData + ' <div class="tab-pane ' + activeCss + '" id="color' + index + '"><label class="fl"><a class="blue" href="javascript:null" onclick="toggleMaquettePicture(' + index + ',\'interieur\');"> Intérieur</a></label><label class="fr"><a class="blue" href="javascript:null" onclick="toggleMaquettePicture(' + index + ',\'exterieur\');"> Extérieur</a></label><div class="typoThumb" style="display:inline-block;vertical-align:top;"><img class="popupMaquette' + index + '" src="/data/maquette/interieur/thumb_couleur_' + color.color.replace('#', '') + '_' + color.id + '.png" style="width:100%"/></div></div>'
                } else {
                    listData = listData + '<li class="' + activeCss + ' text-center"><a  onclick="setModelColor(\''+color.id+'\')" data-maquette-color-id="'+color.id+'" data-maquette-color="'+color.color.replace("#", "")+'"  href="#color' + index + '" data-toggle="tab">Couleur<div class="colors" style="position:relative;top:5px;background-color:#' + color.color.replace("#", "") + '"></div></a></li>';
                    maquetteData = maquetteData + ' <div class="tab-pane ' + activeCss + '" id="color' + index + '"><label class="fl"><a class="blue" href="javascript:null" onclick="toggleMaquettePicture(' + index + ',\'interieur\');"> Intérieur</a></label><label class="fr"><a class="blue" href="javascript:null" onclick="toggleMaquettePicture(' + index + ',\'exterieur\');"> Extérieur</a></label><div class="typoThumb" style="display:inline-block;vertical-align:top;"><img class="popupMaquette' + index + '" src="/data/maquette/interieur/thumb_' + id + '.png" style="width:100%"/></div></div>'
                }


            })
            $('#maquetteColor').append(maquetteData);
            $('#maquetteColorList').append(listData);
            updateWorkflowBar();
        });

    });
}

function selectMaquetteColor(color, id) {
	$('#maquette_selected_color').val(color + "_" + id);
}

function chooseMaquette() {
    if($('#modelTexte').val() == "") {
        $('#errors').html('Vous devez specifier un commentaire');
        return false;
    }
    var url = "/workflow/setData/model?description="+$('#modelTexte').val();

    $.ajax({
        url: url,
        context: document.body
    }).done(function () {
        updateWorkflowBar();
    });
	$('#recap_commentaire').html($('#modelTexte').val());
	$('#recap_family').html($('#maquette_family_model').val());
	$('#recap_style').html($('#maquette_style').val());
	$('#confirmationModal').modal('show');
}

function chooseLogo() {
    if($('#logoEntreprise').val() == "") {
        $('.logoNomError').html("Le nom de l'entreprise doit être renseigné");
    } else {
        if($('#logoTexte').val() == "") {
            $('#errors').html("Vous devez spécifier un commentaire");
            return false;
        }
		logoEntreprise = $('#logoEntreprise').val();
		logoSlogan = $('#logoSlogan').val();
		logoCommentaire = $('#logoTexte').val();
        $('#confirmationModal').modal("show");
		$('#recap_commentaire').html(logoCommentaire);
		logoFile = $("#logo_color_"+$('#logo_selected_color').val()+"_file").val();
		if(logoFile.indexOf('user') != -1) {
		    pathImg = "/userData/logo/" + logoFile;
        } else {
		    pathImg = "/data/logo/" + logoFile;
        }
		$('#recap_image').attr("src",pathImg);
		$('#recap_slogan').html(logoSlogan);
		$('#recap_entreprise').html(logoEntreprise);
    }
}

function selectLogo(id, type) {
    if(type == "biblio") {
        url = "/workflow/select/logo/" + id + "?biblio=true";
    } else {
        url = "/workflow/select/logo/" + id;
    }
    $.ajax({
        url: url,
        context: document.body
    }).done(function (data) {
		data = JSON.parse(data);
        if(type == "biblio") {
            data.designer = "n/a";
            data.reference = "logo de la bibliothéque";
            data.nom = "Logo de la bibliothèque";
        }
		$('#logoDesigner').html(data.designer);
		$('#logoReference').html(data.reference);
        $('#logoName').html(data.nom);

		itemSelected['logo'] = 1;
        $.ajax({
            url: '/ajax/logocouleur/' + id,
            context: document.body
        }).done(function (data) {
            listData = "";
            logoData = "";
            index = 0;
            $('#LogoColorList').find('li').remove();
            $('#logoColor').find('.tab-pane').remove();
            $('#biblioModal').modal('hide');
            $('#favorisModal').modal('hide');

			$.each(data.data, function (key, value) {
				$('#recap_'+key).html(value);
			});

			selectLogoColor('none');

            $('#logoColor').html('');
            $('#logoColorList').html('');

            $.each(data.colors, function (index, color) {
                if (index == 0) {
                    activeCss = "active";
                    $('#logoColor').append("<input type='hidden' id='logo_color_none_file' value='thumb_"+color.id+".png'>");
                } else {
                    activeCss = "";
                    $('#logoColor').append("<input type='hidden' id='logo_color_"+color.color.replace('#','')+"_file' value='thumb_couleur_"+color.color.replace('#','')+"_"+color.id+".png'>");
                }

                if (color.user == "true") {
                    logoData = logoData + ' <div class="tab-pane active" id="color' + index + '"><div class="typoThumb" style="display:inline-block;vertical-align:top;"><img class="popupLogo' + index + '" src="/userData/logo/thumb_' + color.id + '.png" style="max-height:350px;" height="350"></div></div>'
                } else {
                    if (color.normal != "true") {
                        listData = listData + '<li class="' + activeCss + '"><a data-logo-color="'+color.color.replace("#", "")+'" href="#color' + index + '" data-toggle="tab">Couleur<div class="colors" style="position:relative;top:5px;background-color:#' + color.color.replace("#", "") + '"></div></a></li>';
                        logoData = logoData + ' <div class="tab-pane ' + activeCss + '" id="color' + index + '"><div class="typoThumb" style="display:inline-block;vertical-align:top;"><img class="popupLogo' + index + '" src="/data/logo/thumb_couleur_' + color.color.replace('#', '') + '_' + color.id + '.png" style="max-height:350px;" height="350"></div></div>'
                    } else {
                        listData = listData + '<li class="' + activeCss + '"><a data-logo-color="'+color.color.replace("#", "")+'" href="#color' + index + '" data-toggle="tab">Couleur<div class="colors" style="position:relative;top:5px;background-color:#' + color.color.replace("#", "") + '"></div></a></li>';
                        logoData = logoData + ' <div class="tab-pane ' + activeCss + '" id="color' + index + '"><div class="typoThumb" style="display:inline-block;vertical-align:top;"><img class="popupLogo' + index + '" src="/data/logo/thumb_' + id + '.png" style="max-height:350px;" height="350"></div></div>'
                    }
                }
            })

            $('#logoColor').append(logoData);
            $('#logoColorList').append(listData);
        });
        updateWorkflowBar();
    });
}

function selectLogoColor(color) {
	$('#logo_selected_color').val(color);
}

function setModelColor(color) {

    var url = "/workflow/setData/model?color="+color.replace("#","");

    $.ajax({
        url: url,
        context: document.body
    }).done(function () {
        updateWorkflowBar();
    });
}

function photoUpdateCommentaire() {
    $('.photoCommentaire').each(function(index, item) {
        query = "description=" + $(this).val();
        if(index ==0) {
            query = query + "&clean=true";
        }
        $.ajax({
            url: "/workflow/setData/photo?"+query ,
            context: document.body
        })
    });
}

function photoWorkFlowNext() {
    photoUpdateCommentaire();
    document.location.href='/workflow/maquette/iconographie';
}

function setCommentaire() {
    $.ajax({
        url: "/workflow/setData/commentaire?description=" + $('#commentaire').val().replace(/\r\n|\r|\n/g,"<br />") ,
        context: document.body
    }).done(function () {
        updateWorkflowBar();
    });
}

function setLogoDesc() {
	var logoEntreprise = (logoType == "upload") ? $('#logoEntreprise_cust').val() : $('#logoEntreprise').val();
	var logoSlogan = (logoType == "upload") ? $('#logoSlogan_cust').val() : $('#logoSlogan').val();
	var logoCommentaire = (logoType == "upload") ? $('#logoTexte_cust').val() : $('#logoTexte').val();

	if($('#logo_selected_color').val() == "none") {
		color_id = 	"none"
		logoId = $("#logo_color_none_file").val().split('.')[0]
		var url = "/workflow/setData/logo?id="+logoId.replace('thumb_','')+"&color="+color_id+"&description=" + logoCommentaire + "&entreprise=" + logoEntreprise + "&slogan=" + logoSlogan;
 	} else {
		color_id = 	$("#logo_color_"+$('#logo_selected_color').val()+"_file").val().split('.')[0].split('_')[2];
		var url = "/workflow/setData/logo?color="+color_id+"&description=" + logoCommentaire + "&entreprise=" + logoEntreprise + "&slogan=" + logoSlogan;
	}

	$.ajax({
        url: url,
        context: document.body
    }).done(function () {
        updateWorkflowBar();
        document.location.href = "/workflow/maquette/photo";
    });

}



function SelectIconType(type) {
    switch (type) {
        case "none":
            $.ajax({
                url: "/workflow/select/icon/0",
                context: document.body
            })

            itemSelected['iconographie'] = 1;
            $("#Iconcontainer").hide();
            $('.iconNone').addClass('hover').addClass("printFormBtn");
            $('.iconChoose').removeClass('hover').removeClass("printFormBtn");
            $('.favoris').removeClass('hover').removeClass("printFormBtn");
            break;
        case "choose":
            $("#Iconcontainer").show();
            $('.iconNone').removeClass('hover').removeClass("printFormBtn");;
            $('.iconChoose').addClass('hover').addClass("printFormBtn");;
            $('.favoris').removeClass('hover').removeClass("printFormBtn");
            break;
        case "favoris":
            refreshFavorites('iconographie');
            $("#Iconcontainer").hide();
            $('.iconNone').removeClass('hover').removeClass("printFormBtn");;
            $('.iconChoose').removeClass('hover').removeClass("printFormBtn");;
            $('.favoris').addClass('hover').addClass("printFormBtn");;
            break;
    }
}

function photoType(type) {
    $.ajax({
        url: "/workflow/photo/type/" + type,
        context: document.body
    }).done(function () {

        $('.biblio').removeClass('printFormBtn');
        $('.photoTypeFree').removeClass('printFormBtn');
        $('.photoTypeUpload').removeClass('printFormBtn');
        $('.photoTypeChoose').removeClass('printFormBtn');
        $('.photoTypeModel').removeClass('printFormBtn');
        $('.photoTypeFree').removeClass('printFormBtn');
        $('.biblio').removeClass('printFormBtn');
        $('.photoTypeUpload').addClass('btn');
        $('.photoTypeChoose').addClass('btn');
        $('.photoTypeModel').addClass('btn');
        $('.photoTypeFree').addClass('btn');
        $('.biblio').addClass('btn');

        $('#SelectPhotoContainer').hide();
        $('#uploadContainer').hide();
        $('#OthersWorkflow').hide();

        switch (type) {
            case "free":
                selectPhoto(0);
                itemSelected['photo'] = 1;
                $('.photoTypeFree').removeClass('btn');
                $('.photoTypeFree').addClass('printFormBtn');
                break;
            case "upload":
                $('.photoTypeUpload').removeClass('btn');
                $('.photoTypeUpload').addClass('printFormBtn');
                $('#SelectPhotocontainer').hide();
                $('#uploadContainer').show();
                $('#OthersWorkflow').hide();
                break;
            case "choose":
                $('.photoTypeChoose').removeClass('btn');
                $('.photoTypeChoose').addClass('printFormBtn');
                $('#SelectPhotocontainer').show();
                $('#uploadContainer').hide();
                $('#OthersWorkflow').hide();
                break;
            case "biblio":
                $('.biblio').removeClass('btn');
                $('.biblio').addClass('printFormBtn');
                $('#SelectPhotocontainer').hide();
                $('#uploadContainer').hide();
                $('#OthersWorkflow').hide();
                break;
            case "favoris":
                refreshFavorites('photo');
                $('#favorisModal').modal('show');
                break;
        }
    });
}


photoNum = 1;
photoDetails={}
function selectPhoto(photoId, type) {
    $.ajax({
        url: "/workflow/select/photo/" + photoId,
        context: document.body
    }).done(function () {
        $('#favorisModal').modal('hide');
        $('#biblioModal').modal('hide');
        updateWorkflowBar();
    });
}

var iconNum = 0;
function updateIcon(iconId, variable, value) {
	 $.ajax({
        url: "/workflow/update/icon/" + iconId+"/"+variable+"/"+value.replace('#',''),
        context: document.body
    })
}

function selectIcon(iconId, reference, designer) {
    $.ajax({
        url: "/workflow/select/icon/" + iconId,
        context: document.body
    }).done(function () {
		itemSelected['iconographie'] = 1;
		$('#favorisModal').modal('hide');
		$('#biblioModal').modal('hide');
        $.ajax({
            url: '/ajax/iconcouleur/' + iconId,
            context: document.body
        }).done(function (data) {
            listData = "<ul class='nav nav-tabs'>";
            iconData = "<div class='tab-content'>";
            index = 0;
            $('#icon'+iconNum+'ColorList').find('li').remove();
            $('#iconColor'+iconNum).find('.tab-pane').remove();
            $('#biblioModal').modal('hide');
            i = 0 ;
            $.each(data, function (index, color) {
                if (i == 0) {
                    activeCss = "active";
                } else {
                    activeCss = "";
                }

                if (color.user == "true") {
                    iconData = iconData + ' <div class="icon'+iconId+' tab-pane active" id="color' + index +iconNum+ '"><img class="popupLogo' + index + '" src="/userData/iconographie/thumb_' + color.id + '.png"><div class="fr"><h2 class="pb0">Commentaire :</h2><input type="checkbox" id="noComment">pas de commentaire<br /><textarea data-iconId="'+iconId+'" class="iconComment"></textarea></div></div>'
                } else {
                    if (color.normal != "true") {
                        listData = listData + '<li class="icon'+iconId  + ' '+ activeCss + '"><a onclick=\'updateIcon('+iconId+',"couleur","'+color.color+'")\' href="#color' + index +iconNum+ '" data-toggle="tab">Couleur<div class="colors" style="position:relative;top:5px;background-color:' + color.color + '"></div></a></li>';
                        iconData = iconData + ' <div class="icon'+iconId+' tab-pane ' + activeCss + ' " id="color' + index +iconNum +'"><img class="popupLogo' + index + '" src="/data/iconographie/thumb_couleur_' + color.color.replace('#', '') + '_' + color.id + '.png" style="max-width:40%"><div class="fr"><h2 class="pb0">Commentaire :<img class="help helpComment" src="/images/help.png" data-toggle="tooltip" data-placement="right" title="Indiquez les instructions que vous voulez laisser au designer" /></h2><input type="checkbox" checked="checked" id="noComment">pas de commentaire<br /><textarea data-iconId="'+iconId+'" class="iconComment" disabled="disabled">aucun commentaire</textarea></div></div>'
                    } else {
                        listData = listData + '<li class="icon'+iconId+' ' + activeCss + '"><a onclick=\'updateIcon('+iconId+',"couleur","'+color.color+'")\' href="#color' + index +iconNum +'" data-toggle="tab">Couleur<div class="colors" style="position:relative;top:5px;background-color:' + color.color + '"></div></a></li>';
                        iconData = iconData + ' <div class="icon'+iconId+' tab-pane ' + activeCss + '" id="color' + index +iconNum +'"><img class="popupLogo' + index + '" src="/data/iconographie/thumb_' + iconId + '.png"><div class="icoComment"><h2 class="pb0">Commentaire :<img class="help helpComment" src="/images/help.png" data-toggle="tooltip" data-placement="right" title="Indiquez les instructions que vous voulez laisser au designer" /></h2><input checked="checked"  type="checkbox" id="noComment">pas de commentaire<br /><textarea disabled="disabled" data-iconId="'+iconId+'" class="iconComment">aucun commentaire</textarea></div></div>'
                    }
                }
                i++;
            })


            htmlTemplate = '<li class="icon'+iconId+'"><div class="logoTitle clearfix"><a style="color:white" href="javascript:null" onclick="deleteIcon(' + iconId + ')">supprimer</a><span>0,00&euro;</span> </div><div class="logoThumb"><img src="/data/iconographie/thumb_' + iconId + '.png"  style="max-height:129px"></div><div class="logoBot clearfix"><a href="#">Voir le zoom</a></div></li>';

            $('.selectedPhotos').append(htmlTemplate);

            popupListIcon = '<li class="icon'+iconId+'"><a href="#icon' + iconNum + '" data-toggle="tab"><img src="/data/iconographie/thumb_' + iconId + '.png" width="78px"></a><br /><a  onclick="deleteIcon(\'' + iconId + '\')">(supprimer)</a></li>';

            $('#popupContentIcon').find('.tab-pane.active').removeClass('.active');
            popupContentIcon = '<div class="icon'+iconId+' tab-pane active" id="icon'+iconNum +'">'+listData + '</ul><br /><br />'+iconData+'</div>';

            $('#popupListIcon').append(popupListIcon);
            $('#popupContentIcon').find('.tab-pane').removeClass('active');
            $('#popupContentIcon').append(popupContentIcon);

            updateWorkflowBar();
            iconNum++;
            i++;
        });


    });
}

function deletePhoto(id) {
    $.ajax({
        url: "/workflow/delete/photo/" + id,
        context: document.body
    }).done(function () {
        updateWorkflowBar();
    });
}


function introText() {
    if ($('#introText').attr('expended') == 'true') {
        $('#introText').attr('style', 'max-height:50px;overflow:hidden');
        $('#introText').attr('expended', 'false');
        $('#introTextLink').html('Lire la suite');
    } else {
        $('#introText').attr('style', 'max-height:auto;overflow:hidden').slideDown();
        $('#introText').attr('expended', 'true').slideDown();
        $('#introTextLink').html('Refermer')
    }
}

function deleteIcon(id) {
	$('.icon'+id).remove();
    $.ajax({
        url: "/workflow/delete/icon/" + id,
        context: document.body
    }).done(function () {
        updateWorkflowBar();
    });
}

function setModelType(type) {
    switch (type) {
        case "choose":
            $('#selectModelcontainer').show();
            $('#uploadModelcontainer').hide();
            $('.chooseBtn').removeClass('btn').addClass('printFormBtn');
            $('.uploadBtn').removeClass('printFormBtn').addClass('btn');

            break;
        case "upload":
            $('#uploadModelcontainer').show();
            $('#selectModelcontainer').hide();
            $('.chooseBtn').removeClass('printFormBtn').addClass('btn');
            $('.uploadBtn').removeClass('btn').addClass('printFormBtn');
            break;
    }
}

function setModel(type) {
    switch(type) {
        case "favoris" :
            $('#btnFavoris').addClass('printFormBtn');
            refreshFavorites('maquette');
            $('#favorisModal').modal('show');
            break;
    }
}

function refreshFavorites(type) {
    $.ajax({
        url: "/ajax/favorites/"+type,
        context: document.body
    }).done(function (data) {
        $('#favorisContent').html(data);
    });
}

function setLogoType(type) {
	logoType = type;
    switch (type) {
        case "choose":
            $('#selectLogocontainer').show();
            $('#uploadContainer').hide();
            $('.chooseBtn').removeClass('btn').addClass('printFormBtn');
            $('.uploadBtn').removeClass('printFormBtn').addClass('btn');
            $('.favoris').removeClass('printFormBtn').addClass('btn');
            $('.biblio').removeClass('printFormBtn').addClass('btn');

            break;
        case "upload":
			if($('#isLoggued').val()=="true") {
				$('#selectLogocontainer').hide();
				$('#uploadContainer').show();
				$('.chooseBtn').removeClass('printFormBtn').addClass('btn');
				$('.uploadBtn').removeClass('btn').addClass('printFormBtn');
				$('.biblio').removeClass('printFormBtn').addClass('btn');
				$('.favoris').removeClass('printFormBtn').addClass('btn');
			} else {
				$('#loginModal').modal('show');
			}

            break;

        case "biblio":
            $('#selectLogocontainer').hide();
            $('#uploadContainer').hide();
            $('.chooseBtn').removeClass('printFormBtn').addClass('btn');
            $('.uploadBtn').removeClass('printFormBtn').addClass('btn');
            $('.biblio').removeClass('btn').addClass('printFormBtn');
            $('.favoris').removeClass('printFormBtn').addClass('btn');
            break;

        case "favoris":
            $('#selectLogocontainer').hide();
            $('#uploadContainer').hide();
            $('.chooseBtn').removeClass('printFormBtn').addClass('btn');
            $('.uploadBtn').removeClass('printFormBtn').addClass('btn');
            $('.biblio').removeClass('printFormBtn').addClass('btn');
            $('.favoris').addClass('printFormBtn');
            refreshFavorites('logo');
            $('#favorisModal').modal('show');
            break;
    }
}

ajaxWorkflowBar = {};
function updateWorkflowBar() {
    $.ajax({
        url: "/workflow/select/getData",
        context: document.body
    }).done(function (data) {
        ajaxWorkflowBar = data;

        if (data.maquetteId != null) {
            itemSelected['model'] = 1;
            maquette = data.maquetteId.split('_');
            if (maquette.length == 2) {
                $('.selectedMaquette').attr('src', '/userData/model/exterieur/thumb_' + maquette[1] + '.png');
                $('#selectedMaquetteExterieurForm').attr('src', '/userData/model/exterieur/thumb_' + maquette[1] + '.png');
                $('#selectedMaquetteInterieurForm').attr('src', '/userData/model/interieur/thumb_' + maquette[1] + '.png');
                $('.popupMaquette').attr('src', '/userData/model/exterieur/thumb_' + maquette[1] + '.png');
                $('#recap_image_ext').src('/userData/maquette/exterieur/'+data.maquetteId);
                $('#recap_image_int').src('/userData/maquette/interieur/'+data.maquetteId);
            } else {
				if(data.modelColor!="none" && data.modelColor != null) {
					modelFileName = "thumb_couleur_"+data.modelColor.split('_')[0].replace('#','')+"_"+data.modelColorId+".png";
				} else {
					modelFileName = "thumb_"+data.maquetteId + ".png";
				}
                $('#recap_image_ext').attr('src','/data/maquette/exterieur/'+modelFileName);
                $('#recap_image_int').attr('src', '/data/maquette/interieur/'+modelFileName);

                $('.selectedMaquette').attr('src', '/data/maquette/exterieur/' + modelFileName);
                $('#typoMaquette').attr('src', '/data/maquette/exterieur/' + modelFileName);
                $('.popupMaquette').attr('src', '/data/maquette/exterieur/' + modelFileName);
            }

            maquetteColorList = ' <li class=""><a href="#color1File" data-toggle="tab">Couleur <div class="colors" style="position:relative;top:5px;background-color:#4785ef"></div> </a></li>';
        }
        if (data.logoId != null) {
			data.logoId = String(data.logoId);
            logo = data.logoId.split('_');
            itemSelected['logo'] = 1;
            if (logo.length == 2) {
                $('.selectedLogo').attr('src', '/userData/logo/thumb_' +  data.logoId + '.png');
                $('#selectedLogoForm').attr('src', '/userData/logo/thumb_' +  data.logoId + '.png');
                $('#popupLogo').attr('src', '/userData/logo/thumb_' +  data.logoId + '.png');
            } else {
				if(data.logoColor!="none" && data.logoColor != null) {
					logoFileName = "thumb_couleur_"+data.logoColor.replace('#','')+"_"+data.logoColorId+".png";
				} else {
					logoFileName = "thumb_"+data.logoId + ".png";
				}
                $('#popupLogo').attr('src', '/data/logo/' + logoFileName);
                $('.selectedLogo').attr('src', '/data/logo/' + logoFileName);
            }
            if (data.logoTexte != null) {
                $('#logoTexte').val(data.logoTexte);
            }
            if (data.logoEntreprise != null) {
                $('#logoEntreprise').val(data.logoEntreprise);
            }
            if (data.logoSlogan != null) {
                $('#logoSlogan').val(data.logoSlogan);
            }
        }

        if (data.photoIds != null ) {
            itemSelected['photo'] = 1;
            $('.selectedPhotosTitle').show();
            $('#selectedPhotos').find('li').remove();
            $('#selectedPhotos').append(' <li class="none"><i>aucune photo selectionnée</i></li>');
            photoNum = 0 ;
            $('#popupListPhoto').find('li').remove();
            $('#popupContentPhoto').find('div').remove();
            if(Object.keys(data.photoIds).length > 0) {
                $('.selectedPhotosWorkflow').children().remove();
            }
            $.each(data.photoIds, function (key, item) {
                if(item.id != 0) {
                    if(item.id != "none") {
                        $('#selectedPhotos').find('.none').remove();
                        if(item.id.indexOf('user_') == -1) {
                            var path = "/data/photo/thumb_";
                            reference = item.reference;
                            designer = item.designer;
                        } else {
                            var path = "/userData/photo/thumb_";
                            reference ="Photo envoyée ou issue de la maquette";
                            designer ="Photo envoyée ou issue de la maquette";
                        }

                        imgUrl = path + item.id+".png";



                        if(data.photoInfo.hasOwnProperty(photoNum)) {
                            commentaire = data.photoInfo[photoNum];
                            if(commentaire == "commentaire") {
                                checked = "checked='checked'";
                                disabled ="disabled='disabled'";
                            } else {
                                checked="";
                                disabled="";
                            }
                        } else {
                            commentaire = "aucun commentaire";
                            checked = "checked='checked'";
                            disabled="disabled='disabled'";
                        }

                        popupListPhoto = '<li><a href="#photo' + photoNum + '" data-toggle="tab"><img style="display:inline-block" src="'+imgUrl+'" width="50px"/></a></li>';
                        popupContentPhoto = '<div class="tab-pane" id="photo' + photoNum + '"><h6 class="noSlash clearfix"><em class="fl"> Référence : <span id="popupPhotoReference">' + reference + '</span></em> <em>Designer : <span id="popupPhotoDesigner">' + designer + '</span></em></h6><img class="photoPopup" src="'+imgUrl+'"/><div class="photoCommentContainer"><h2 class="pb0">Commentaires :<img class="help helpComment" src="/images/help.png" data-toggle="tooltip" data-placement="right" title="Indiquez les instructions que vous voulez laisser au designer" /></h2><div><input type="checkbox" '+checked+'" id="noComment" data-id="'+photoNum+'">pas de commentaire<textarea '+disabled+' class="photoCommentaire" style="height:180px!important;" id="commentaire_photo_'+photoNum+'">'+ commentaire +'</textarea></div></div></div>';

                        $('#popupListPhoto').append(popupListPhoto);
                        $('#popupContentPhoto').append(popupContentPhoto);



                        var htmlTemplate = '<li><div class="logoTitle clearfix"><a style="color:white" href="#selectedPhotos" onclick="deletePhoto(\'' + item.id + '\')">supprimer</a><span>0.00&euro;</span> </div><div class="logoThumb"><img src="'+ imgUrl + '" ></div><div class="logoBot clearfix"></div></li>';
                        $('#selectedPhotos').append(htmlTemplate);

                        var htmlTemplate = '<div style="display:inline-block;vertical-align:middle"><img src="'+ imgUrl + '" width="60" style="border:none"></div>';
                        $('.selectedPhotosWorkflow').append(htmlTemplate);
                    }

                }
                photoNum++;
            });
            $('#selectedPhotosTitle').show();
            $('#selectedPhotos').show();
            $('#popupListPhoto').children().last().addClass('active');
            $('#popupContentPhoto').children().last().addClass('active');
        }
        if(data.prix != null) {
            $('#workflowPrixModel').html(data.prix.model);
            $('#workflowPrixLogo').html(data.prix.logo);
            $('#workflowPrixPhotos').html(data.prix.photos);
            $('#workflowPrixIcons').html(data.prix.icons);
            $('#workflowPrixTotal').html(data.prix.total);
        }
        if (data.textes != null) {
            $('#textesContainer').html('');
            if(data.textes.texts != null) {
                itemSelected['texte'] = 1;
                $.each(data.textes.texts, function (name, texte) {
                    html = "<div class='textContainer'>";
                    html = html + "<h6>" + name + " <a href='#logoWideTo' onclick=\"deleteTexte(\'" + escape(name) + "\')\"><small>(supprimer)</small></a> </h6>";
                    html = html + "<p>" + texte + "</p>";
                    html = html + "</div>";
                    $("#textesContainer").append(html);

                    $('.selectedText').attr('src', '/images/check.jpg');
                })
            }
            if(data.textes.userTexts!=null) {
                itemSelected['texte'] = 1;
                $.each(data.textes.userTexts, function (id, file) {
                    html = "<div class='textContainer'>";
                    html = html + "<p> le fichier " + file.name + " à été envoyé <img onclick=\"deleteTexte(\'" + file.id + "\')\" src='/images/delete.png' width='15px' style='position:relative;top:3px;margin-left:20px'> </p>";
                    html = html + "</div>";
                    $("#textesContainer").append(html);

                    $('.selectedText').attr('src', '/images/check.jpg');
                })
            }
        }

        // ICONES
        itemSelected['iconographie'] = 1;
        $('#Iconcontainer').show();

        $('.selectedIconsTitle').show();
        $('#selectedIcons').find('li').remove();
        $('#selectedIcons').append(' <li class="none"><i>aucun icone selectionné</i></li>');
        if(data.iconIds != null) {
            if(Object.keys(data.iconIds).length > 0) {
                $('.selectedIconsWorkflow').find('img').remove();
            }
            $.each(data.iconIds, function (key, icon) {
                if(icon.id != "0") {
                    $('#selectedIcons .none').remove();
                    if (icon.id.indexOf('user') != -1) {
                        htmlTemplate = '<img src="/userData/iconographie/thumb_' + icon.id + '.png" width="60" height="45" style="display:inline-block;max-height:45px;max-width:70px;">';
                        $('.selectedIconsWorkflow').append(htmlTemplate);

                        htmlTemplate = '<li><div class="logoTitle clearfix"><a style="color:white" href="javascript:null" onclick="deleteIcon(\'' + icon.id + '\')">supprimer</a><span>0,00&euro;</span> </div><div class="logoThumb"><img src="/userData/iconographie/thumb_' + iconId + '.png"></div><div class="logoBot clearfix"><a href="#">Voir le zoom</a></div></li>';
                        $('#selectedIcons').append(htmlTemplate);

                    } else {
                        var imgUrl = "";
                        if (icon.hasOwnProperty('couleur')) {
                            imgUrl = 'thumb_couleur_' + icon.couleur.replace('#', '') + '_' + icon.couleurId + '.png';
                            htmlTemplate = '<img src="/data/iconographie/' + imgUrl + '" width="60" height="45" style="display:inline-block;max-height:45px;max-width:70px;">';
                        } else {
                            imgUrl = 'thumb_' + icon.id + '.png';
                            htmlTemplate = '<img src="/data/iconographie/' + imgUrl + '" width="60" height="45" style="display:inline-block;max-height:45px;max-width:70px;">';
                        }
                        $('.selectedIconsWorkflow').append(htmlTemplate);

                        htmlTemplate = '<li><div class="logoTitle clearfix"><a style="color:white" href="javascript:null" onclick="deleteIcon(' + icon.id + ')">supprimer</a><span>0,00&euro;</span> </div><div class="logoThumb"><img src="/data/iconographie/thumb_' + icon.id + '.png"></div><div class="logoBot clearfix"></div></li>';
                        $('#selectedIcons').append(htmlTemplate);
                    }
                }
             });
         }


        if (data.colorIds != null) {
            $('.palletList').find('li').remove();
            $.each(data.colorIds, function (id, color) {
                color = '<li><input value="#' + color + '" style="background-color:#' + color + '"  type="text" class="colorInput" name="color' + id + '" id="color' + id + '" /><a class="deleteColor" href="javascript:null" onclick="deleteColor(\'color' + id + '\')">supprimer</a></li>';
                $('.palletList').append(color);
            });
        }

        if (data.commentaire != null) {
            itemSelected['commentaire'] = 1;
            $('.selectedCommentaire').attr('src', '/images/check.jpg');
        }

    });


}

function removeColor(form) {
    $('#' + form).val('all');
    $('.colors').removeClass('bordered');
    $('.colors[data-color="none"]').addClass('bordered');
}
function chooseColor(color, id, elem, className) {
    if (className == undefined || className == null || className == '') {
        className = 'colors';
    }
    $('#' + id).val(color);
    $('.' + className.replace('#','')).removeClass("bordered");
    $(elem).addClass("bordered");
}

function deleteTexte(name) {
    $.ajax({
        url: "/workflow/delete/texte/" + name,
        context: document.body
    }).done(function () {
        updateWorkflowBar();
    });
}

function addText(text, name) {
	itemSelected['texte'] = 1;
    if ($('#text').val() == "") {
        $('.error').show();
        return false;
    }
    if ($('#textName').val() == "") {
        $('.error').show();
        return false;
    }
    texte = $('#text').val();
    texte = texte.replace(/(\r\n|\n|\r|\/)/gm, '%0D%0A');
    $('#addTextModal').modal('hide');
    $.ajax({
        url: "/workflow/select/texte/" + $('#textName').val() + "/" + texte,
        context: document.body
    }).done(function () {
        $('#text').val('');
        $('#textName').val('');
        updateWorkflowBar();
    });

}


function chooseShippingAddress(id) {
    $.getJSON("/espace-client/adresses-livraison/" + id, function (data) {
        data = JSON.parse(data);
        $('.sa-name').html(data.prenom + " " + data.nom);
        $('.sa-address').html(data.adresse);
        $('.sa-zip-city').html(data.cp + " " + data.ville);
        $('.sa-country').html(data.pays);
        $('.sa-phone').html(data.phone);
        $('.sa-mail').html(data.email);
    });
}


function choosebillinggAddress(id) {
    $.getJSON("/espace-client/adresses-facturation/" + id, function (data) {
        data = JSON.parse(data);
        $('.ba-name').html(data.prenom + " " + data.nom);
        $('.ba-address').html(data.adresse);
        $('.ba-zip-city').html(data.cp + " " + data.ville);
        $('.ba-country').html(data.pays);
        $('.ba-phone').html(data.phone);
        $('.ba-mail').html(data.email);
    });
}


function updateAddress(id, billing) {
    if (billing == true)
        addresse = "/espace-client/adresses-facturation/";
    else
        addresse = "/espace-client/adresses-livraison/";

	$('.help-block').hide();

    $.getJSON(addresse + id, function (data) {
        data = JSON.parse(data);
        if (billing == undefined) {
            $('#wikprintfrontbundle_shippingaddress_id').val(data.id);
            $('#wikprintfrontbundle_shippingaddress_nom').val(data.nom);
            $('#wikprintfrontbundle_shippingaddress_prenom').val(data.prenom);
            $('#wikprintfrontbundle_shippingaddress_adresse').val(data.adresse);
            $('#wikprintfrontbundle_shippingaddress_cp').val(data.cp);
            $('#wikprintfrontbundle_shippingaddress_ville').val(data.ville);
            $('#wikprintfrontbundle_shippingaddress_pays').val(data.pays);
            $('#wikprintfrontbundle_shippingaddress_telephone').val(data.telephone);
            $('#wikprintfrontbundle_shippingaddress_email').val(data.email);
        } else {
            $('#wikprintfrontbundle_billingaddress_id').val(data.id);
            $('#wikprintfrontbundle_billingaddress_nom').val(data.nom);
            $('#wikprintfrontbundle_billingaddress_prenom').val(data.prenom);
            $('#wikprintfrontbundle_billingaddress_adresse').val(data.adresse);
            $('#wikprintfrontbundle_billingaddress_cp').val(data.cp);
            $('#wikprintfrontbundle_billingaddress_ville').val(data.ville);
            $('#wikprintfrontbundle_billingaddress_pays').val(data.pays);
            $('#wikprintfrontbundle_billingaddress_telephone').val(data.telephone);
            $('#wikprintfrontbundle_billingaddress_email').val(data.email);
        }
    });
    $('#addressForm').modal('show');
}

function viewModel(modelId, type, i) {
    if($('#maquetteInterieur_'+i).attr('src').match('/user_(.*)/')) {
        $('#maquetteInterieur_'+i).attr('src', '/userData/model/thumb_'+type+'/'+modelId+'.png');
    } else {
        $('#maquetteInterieur_'+i).attr('src', '/data/maquette/thumb_'+type+'/'+modelId+'.png');
    }
}

function updateIconComment() {
	$('.iconComment').each(function(index) {
		updateIcon($(this).attr('data-iconId'),'commentaire',$(this).val());
	});
}
$(document).ready(function () {

	$('#noComment').live('click', function(e) {
	    element = $(this).parent().find("textarea")
	    if($(element).attr('disabled') != 'disabled') {
		    $(this).parent().find("textarea").val('aucun commentaire').attr('disabled','disabled');
        } else {
            $(this).parent().find("textarea").val('').removeAttr('disabled');
        }
	});

	$('.iconComment').live('change',function(e) {
		updateIcon($(this).attr('data-iconId'),"comment",$(this).val());
	});

	$('a[data-maquette-color]').live('click', function(e) {
		selectMaquetteColor($(this).data('maquette-color'), $(this).data('maquette-color-id'));
	});

	$('a[data-logo-color]').live('click', function(e) {
		selectLogoColor($(this).data('logo-color'));
	});

    $( ".btnAddBilling" ).click(function(){
        $('#wikprintfrontbundle_billingaddress_id').val("");
        $('#wikprintfrontbundle_billingaddress_nom').val("");
        $('#wikprintfrontbundle_billingaddress_prenom').val("");
        $('#wikprintfrontbundle_billingaddress_adresse').val("");
        $('#wikprintfrontbundle_billingaddress_cp').val("");
        $('#wikprintfrontbundle_billingaddress_ville').val("");
        $('#wikprintfrontbundle_billingaddress_pays').val("");
        $('#wikprintfrontbundle_billingaddress_telephone').val("");
        $('#wikprintfrontbundle_billingaddress_email').val("");
    });

    $( ".btnAddShipping" ).click(function(){
        $('#wikprintfrontbundle_shippingaddress_id').val("");
        $('#wikprintfrontbundle_shippingaddress_nom').val("");
        $('#wikprintfrontbundle_shippingaddress_prenom').val("");
        $('#wikprintfrontbundle_shippingaddress_adresse').val("");
        $('#wikprintfrontbundle_shippingaddress_cp').val("");
        $('#wikprintfrontbundle_shippingaddress_ville').val("");
        $('#wikprintfrontbundle_shippingaddress_pays').val("");
        $('#wikprintfrontbundle_shippingaddress_telephone').val("");
        $('#wikprintfrontbundle_shippingaddress_email').val("");
    });

    $('.openPop').live('click',function () {
        $('.largePopOuter').show();
    })
    $('.closePop').live('click',function () {
        $('.largePopOuter').hide();
    })
    updateWorkflowBar();

    $("#secteurActivite").on('change', function () {
        $.ajax({
            url: " /ajax/retrieveAjaxSousSecteurActivite/" + $('#secteurActivite').val(),
            context: document.body
        }).done(function (json) {
            $('#sousSecteurActivites').empty();
            $('#sousSecteurActivites').append($('<option>').text("Choisir un secteur d'activité").attr('value', "null"));
            $.each(json, function (i, obj) {
                $('#sousSecteurActivites').append($('<option>').text(obj.nom).attr('value', obj.id));
            });
        });
    });

	$('#edit_user_form_customerCategory').change(function() {
		if($(this).val() == '2') {
			$('.company').show();
		} else {
			$('.company').hide();
		}
	});


    if($('#edit_user_form_customerCategory').val() != '2') {
		$('.company').hide();
	}

});

function changeBatModel(side, id) {
	$('#batvisu').attr('src','/maquettesPretes/'+id+'/thumb_'+side+'.png');
}

function changeBatModelZoom(side, id) {
	$('#batvisuZoom').attr('src','/maquettesPretes/'+id+'/thumb_'+side+'.png');
}

function workflowNext(type) {
	if(itemSelected[type] != "1") {
		$('#modalSelection').modal('show');
		return false;
	} else {
		return true;
	}
}

function saveOrderName() {
	var orderId = $('#orderId').val();
	var orderName = $('#orderName').val();

	$.ajax({
		url: "/ajax/saveOrderName/"+orderId+"/"+orderName,
		context: document.body
	}).done(function (result) {
		if(result == "true") {
			$('#spanOrderName').html('"'+orderName+'"');
			$('#modalSave').modal('toggle');
		}
	});
}

function reInitForm() {
	$('#searchForm select').val('all');
	$('#searchForm input').val('');
	$("#searchForm input[type='checkbox']"). prop("checked", false);
	removeColor("couleur1")
}


function addToFavorites(type, id) {
    $.ajax({
        url: "/ajax/addToFavorites/"+type+"/"+id,
        context: document.body
    }).done(function (result) {
        $('#addToFavoritesModal').modal('show');
        refreshFavorites(type);
    });
}

function requireAuth(url) {
    setCookie('redirectUrl', url, 1);
    if($('#isLoggued').val() == "true") {
        return true;
    } else {
        $('#loginModal').modal('show');
        return false;
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function resetTextModal() {
    $('.presentation').show();
    $('#formUpload').hide();
    $('#upload').hide();
}

function validLogoForm() {
    if($('#logoEntreprise_cust').val() == "") {
        $('#errors').html("Vous devez spécifier un nom d'entreprise");
        return false;
    }
    if( $("#biblioFile").val() == "" ) {
        $('#errors').html("Vous devez choisir un fichier");
        return false;
    }


    return true;
}