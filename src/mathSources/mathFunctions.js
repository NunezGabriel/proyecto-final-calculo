// Hallar Raices ecuacion de segundo grado

function discrim(a, b, c) {
  return b * b - 4 * a * c;
}
function solucionar(a, b, c, sol) {
  let disc = discrim(a, b, c);
  if (disc < 0) alert("Sin solución real");
  else {
    sol[0] = (-b + Math.sqrt(disc)) / (2 * a);
    sol[1] = (-b - Math.sqrt(disc)) / (2 * a);
  }
} //modificar
