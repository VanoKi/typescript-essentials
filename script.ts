import {log} from 'console'

const profile = {
  name: "Sasha",
  settings: {
    theme: "light",
    notifications: true
  }
};

type profileType = typeof profile

const updateTheme = (profile:profileType, theme:string):any => {
  return {...profile, ...profile.settings, theme: 'dark'}
}

log(updateTheme(profile, 'dark'))