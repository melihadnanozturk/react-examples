export default async function page({ params }) {
  const number = (await params).id;
  return <h1>Param IDS : {number}</h1>;
}
