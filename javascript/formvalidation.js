var formContainer = $("#form-container");
bindFormClick();
function bindFormClick() {
    $(formContainer).on("click", function (e) {
        e.preventDefault();
        toggleForm();
        $(this).off();
    });
}
$("#form-close, .form-overlay").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    toggleForm();
    bindFormClick();
});
function toggleForm() {
    $(formContainer).toggleClass("expand");
    $(formContainer).children().toggleClass("expand");
    $("body").toggleClass("show-form-overlay");
    $(".form-submitted").removeClass("form-submitted");
}
$("form").submit(function () {
    var form = $(this);
    form.find(".form-error").removeClass("form-error");
    var formError = false;
    $("form").find("span").remove();
    form.find(".input").each(function () {
        if ($(this).val() == "") {
            $(this).addClass("form-error");
            $("input").attr("placeholder", "This can't be empty.");
            $(this).select();
            formError = true;
            return false;
        } else if ($(this).hasClass("email") && $(this).val() === "") {
            $(this).addClass("form-error");
            $("input").attr(
                "placeholder",
                "Please provide your email so we know how to contact you"
            );
            $(this).select();
            formError = true;
            return false;
        } else if (
            $(this).hasClass("name") &&
            !$(this).val().match("^[a-zA-Z]+$")
        ) {
            $(this).addClass("form-error");
            $("#firstname").after(
                '<span class="err-msg">There are no numbers allowed in the name</span>'
            );
            $(this).select();
            formError = true;
            return false;
        } else if ($(this).hasClass("email") && !isValidEmail($(this).val())) {
            $(this).addClass("form-error");
            $("#email").after(
                '<span class="err-msg">This is not a valid E-Mail address format</span>'
            );
            $(this).select();
            formError = true;
            return false;
        }
    });
    if (!formError) {
        $("body").addClass("form-submitted");
        $("#form-head").addClass("form-submitted");
        setTimeout(function () {
            $(form).trigger("reset");
        }, 1e3);
    }
    return false;
});
function isValidEmail(email) {
    let pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
}
