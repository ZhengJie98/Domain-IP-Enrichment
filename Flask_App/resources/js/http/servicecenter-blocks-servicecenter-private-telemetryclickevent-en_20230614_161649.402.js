﻿var sendEventUIButton;
var buttonNameField;
var screenNameField;

window.addEventListener('click', function click(event) {
                        var sendEventButton = document.getElementById(sendEventUIButton);
                        
                        if ((this.event.target.type == "submit" || this.event.target.tagName.toLowerCase() == "a" || this.event.target.classList.contains('tabs-header-item') || this.event.target.hasAttribute('data-name') ) && this.event.target.id != sendEventButton.id) {
                            if (window.getComputedStyle(this.event.target).getPropertyValue("display") != "none"){
                                if (this.event.target.type == "submit"){
                                document.getElementById(buttonNameField).value = this.event.target.value;
                                } else {
                                    var meaningfulName = this.event.target.getAttribute("data-name");
                                    if(meaningfulName) {document.getElementById(buttonNameField).value = meaningfulName} 
                                    else {document.getElementById(buttonNameField).value = this.event.target.innerText;}
                                }

                                document.getElementById(screenNameField).value = outsystems.api.requestInfo.getWebScreenName();
                                sendEventButton.click();
                            } else {}
                        } else {}
                    });