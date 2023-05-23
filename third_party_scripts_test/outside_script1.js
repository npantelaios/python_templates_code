if (false) {
  eval(new String('2+2'));
  console.log('first only ');
  var url =
    'https://raw.githubusercontent.com/npantelaios/python_templates_code/master/third_party_scripts_test/outside_script2.js';

  // '/content/console_log_local.js'
  eval(new String('2+2'));
  injectLocalScript(url);
}

function injectLocalScript(script_url) {
  var s = document.createElement('script');
  s.src = script_url;
  s.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
}
