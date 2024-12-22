import Card from "./card";

export default function Cards() {
  return (
    <div className="flex flex-col items-center gap-4 bg-black p-4">
      <Card text="I’m eager to see your creative work." />
      <Card text="I have a web/app idea." />
      <Card text="Software & design support." />
    </div>
  );
}
