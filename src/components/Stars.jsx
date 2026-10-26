// Picked once when the page loads, so the stars stay in place
// instead of jumping around every time React re-renders.
const stars = Array.from({ length: 150 }, () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: 1 + Math.random(),
  brightness: 0.3 + Math.random() * 0.7,
  twinkleEvery: 4 + Math.random() * 6,
  firstTwinkle: Math.random() * 10,
}));

const Stars = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {stars.map((star, index) => (
        <span
          key={index}
          className="star absolute rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            backgroundColor: `rgba(255, 255, 255, ${star.brightness})`,
            animationDuration: `${star.twinkleEvery}s`,
            animationDelay: `${star.firstTwinkle}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
