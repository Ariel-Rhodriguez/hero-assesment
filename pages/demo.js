import Hero from '../components/Hero/Hero';

export default function Demo() {
  return (
    <>
      <Hero
        src="/sample-image.jpg"
        alt="Sample Hero"
        title="Welcome to the Hero Component"
        description="This is a description you can position using props."
        placeTitle="center"
        placeDescription="center"
      />
    </>
  );
}
