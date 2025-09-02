import { useEffect, useState } from "react";
import { getListUsers } from "../api/services";
import { Loader } from "../components/Loader";

interface User {
   id: string;
   name: string;
}

export const ListPage = () => {
   const [ data, setData ] = useState<User[]>([]);
   const [ avatars, setAvatars ] = useState<string[]>([]);
   const [ loading, setLoading ] = useState<boolean>(true)
   const [ error, setError ]  = useState<string | null>(null);

   useEffect(() => {
      getListUsers().then((res)=>{
         setData(res.data)
         setLoading(false);
      }).catch(err => {
         console.error(err)
         setError('No se pudo cargar la lista.');
      }).finally(()=>{
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

   if (loading) return <Loader />
   if(error) return <div role="alert" aria-live="polite">{error}</div>
   //console.log(data)

   return (
      <div className="containerList">
         <h2 style={{ textAlign: 'center' }}>Lists Users</h2>
         <ul>
            {data.map((user, idx)=>{
               const nameParts = user.name.split(" ");
               const fallback = `https://ui-avatars.com/api/?name=${nameParts[0] ?? ""}+${nameParts[1] ?? ""}`;
               const src = avatars[idx] ?? fallback;

               return (
                  <li key={user.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', fontSize: 18 }}>
                     <img src={src} alt={user.name} width={55} height={55} style={{ borderRadius: 30 }} />
                     {user.name}
                  </li>
               )

            })}
         </ul>
      </div>
   )
}
