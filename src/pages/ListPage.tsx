import { useEffect, useState } from "react";
import { getListUsers } from "../api/services";

type UriAvatar = {
   uri: string;
}

interface User {
   id: string;
   name: string;
}



export const ListPage = () => {
   const [ data, setData ] = useState<User[]>([]);
   const [ avatars, setAvatars ] = useState<string[]>([]);
   const [ loading, setLoading ] = useState(true)

   useEffect(() => {
      getListUsers().then((res)=>{
         setData(res.data)
         setLoading(false);
      })
      
   }, [])

   const getAvatars = () => {
      const avatarUrls = data.map((e) => {
         const name = e.name.split(' ');
         return `https://ui-avatars.com/api/?name=${name[0] ?? ''}+${name[1] ?? ''}`;
      });
      setAvatars(avatarUrls);
      console.log(avatarUrls);
   };

   useEffect(() => {
      getAvatars();
   }, [data]);

   if(loading) return <p>Cargando...</p>
   //console.log(data)

   return (
      <div>
         <h2>Lists Users</h2>
         <ul>
            {data.map((user, idx)=>(
               <li key={user.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <img src={avatars[idx]} alt={user.name} width={40} height={40} />
                  {user.name}
               </li>
            ))}
         </ul>
      </div>
   )
}
