import { useUserState } from '../hooks/now-context';

export const BookMark = () => {
  console.log('@@@ Profile');
  const { nowUsing, logout } = useUserState();
  //{session.loginUser.name} ({session.loginUser.id});
  return (
    <>
      <h1>Bookmark of {nowUsing.loginUser.id};</h1>
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
