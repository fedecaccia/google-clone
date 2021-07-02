function Avatar({url}) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile-pic"
      className="h-10 rounded-full cursor-pointer transtion duration-150 transform hover:scale-110" // rounded-lg square with borders
    />
  )
}

export default Avatar
