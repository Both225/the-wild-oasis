import { useCurrentUser } from "../authentication/useCurrentUser";

function UserAvatar() {
  const { currentUser } = useCurrentUser();

  console.log(currentUser);

  const { fullName, avatar } = currentUser.user_metadata;

  return (
    <div className="flex items-center gap-5">
      <img
        className="size-12"
        src={avatar || "default-user.jpg"}
        alt="user's profile"
      />
      <p>{fullName}</p>
    </div>
  );
}

export default UserAvatar;
