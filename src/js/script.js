$(function() {
	function setSidebarPosition() {		
		$sidebar = $('.sidebar');
		if($sidebar.length > 0 && $('.content')[0].scrollHeight <  $sidebar[0].scrollHeight) {
			$sidebar.css({
				'position': 'relative',
				'top': '0',
				'float': 'left'
			});
			$(window).off('scroll');
		} else {
			$sidebar.css({
				'position': 'fixed',
				'float': 'none'
			});
			$(window).on('scroll', function (e) {
				if(e.currentTarget.innerHeight + e.currentTarget.scrollY < $sidebar[0].scrollHeight) {
					$sidebar.css('top', -e.currentTarget.scrollY + 'px');
				} else{
					$sidebar.css('top', e.currentTarget.innerHeight - $sidebar[0].scrollHeight + 'px');
				}
			});
		}
	}
	function selectView(){
		var $select = $('#foo');
		if($select.val() != null){
			$select.css('color', '#000');
		};
	}

	setSidebarPosition();
	$(window).on('resize', setSidebarPosition);

	var element = $('#foo')[0], opened = false;

	$('.js-select').on('click', function(event){
		if(!opened){
			if (document.createEvent) {
			    var e = document.createEvent("MouseEvents");
			    e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			    element.dispatchEvent(e);
			} else if (element.fireEvent) {
			    element.fireEvent("onmousedown");
			}
			opened = true;
		}else{
			opened = false
		}
		event.stopPropagation();
	});
	$('#foo').on('blur', function(){
		if(opened){
			opened = false;
		}
	});
	$('#foo').on('change', selectView);
});