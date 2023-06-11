/**
 * Check if string contains nothing but whitespace.
 *
 * @return True if string is blank, false otherwise.
 */
String.prototype.isblank = function () {
    return !/\S/.test(this);
}


/**
 * Trim string (remove leading and trailing whitespace).
 *
 * @note Taken from
 * http://blog.stevenlevithan.com/archives/faster-trim-javascript
 */
String.prototype.trim = function () {
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}


/**
 * Check if element has specified class.
 * 
 * @param e         Element in question.
 * @param className Class name to look for; note: it is used as a part of a
 *                  regular expression without escaping.
 *
 * @return True if element has specified class, false otherwise.
 */
function element_has_class(e, className)
{
    var r   = new RegExp("\\b" + className + "\\b", "i");

    return r.test(e.className);
}


/**
 * Add a class to an element.
 *
 * @param e         Element to add class to.
 * @param className Class name to add.
 *
 * @return Element's new className property.
 */
function element_add_class(e, className)
{
    return e.className += " " + className;
}


/**
 * Remove a class from an element.
 *
 * @param e         Element to remove class from.
 * @param className Class name to remove; note: it is used as a part of
 *                  reqular expression without escaping.
 *
 * @return Element's new className property.
 */
function element_del_class(e, className)
{
    var r   = new RegExp(" *\\b" + className + "\\b", "ig");

    return e.className = e.className.replace(r, "");
}


/**
 * Attach an event handler to an object, chaining it to the existing one,
 * if any.
 *
 * @param e         Element to attach the handler to.
 * @param name      Event name (like "click", or "load").
 * @param func      New handler function.
 * @param after     "After" flag; if true, attaches the handler after the
 *                  existing one (if any), not before.
 */
function object_attach_handler(e, name, func, after)
{
    var full_name = "on" + name;
    var orig_func = e[full_name];

    e[full_name] = orig_func
                    ? (after
                        ? function (e) {return orig_func(e) && func(e);}
                        : function (e) {return func(e) && orig_func(e);})
                    : func;
}


/**
 * Iterate over DL terms.
 *
 * @param dl        DL element.
 * @param cb        Callback accepting DT and DD.
 */
function foreach_dl_term(dl, cb)
{
    var child, dt;

    for (child = dl.firstChild;
         child != null;
         child = child.nextSibling)
    {
        /* If DT is not found, yet */
        if (!dt)
        {
            if (child.tagName == "DT")
                dt = child;
        }
        /* Else (DT is found) */
        else
        {
            /* If it is not some element */
            if (!child.tagName)
                continue;

            if (child.tagName == "DT")
            {
                /* Commit half-bind */
                cb(dt, null)

                /* Continue with another DT */
                dt = child;
            }
            else
            {
                if (child.tagName == "DD")
                    /* Commit full bind */
                    cb(dt, child);
                else
                    /* Commit half-bind */
                    cb(dt, null);

                /* Start all over again */
                dt = null;
            }
        }
    }

    /* If DT was found, but there was no DD */
    if (dt)
        /* Commit half-bind */
        cb(dt, null);
}


/**
 * Iterate over input-related children.
 *
 * @param e     Element to find input-related elements in.
 * @param cb    Callback accepting input-related element.
 */
function foreach_input(e, cb)
{
    var child_list, child_index, child;

    child_list = e.getElementsByTagName("*");

    for (child_index = 0; child_index < child_list.length; child_index++)
    {
        var child = child_list[child_index];

        switch (child.tagName)
        {
            case "INPUT":
            case "BUTTON":
            case "SELECT":
            case "TEXTAREA":
                cb(child);
        }
    }
}


