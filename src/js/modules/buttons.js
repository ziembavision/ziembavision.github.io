import smoothscroll from 'smoothscroll-polyfill';
import { volcano, currentData, $compass, $menu, $menuClose, $buttons, $targets, $view, $viewClose, $title, $home } from '../constants';
import { debounce } from '../utils';

const buttons = () => {
  let menuIsVisible = false;
  let viewIsVisible = false;
  let currentView;

  const showMenu = () => {
    setTimeout(() => {
      $menu.classList.add('show');
      $menu.classList.remove('hide', 'hidden');
    }, 100);
    
    $compass.classList.add('hide');
    $compass.classList.remove('show');
    setTimeout(() => $compass.classList.add('hidden'), 1100);

    menuIsVisible = true;
  };

  const hideMenu = () => {
    $menu.classList.add('hide');
    $menu.classList.remove('show');
    setTimeout(() => $menu.classList.add('hidden'), 1100);

    if (!viewIsVisible) {
      $compass.classList.add('show');
      $compass.classList.remove('hide', 'hidden');
    }

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
    else {
      $compass.classList.add('show');
      $compass.classList.remove('hide', 'hidden');
    }
  };

  let prevView;
  const hideView = () => {
    view.classList.remove('transparent');

    $view.classList.add('hide');
    $view.classList.remove('show');
    setTimeout(() => $view.classList.add('hidden'), 1100);

    $compass.classList.add('show');
    $compass.classList.remove('hide', 'hidden');

    viewIsVisible = false;
  };

  $compass.addEventListener('click', () => {
    !menuIsVisible && showMenu();
  });

  $menuClose.addEventListener('click', () => {
    menuIsVisible && hideMenu();
  });

  Object.keys($buttons).forEach(key => {
    $buttons[key].addEventListener('click', () => {
      $targets[key].scrollIntoView({behavior: "smooth"});
    });

    if (key === 'listen') return;

    $targets[key].addEventListener('click', debounce(() => {

      const id = key === 'person' ? `content-dates` : `content-${key}`;
      const contentElement = document.getElementById(id);

      if (currentView !== contentElement) {
        prevView = currentView;
        currentView = contentElement;
      };

      contentElement.classList.remove('hide', 'hidden');
      if (prevView) prevView.classList.add('hide', 'hidden');

      viewIsVisible ? hideView() : showView(key);
    }, 300));
  });

  $viewClose.addEventListener('click', () => hideView());
};

export default buttons;