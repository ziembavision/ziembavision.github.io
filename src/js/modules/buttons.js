import smoothscroll from 'smoothscroll-polyfill';
import { volcano, currentData, $compass, $menu, $buttons, $targets, $view, $viewClose, $title, $home } from '../constants';
import { debounce } from '../utils';
import aboutTemplate from './cms/about';

const buttons = () => {
  let menuIsVisible = false;
  let viewIsVisible = false;
  let currentView;

  const showMenu = () => {
    $menu.classList.add('show');
    $menu.classList.remove('hide');
    menuIsVisible = true;
  };

  const hideMenu = () => {
    $menu.classList.add('hide');
    $menu.classList.remove('show');
    menuIsVisible = false;
  };

  const showView = () => {
    $view.classList.add('show');
    $view.classList.remove('hide');
    viewIsVisible = true;
    if (menuIsVisible) hideMenu();
  };

  const hideView = () => {
    $view.classList.add('hide');
    $view.classList.remove('show');
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
      const id = key === 'person' ? `content-dates` : `content-${key}`;
      const contentElement = document.getElementById(id);
      const prevView = currentView;
      currentView = contentElement;

      contentElement.classList.remove('hide');
      if (prevView) prevView.classList.add('hide');

      viewIsVisible ? hideView() : showView();
    }, 300));
  });

  $viewClose.addEventListener('click', () => hideView());
};

export default buttons;