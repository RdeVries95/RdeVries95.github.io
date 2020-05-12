export function setName(name) {
  sessionStorage.setItem('name', name)
}

export function getName() {
  return sessionStorage.getItem('name')
}