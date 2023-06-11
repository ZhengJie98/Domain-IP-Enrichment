/** Iterate over text input fields and set maxlength field */
function input_length_limit()
{
    var input_list, idx, field

    input_list = document.getElementsByTagName("INPUT");
    for (idx = 0; idx < input_list.length; idx++)
    {
        field = input_list[idx];
        if (field.type == "text" || field.type == "password")
        {
            if (field.maxLength > 1024 || field.maxLength < 0)
                field.maxLength = 128;
        }
    }
    return true;
}

object_attach_handler(window, "load",
                      input_length_limit,
                      true)
