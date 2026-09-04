
type Props = {
  params: {
    blogId: string;
  };
};

export default function BlogDetail({ params }: Props) {
  return (
    <div>
      <h1>Details about blog {params.blogId}</h1>
    </div>
  );
}