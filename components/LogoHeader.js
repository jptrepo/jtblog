import Image from 'next/image'

export default function LogoHeader() {
  return (
    <Image
      src="/static/images/me-profile.jpg"
      alt="me"
      width="64"
      height="64"
      className="h-10 w-10 rounded-full"
    />
  )
}
