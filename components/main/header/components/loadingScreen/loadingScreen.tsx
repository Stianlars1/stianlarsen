import "./loadingScreen.css";

const ProgressBarLoadingScreen = ({ timer }: { timer: number }) => {
  return (
    <div className="progress-wrapper">
      <div className="progress-container">
        <h2 className="title">Initializing StianLarsen.com</h2>
        <div className="progress-bar" style={{ width: `${timer}%` }}></div>
        <div className="progress-timer">{timer}%</div>
      </div>
    </div>
  );
};

export default ProgressBarLoadingScreen;
