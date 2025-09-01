import axios from "axios";

export const getListUsers = () => {
   return axios.get('https://6172cfe5110a740017222e2b.mockapi.io/elements')// La URI de los avatares esta caído
}

export const avatarGeneratos = ({name}) => {
   return axios.get(`${name.first}+${name.last}`);
}