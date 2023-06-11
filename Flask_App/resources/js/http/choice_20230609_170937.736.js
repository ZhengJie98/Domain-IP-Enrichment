/**
 * @brief Choice UI support routines
 *
 * Copyright (C) 2009 Tilgin AB
 *
 * @author Nikolai Kondrashov <Nikolai.Kondrashov@oktetlabs.ru>
 *
 * @(#) $Id:  $
 */


/* True if at least one input element got our routines attached */
var choice_attached = false;


/*
function choice_eds_log(title, e)
{
    console.log(title + ":", e, "disabled_stack=", e.disabled_stack,
                "disabled=", e.disabled);
}
*/


/**
 * Push element disabled state into disabled stack (EDS), set disabled to
 * true.
 *
 * @param e Element
 */
function choice_eds_push_disabled(e)
{
    var stack = e.disabled_stack;

    /* choice_eds_log("choice_eds_push_disabled(e) START", e); */

    if (stack)
        stack.push(e.disabled);
    else
        e.disabled_stack = new Array(e.disabled);

    e.disabled = true;

    /* choice_eds_log("choice_eds_push_disabled(e) END", e); */
}


/**
 * Pop one element disabled state from disabled stack (EDS), set disabled to
 * the retrieved value.
 *
 * @param e Element
 */
function choice_eds_pop(e)
{
    var stack = e.disabled_stack;

    /* choice_eds_log("choice_eds_pop(e) START", e); */

    if (stack && stack.length > 0)
        e.disabled = stack.pop();

    /* choice_eds_log("choice_eds_pop(e) END", e); */
}


/**
 * Insert "true" disabled state right before all overlayed disabled states
 * in the element stack (EDS), if the stack is empty do regular pushing with
 * choice_eds_push_disabled.
 *
 * @param e Element
 */
function choice_eds_insert_disabled(e)
{
    var stack = e.disabled_stack;

    /* choice_eds_log("choice_eds_insert_disabled(e) START", e); */

    if (stack && stack.length > 0)
        stack.splice(1, 0, true);
    else
        choice_eds_push_disabled(e);

    /* choice_eds_log("choice_eds_insert_disabled(e) END", e); */
}


/**
 * Insert "false" disabled state right before all overlayed disabled states
 * in the element stack (EDS), if the stack is empty do nothing.
 *
 * @param e Element
 */
function choice_eds_insert_enabled(e)
{
    var stack = e.disabled_stack;

    /* choice_eds_log("choice_eds_insert_enabled(e) START", e); */

    if (stack && stack.length > 0)
        stack.splice(1, 0, false);

    /* choice_eds_log("choice_eds_insert_enabled(e) END", e); */
}


/**
 * Unwind an element disabled state stack, restoring the original disabled
 * value.
 *
 * @param e Element
 */
function choice_eds_restore(e)
{
    var stack = e.disabled_stack;

    /* choice_eds_log("choice_eds_restore(e) START", e); */

    if (stack && stack.length > 0)
    {
        e.disabled = stack[0];
        e.disabled_stack = null;
    }

    /* choice_eds_log("choice_eds_restore(e) END", e); */
}


function choice_dd_eds_push_disabled(dd)
{
    foreach_input(dd, choice_eds_push_disabled);
}


function choice_dd_eds_insert_disabled(dd)
{
    foreach_input(dd, choice_eds_insert_disabled);
}


function choice_dd_eds_pop(dd)
{
    foreach_input(dd, choice_eds_pop);
}


function choice_dd_eds_insert_enabled(dd)
{
    foreach_input(dd, choice_eds_insert_enabled);
}


function choice_attach_checkbox_dd(this_checkbox, this_dd)
{
    if (this_dd)
    {
        var update = function () {
            if (this_checkbox.checked)
                choice_dd_eds_pop(this_dd);
            else
                choice_dd_eds_push_disabled(this_dd);
            return true;
        };

        if (this_checkbox.checked)
            choice_dd_eds_insert_enabled(this_dd);
        else
            choice_dd_eds_insert_disabled(this_dd);

        object_attach_handler(this_checkbox, "click", update);
        choice_attached = true;
    }
}


function choice_attach_radio_dd(this_radio, this_dd, bind_list)
{
    var checked = function () {
        var bind_index, bind;

        for (bind_index in bind_list)
        {
            bind = bind_list[bind_index];

            if (bind.input.checked != bind.input.prev_checked)
            {
                bind.input.prev_checked = bind.input.checked;

                if (bind.dd)
                {
                    if (bind.dd == this_dd)
                        choice_dd_eds_pop(bind.dd);
                    else
                        choice_dd_eds_push_disabled(bind.dd);
                }
            }
        }
        return true;
    };

    if (this_dd)
    {
        if (this_radio.checked)
            choice_dd_eds_insert_enabled(this_dd);
        else
            choice_dd_eds_insert_disabled(this_dd);
    }

    this_radio.prev_checked = this_radio.checked;

    object_attach_handler(this_radio, "click", checked);
    choice_attached = true;
}


function choice_get_dt_input(dt)
{
    var input_list = dt.getElementsByTagName("INPUT")
    var input

    if (input_list.length != 1)
        return;

    input = input_list[0];

    if (input.type != "checkbox" && input.type != "radio")
        return;

    return input;
}


function choice_attach_dt_dd(dt, dd, radio_map)
{
    var input = choice_get_dt_input(dt);

    if (!input)
        return;

    /* If it is a checkbox */
    if (input.type == "checkbox")
        choice_attach_checkbox_dd(input, dd);
    /* Else, if it is a radio-button */
    else if (input.type == "radio")
    {
        var bind_list   = radio_map[input.name];
        var bind        = new Object();

        bind.input  = input;
        bind.dd     = dd;

        /* Grow radio-button-bound DD list */
        if (bind_list == null)
            bind_list = radio_map[input.name] = new Array(bind);
        else
            bind_list.push(bind);

        choice_attach_radio_dd(input, dd, bind_list);
    }
}


function choice_attach_dl(dl)
{
    var radio_map = new Object();
    var child, dt;

    foreach_dl_term(dl,
                    function (dt, dd) {
                        choice_attach_dt_dd(dt, dd, radio_map);
                    })
}


function choice_attach_form(form)
{
    var dl_list = form.getElementsByTagName("DL");
    var dl_index, dl;

    for (dl_index = 0; dl_index < dl_list.length; dl_index++)
    {
        var dl = dl_list[dl_index];

        if (element_has_class(dl, "control") &&
            !element_has_class(dl, "inclusive"))
            choice_attach_dl(dl);
    }
}


function choice_attach()
{
    var content = document.getElementById("content");

    if (content)
    {
        var form_list = content.getElementsByTagName("FORM");
        var form_index;

        for (form_index = 0; form_index < form_list.length; form_index++)
            choice_attach_form(form_list[form_index]);
    }
}


function choice_restore()
{
    if (choice_attached)
    {
        var content = document.getElementById("content");
        if (content)
            foreach_input(content, choice_eds_restore);
    }
}

object_attach_handler(window, "load",
                      function () {choice_attach(); return true;},
                      true)

object_attach_handler(window, "beforeunload",
                      function (e) {choice_restore(); return;})


