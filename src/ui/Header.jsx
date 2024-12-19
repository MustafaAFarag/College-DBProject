export default function Header() {
  return (
    <div className="text-white text-center p-8">
      {/* Project Title */}
      <p className="text-4xl text-yellow-500 font-semibold mb-4">
        Database Project
      </p>

      {/* Supervisor Name */}
      <p className="text-xl mb-6">Under Supervision: Amany Ahmed</p>

      {/* Team Members with Glow Animation */}
      <div className="flex justify-center gap-12 text-lg font-medium">
        <p className="team-member">Mohamed Samir</p>
        <p className="team-member">Mustafa Ashraf</p>
        <p className="team-member">Yousef Sherif</p>
        <p className="team-member">Mohaymen Hani</p>
      </div>
    </div>
  );
}
