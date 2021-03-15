export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type sectionAboutProps = {
  sectionAboutProject: {
    title: string
    description: string
    media: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
}
