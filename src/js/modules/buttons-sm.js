import { $compassSm as $compass, $menuSm as $menu, $menuCloseSm as $menuClose, $buttonsSm as $buttons, $view, $viewOuter, $viewClose } from '../constants';
import { debounce } from '../utils';

const buttonsSm = () => {
	let menuIsVisible = false;
	let viewIsVisible = false;
	let currentView;

  const colors = {
    'press': '#e0ffe7',
    'person': '#ffe8cc',
    'about': '#ffe8f9',
    'ardis': '#d8fffc',
  }

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
    $viewOuter.setAttribute(`style`, `background: ${colors[key]}`);

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
  	!menuIsVisible && showMenu();
	});

  $menuClose.addEventListener('click', () => {
    menuIsVisible && hideMenu();
  });

  Object.keys($buttons).forEach(key => {
  	$buttons[key].addEventListener('click', debounce(() => {
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

  $viewClose.addEventListener('click', () => hideView());
}

export default buttonsSm;