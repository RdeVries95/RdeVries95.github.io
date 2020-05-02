export function setName(name) {
  console.log(name)
  sessionStorage.setItem('name', name)
}

export function getName() {
  return sessionStorage.getItem('name')
}