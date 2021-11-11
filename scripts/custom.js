$(document).ready(function () {
    $("body").on("submit", ".js_form-partners", function (e) {
        e.preventDefault();
        $(".js_form-partners_error_text").hide();

        var form = $(this),
            requierFields = form.find(".require"),
            validate = true;

        requierFields.each(function () {
            if ($(this).val().length <= 0) {
                $(this).addClass("error");
                validate = false;
            } else {
                $(this).removeClass("error");
            }
        });

        if (validate === false) {
            $(".js_form-partners_error_text").show();
            return false;
        } else {
            $.ajax({
                type: form.attr("method"),
                url: form.attr("action"),
                data: form.serialize(),
                cache: false,
                dataType: "json",
                success: function (data) {
                    if (data["status"] == "ok") {
                        $(".starmodal-overlay .starmodal-content").children().remove();
                        $(".starmodal-overlay").remove();
                    }
                },
                error: function (msg) {
                    // console.log(msg);
                },
            });
        }
    });

    $("body").on("submit", ".js_form-catalog", function (e) {
        e.preventDefault();

        var form = $(this),
            requierFields = form.find(".require"),
            validate = true;

        requierFields.each(function () {
            if ($(this).val().length <= 0) {
                $(this).addClass("error");
                validate = false;
            } else {
                $(this).removeClass("error");
            }
        });

        if (validate === false) {
            return false;
        } else {
            $.ajax({
                type: form.attr("method"),
                url: form.attr("action"),
                data: form.serialize(),
                cache: false,
                dataType: "json",
                success: function (data) {
                    if (data["status"] == "ok") {
                        form[0].reset();

                        $("body").append(
                            '<div class="starmodal-overlay starmodal-overlay-in">' +
                                '  <div class="starmodal-body starmodal-modal-in">' +
                                '    <button class="starmodal-close-button"></button>' +
                                '    <div class="starmodal-content">' +
                                '      <div id="success">' +
                                '        <div class="successMessage">Р—Р°СЏРІРєР° СѓСЃРїРµС€РЅРѕ РїСЂРёРЅСЏС‚Р°!</div>' +
                                "      </div>" +
                                "    </div>" +
                                "  </div>" +
                                "</div>"
                        );
                    }
                },
                error: function (msg) {
                    // console.log(msg);
                },
            });
        }
    });

    $(".js_form-partners input").on("keyup", function () {
        var form = $(this).closest("form"),
            requierFields = form.find(".require"),
            validate = true;

        requierFields.each(function () {
            if ($(this).val().length <= 0) {
                validate = false;
            }
        });

        if (validate === false) {
            $(".order__submit input").attr("disabled", true);
        } else {
            $(".order__submit input").attr("disabled", false);
        }
    });

    $("body").on("click", ".starmodal-close-button", function () {
        $(".starmodal-overlay").remove();
    });
    $("body").on("click", function (e) {
        if ($(e.target).hasClass("starmodal-overlay")) {
            $(".starmodal-overlay").remove();
        }
    });
});
