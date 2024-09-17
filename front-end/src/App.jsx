// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from './redux/userSlice';

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // Dispatcher l'action pour réhydrater l'utilisateur
//       dispatch(loginUser({ token }));
//     }
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>My App</h1>
//       {/* Routes ou composants */}
//     </div>
//   );
// };

// export default App;
