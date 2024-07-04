import { Section, ProfileView, CreateProfile } from "./components";
import { profileInfo } from "./mock/user";

function App() {
  return (
    <main>
      <Section className={"mt-20"}>
        <ProfileView profileData={profileInfo.userInfo} />
      </Section>
      <Section
        className={"mt-20"}
        title={"Latest Video"}
        description={"Check out more on my channel"}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NVvo9Zwx7No?si=hD71-HsBqmYzMfok"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Section>

      <Section className={"mt-20"} xl>
        <div className="bg-red-400 p-10">asdfasdf</div>
      </Section>
      <CreateProfile />
    </main>
  );
}

export default App;
