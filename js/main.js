jQuery(function($) {
    (function () {
        var $main = $('.filter');
        if ($main.length == 0) return;

        var input_css = $main.find('.value');
        var target_css = $main.find('.target');
        var list_item = $main.find('.anim-list li');

        $main.on('keyup', input_css, function() {
            var val = $main.find('.value').val();

            $('body').on('keydown', function(event) {
                if (event.keyCode == 13) {
                    target_css.html(val);
                }
                if (event.keyCode == 27) {
                    input_css.val('');
                }
            });

            list_item.each(function(index) {
                var $this = $(this);
                var item_content = $this.html();
                if (item_content.toLowerCase().match(val)) {
                    $this.fadeIn(200);
                } else {
                    $this.fadeOut(200);
                }
            });
        });
    })();
});
