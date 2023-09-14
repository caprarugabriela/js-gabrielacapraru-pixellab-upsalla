var routes = [
  {
    name: 'Home',
    route: '/',
    text: 'Homepage',
  },
  {
    name: 'Contact',
    route: '/contact',
    text: 'Contact page',
  },
  {
    name: 'About',
    route: '/about',
    text: 'About page',
  },
];

var selectedRoute = '/about-us';

switch (selectedRoute) {
  case '/':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
    break;

  case '/about':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
    break;

  case '/contact':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
    break;

  default:
    console.log('404');
}
