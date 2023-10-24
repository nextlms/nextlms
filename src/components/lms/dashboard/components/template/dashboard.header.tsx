import Avatar from 'boring-avatars';

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-4">
      <div className="font-bold tracking-tight">nextlms</div>
      <div className="flex gap-2 items-center">
        <div className="font-medium tracking-tight">Student name</div>
        <Avatar size={32} name="Maria Mitchell" variant="beam" />
      </div>
    </header>
  );
};
