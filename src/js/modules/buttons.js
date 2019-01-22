import smoothscroll from 'smoothscroll-polyfill';
import { volcano, currentData, $compass, $menu, $buttons, $targets, $view, $viewClose, $title, $home } from '../constants';
import { debounce } from '../utils';

const buttons = () => {
  let menuIsVisible = false;
  let viewIsVisible = false;
  let currentView;

  const showMenu = () => {
    $menu.classList.add('show');
    $menu.classList.remove('hide', 'hidden');
    menuIsVisible = true;
  };

  const hideMenu = () => {
    $menu.classList.add('hide');
    $menu.classList.remove('show');
    setTimeout(() => $menu.classList.add('hidden'), 1100);
    menuIsVisible = false;
  };

  const showView = () => {
    $view.classList.add('show');
    $view.classList.remove('hide', 'hidden');
    viewIsVisible = true;
    if (menuIsVisible) hideMenu();
  };

  let prevView;
  const hideView = () => {
    $view.classList.add('hide');
    $view.classList.remove('show');
    setTimeout(() => $view.classList.add('hidden'), 1100);
    viewIsVisible = false;
  };

  $compass.addEventListener('click', () => {
    menuIsVisible ? hideMenu() : showMenu()
  });

  Object.keys($buttons).forEach(key => {
    $buttons[key].addEventListener('click', () => {
      $targets[key].scrollIntoView({behavior: "smooth"});
    });

    $targets[key].addEventListener('click', debounce(() => {
      if (key === 'listen') return;

      const id = key === 'person' ? `content-dates` : `content-${key}`;
      const contentElement = document.getElementById(id);

      if (currentView !== contentElement) {
        prevView = currentView;
        currentView = contentElement;
      };

      contentElement.classList.remove('hide', 'hidden');
      if (prevView) prevView.classList.add('hide', 'hidden');

      viewIsVisible ? hideView() : showView();
    }, 300));
  });

  $viewClose.addEventListener('click', () => hideView());
};

export default buttons;