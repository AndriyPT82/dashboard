export const handleSelectedLink = (isActive, className='') => {
  return `${className} ` + (isActive ? `${className}--active` : '')
}
