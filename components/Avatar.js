/* eslint-disable @next/next/no-img-element */
function Avatar({url, className}) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile-pic"
      className={`h-10 rounded-full cursor-pointer transtion duration-150 transform hover:scale-110 ${className}`} // rounded-lg square with borders
    />
  )
}

export default Avatar
