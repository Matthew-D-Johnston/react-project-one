export const formatAltAtts = (name, type) => {
  if (type === 'home') {
    return name.toLowerCase().replace(' ', '-');
  } else {
    const address = name.split(',');
    return address.toLowerCase().replace(' ', '-');
  }
}

