type Props = {
  params: {
    teacherId: string;
  };
};

export default function TeacherProfile({ params }: Props) {
  return (
    <div>
      <h1>Melihat Profil Guru: {params.teacherId}</h1>
    </div>
  );
}