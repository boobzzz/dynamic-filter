jQuery(function($) {
    (function() {
        var $main = $('.filter');
        if ($main.length == 0) return;

        var input_css = '.value';
        var target_css = '.target';
        var list_item_css = '.anim-list li';

        $('body').on('keydown', function(event) {
            var val = $main.find(input_css).val();

            if (event.keyCode == 13) {
                $main.find(target_css).html(val);
            }
            if (event.keyCode == 27) {
                $main.find(input_css).val('');
            }
        });

        $main.on('keyup', input_css, function() {
            var val = $main.find(input_css).val();

            $main.find(list_item_css).each(function() {
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
