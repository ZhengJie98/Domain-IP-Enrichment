function confirm_button_onclick(e)
{
    var button;
    var label;

    /*
     * Retrieve clicked button element
     */
    if (!e)
        var e=window.event;

    if (e.target)
        button = e.target;
    else if (e.srcElement)
        button = e.srcElement;

    /* Workaround Safari bug */
    if (button.nodeType == 3)
        button = button.parentNode;

    label = button.innerText || button.textContent;
    if (!label)
        return true;

    label = label.trim();
    if (!label)
        return true;

    return confirm(label + "?");
}


function confirm_attach_button()
{
    var button_list = document.getElementsByTagName("BUTTON");

    for (var i = 0; i < button_list.length; i++)
    {
        var button = button_list[i];

        if (button.type != "submit" ||
            !element_has_class(button, "confirm"))
            continue;

        object_attach_handler(button, "click", confirm_button_onclick);
    }
}

/**
 * Attach confirmation attachment routine to the window onload handler
 */
object_attach_handler(window, "load",
                      function () {confirm_attach_button(); return true;},
                      true)


