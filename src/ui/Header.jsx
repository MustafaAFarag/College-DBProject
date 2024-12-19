import batImage from "../assets/bat.png";

export default function Header() {
  return (
    <div className="text-white text-center p-8">
      <p className="text-4xl text-yellow-500 font-semibold mb-4">
        Database Project
      </p>

      <p className="text-xl mb-6">Under Supervision: Amany Ahmed</p>

      <img
        src={batImage}
        alt="Bat"
        className="w-32 h-32 mx-auto absolute right-[38rem] top-2"
      />
      <img />

      <div className="flex justify-center gap-12 text-lg font-medium">
        <p className="team-member">Mohamed Samir</p>
        <p className="team-member">Mustafa Ashraf</p>
        <p className="team-member">Yousef Sherif</p>
        <p className="team-member">Mohaymen Hani</p>
        <p className="team-member">Mohamed Salama</p>
      </div>
    </div>
  );
}
