import smoothscroll from 'smoothscroll-polyfill';
import { volcano, currentData, $compass, $menu, $buttons, $targets, $view, $viewClose, $title, $home } from '../constants';
import { debounce } from '../utils';
import aboutTemplate from './cms/about';

const buttons = () => {
  console.log('riunning')
  let menuIsVisible = false;
  let viewIsVisible = false;

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
      viewIsVisible ? hideView() : showView()
    }, 300));
  });

  $viewClose.addEventListener('click', () => hideView());
};

export default buttons;