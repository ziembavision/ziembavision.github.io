import { $compassSm as $compass, $menuSm as $menu, $menuCloseSm as $menuClose, $buttonsSm as $buttons, $view } from '../constants';
import { debounce } from '../utils';

const buttonsSm = () => {
	let menuIsVisible = false;
	let viewIsVisible = false;
	let currentView;

	const showMenu = () => {
    setTimeout(() => {
      $menu.classList.add('show');
      $menu.classList.remove('hide', 'hidden');
    }, 100);

    menuIsVisible = true;
  };

   const hideMenu = () => {
    $menu.classList.add('hide');
    $menu.classList.remove('show');
    setTimeout(() => $menu.classList.add('hidden'), 1100);

    menuIsVisible = false;
  };

  const showView = (key) => {
    if (key === 'watch') view.classList.add('transparent');

    $view.classList.add('show');
    $view.classList.remove('hide', 'hidden');
    viewIsVisible = true;
    if (menuIsVisible) {
      hideMenu();
    }
  };

  let prevView;
  const hideView = () => {
    view.classList.remove('transparent');

    $view.classList.add('hide');
    $view.classList.remove('show');
    setTimeout(() => $view.classList.add('hidden'), 1100);

    viewIsVisible = false;
  };

  $compass.addEventListener('click', () => {
    !menuIsVisible && showMenu();
  });

  $menuClose.addEventListener('click', () => {
    menuIsVisible && hideMenu();
  });

  $compass.addEventListener('click', () => {
  	console.log('hi')
  	!menuIsVisible && showMenu();
	});

  $menuClose.addEventListener('click', () => {
    menuIsVisible && hideMenu();
  });

  Object.keys($buttons).forEach(key => {
  	$buttons[key].addEventListener('click', debounce((e) => {
  		const id = key === 'person' ? `content-dates` : `content-${key}`;
  		const contentElement = document.getElementById(id);

  	  if (currentView !== contentElement) {
        prevView = currentView;
        currentView = contentElement;
      };

      contentElement.classList.remove('hide', 'hidden');
      if (prevView) prevView.classList.add('hide', 'hidden');

      viewIsVisible ? hideView() : showView(key);

  	}, 100));
  });
}

export default buttonsSm;