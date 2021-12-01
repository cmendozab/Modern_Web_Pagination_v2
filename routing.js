// This is a function that takes a page path as an argument
// You need to make the function load the content of that page into the "content" div on the index file

var routes = {
  '': 'home.html',
  '/':  'index.html',
  '#home':  'index.html',
  '#signin_link':  'signin.html',
  '#mission_link': 'mission.html',
  '#about_link':  'about.html'
};


function router(){
  console.log(location.hash);

  var link = window.location.hash;
  var route =routes[link];
  if(route) loadPage(route);
}
router();
window.addEventListener('hashchange', router);


async function loadPage(page) {
  console.log(location.hash);
  // fetch the page, use await
  //const res;
  //let pages = location.hash.replace('#', '');
  //console.log(pages);
  //console.log(location.pathname);
  //console.log(page);  
  const res = await fetch(page);
  console.log(res);
  // get text from res, use await
  const content = await res.text();
  console.log(content);
  // get the element with id 'content'
  const element = document.getElementById('content');
  // set innerHTML of the element
  element.innerHTML = content;

  // get text from res, use await
  //const content;
  // get the element with id 'content'
  //const element;
  // set innerHTML of the element
  // your code goes here
}

//const pagepath = location.pathname;

//window.addEventListener('hashchange', loadPage);
