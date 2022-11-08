import { useUserState } from '../hooks/now-context';

export const BookMark = () => {
  console.log('@@@ Profile');
  const { nowUsing, logout } = useUserState();

  return (
    <>
      <h1>My Index</h1>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>

      <div></div>
    </>
  );
};
