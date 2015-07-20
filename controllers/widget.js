var args = arguments[0] || [],
  height = 0,
  opened = false,
  duration = args.duration || 300,
  animation = Ti.UI.createAnimation();

/**
 * Check the current views open state (true on open, false on closed)
 * @returns {boolean}
 */
exports.isOpen = function() {
  return opened;
};

/**
 * Open the view
 */
exports.open = function() {
  opened = true;
  height = getCalculatedHeight();

  animation.setBottom(0);
  animation.duration = duration;

  $.popView.animate(animation);
};

/**
 * Close the view
 */
exports.close = function() {
  opened = false;
  height = getCalculatedHeight();

  animation.setBottom(-height);
  animation.duration = duration;

  $.popView.animate(animation);
};

/**
 * Get the calculated height of the view
 * @returns {*}
 */
function getCalculatedHeight() {
  return $.popView.rect.height;
}

/**
 * Initialize the widget with the children and height of the view.
 */
(function initWidget() {
  var children;

  if (args.children) {
    children = args.children || [];

    if (OS_IOS) {
      $.popView.add(children);
    }

    if (OS_ANDROID) {
      for (var i = 0; i < children.length; i++) {
        $.popView.add(children[i]);
      }
    }
  }

  $.popView.addEventListener('postlayout', function(){
    if (height === 0) {
      height = getCalculatedHeight();
      $.popView.setBottom(-height);
    }
  });
})();