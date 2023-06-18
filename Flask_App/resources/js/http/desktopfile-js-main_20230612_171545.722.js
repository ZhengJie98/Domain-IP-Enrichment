$('.setting').click(function(){$('body').toggleClass('setting_open')});$('.setting_cancel').click(function(){$('body').removeClass('setting_open')});$('.gamehall-wrap-simple.container a').click(function(){$('#common_transfer_to_go').addClass('dflex')});$('.modpop').click(function(){$('#casinocommingsoonpopup').css('display','block')});$('#closepop').click(function(){$('#casinocommingsoonpopup').css('display','none')});$('#premiumcric').click(function(){$('#premiumcricket').css('display','block')});$('#closepopcric').click(function(){$('#premiumcricket').css('display','none')});$('#closeCommonDepositModal, #commonCancelBtn').click(function(){$('#common_transfer_to_go').removeClass('dflex')});$('#lmtOpenStreaming').click(function(){$('#tv-wrap').toggleClass('dflex')});$('#lmtOpenStreaming_in').click(function(){$('#tv-wrap').toggleClass('dflex');});$('#setting-drop').click(function(){$('#set_pop').toggleClass('dflex')});$('#closeSet').click(function(){$('#set_pop').removeClass('dflex')});function move(){const element=document.getElementById("progressBar");let width=0;let id=setInterval(frame,100);function frame(){if(width==100){clearInterval(id);}else{width=width+4;element.style.width=width+'%';}}}
function closebookmakerbet(){$("#bookMakerBetMessageTemplate").css("display","none");}
$('.support-wrap .support-service a').hover(function(){var index=$('.support-service a').index(this);$('.support-service a').not($(this)).removeClass('open');$(this).addClass('open');$('.support-wrap .support-info .support-detail').removeClass('open');$(".support-wrap .support-info .support-detail").eq(index).addClass("open");});var table1=document.querySelector('#today_result');var table2=document.getElementById('yesterday_result');var tomorrow_btn=document.getElementById('tom');var today_btn=document.getElementById('play');result=()=>{table1.style.display='block'
table2.style.display='none'
tomorrow_btn.classList.remove('active')
today_btn.classList.add('active')}
result1=()=>{table1.style.display='none'
table2.style.display='block'
tomorrow_btn.classList.add('active')
today_btn.classList.remove('active')}
select_result=()=>{var sports_result=document.getElementById("sports").value
var soccer_table=document.querySelector('.soccer_table')
var soccer_table2=document.querySelector('.soccer_table2')
var cricket_table=document.querySelector('.today_table')
var cricket_table2=document.querySelector('.today_table2')
console.log(sports_result)
if(sports_result==1){console.log("soccer");cricket_table.style.display='none'
soccer_table.style.display='block'
soccer_table2.style.display='block'
cricket_table2.style.display='none'}else{console.log("cricket");cricket_table.style.display='block'
soccer_table.style.display='none'
soccer_table2.style.display='none'
cricket_table2.style.display='block'}}
var in_play1=document.querySelector('.maine-table1');var in_play2=document.querySelector('.maine-table2');var in_play3=document.querySelector('.maine-table3');var in_btn=document.getElementById('in_play');var in_today_btn=document.getElementById('in_today');var in_tomorrow_btn=document.getElementById('in_tomorrow');in_play_result=()=>{in_play1.style.display='block'
in_play2.style.display='none'
in_play3.style.display='none'
in_btn.classList.add('active')
in_today_btn.classList.remove('active')
in_tomorrow_btn.classList.remove('active')}
in_play_result1=()=>{in_play1.style.display='none'
in_play2.style.display='block'
in_play3.style.display='none'
in_btn.classList.remove('active')
in_today_btn.classList.add('active')
in_tomorrow_btn.classList.remove('active')}
in_play_result2=()=>{in_play1.style.display='none'
in_play2.style.display='none'
in_play3.style.display='block'
in_btn.classList.remove('active')
in_today_btn.classList.remove('active')
in_tomorrow_btn.classList.add('active')}
function hideDialog(){document.getElementById('changePasswordModal').classList.toggle('show')}
function matchOdds(id){var premium=document.getElementById(id);if(premium.style.display==="none"){premium.style.display="table-row";}else{premium.style.display="none";}}
$('#moreDropBtn').click(function(){$('#moreDropList').toggle()});$('#showSportsBookBtn').click(function(){$('.bets-wrap.fancy_bet').css("display","none")
$('#sportsBookWrap').css("display","block");});$('#showFancyBetBtn').click(function(){$('.bets-wrap.fancy_bet').css("display","block")
$('#sportsBookWrap').css("display","none");});$('#sportsBookRules').click(function(){$('#sportsBookRulesWrap_2').css("display","block")});$('.btn-wrap.break').click(function(){$('#sportsBookRulesWrap_2').css("display","none")});$('.btn-fancybet_rules').click(function(){$('#fancyBetRulesWrap').css("display","block")});$('#fancyBetRulesWrap .btn').click(function(){$('#fancyBetRulesWrap').css("display","none")});$('.bets .back-1.no-liq').click(function(){var index=$('.bets .back-1.no-liq').index(this);$('.bets .back-1.no-liq').not($(this)).removeClass('select');$(this).addClass('select');$('.quick_bet-wrap.slip-book').css('display','none');$(".quick_bet-wrap.slip-book").eq(index).css('display','block');});$('.quick_bet-wrap.slip-book .btn').click(function(){$('.quick_bet-wrap.slip-book').css('display','none');$('.bets .back-1.no-liq').removeClass('select');})
$('.special_bet .to-expand').click(function(){if($(this).parents('.bets').hasClass("close")){$(this).parents('.bets').removeClass('close')}else{$(this).parents('.bets').addClass('close')}});$('.left-top-text .fa-ellipsis-v').click(function(){$('.path-pop').toggle();});$('.hi-cri .to-expand').click(function(){var index=$('.hi-cri .to-expand').index(this);$(this).addClass('select');$(".hi-cri").eq(index).toggleClass('close')});$('.white-right .to-expand').click(function(){$('.white-right').toggleClass('close');});$('.matched-wrap .to-expand').click(function(){$('.matched-wrap').toggleClass('close');});