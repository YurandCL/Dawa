function contacto(){
  ventana.document.write('</head><body >');
  ventana.document.write('<h1>Gracias por visitarnos</h1>');
  ventana.document.write('<h1>Te esperamos de vuelta pronto</h1>');
  ventana.document.write('</body></html>');
  ventana.document.close();
  ventana.focus();
  ventana.print();
  ventana.close();
  return true;
}