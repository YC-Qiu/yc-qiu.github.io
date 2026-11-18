import { useLocale } from "../i18n/locale";
import { useEffect, useRef, useState } from "react";

const faces = [
  [[40,40]], [[25,25],[55,55]], [[25,25],[40,40],[55,55]],
  [[25,25],[55,25],[25,55],[55,55]],
  [[25,25],[55,25],[40,40],[25,55],[55,55]],
  [[25,25],[55,25],[25,40],[55,40],[25,55],[55,55]],
];
export default function PlayCorner() {
  const { t } = useLocale();
  const [die, setDie] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [hop, setHop] = useState(0);
  const knightSquares = [[0, 0], [-2, 1], [-3, 3], [-1, 2]];
  const [knightX, knightY] = knightSquares[hop % knightSquares.length];
  const [turn, setTurn] = useState(0);
  const [paused, setPaused] = useState(false);
  const [message, setMessage] = useState("idle");
  const rollTimer = useRef(null);
  const piecesRef = useRef(null);
  useEffect(() => {
    const autoPlayTimer = window.setInterval(() => {
      if (document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const buttons = piecesRef.current?.querySelectorAll("button");
      if (!buttons?.length) return;
      const button = buttons[Math.floor(Math.random() * buttons.length)];
      if (button.getAttribute("aria-disabled") !== "true") button.click();
    }, 10_000);
    return () => window.clearInterval(autoPlayTimer);
  }, []);
  useEffect(() => () => clearTimeout(rollTimer.current), []);
  const roll = () => {
    if (rollTimer.current) return;
    const result = 1 + Math.floor(Math.random() * 6);
    const finish = () => {
      setRolling(false);
      rollTimer.current = null;
      setMessage("rolled");
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setDie(result); finish(); return; }
    setRolling(true);
    setMessage("rolling");
    // Change faces at each compressed pose, then keep the final face through landing.
    // Only one timer is active, so unmount cleanup cancels the entire sequence.
    const delays = [90, 110, 140, 170, 210];
    const step = (index) => {
      rollTimer.current = setTimeout(() => {
        if (index === delays.length - 1) {
          setDie(result);
          rollTimer.current = setTimeout(finish, 380);
        } else {
          setDie(current => (current + Math.floor(Math.random() * 5)) % 6 + 1);
          step(index + 1);
        }
      }, delays[index]);
    };
    step(0);
  };
  const messages = {
    idle: t("Roll a die. Make a move. Change perspective.", "掷骰子，走一步，换个角度。"),
    rolling: t("Rolling…", "掷骰中…"),
    rolled: t(`You rolled ${die}.`, `你掷出了 ${die} 点。`),
    puzzle: t(`Puzzle rotated to ${(turn % 4) * 90} degrees.`, `拼图已旋转至 ${(turn % 4) * 90} 度。`),
    "knight-returned": t("Knight returned.", "棋子已回到起点。"),
    "knight-moved": t("Knight moved two squares along one axis and one along the other.", "棋子沿一个方向走两格，再向侧面走一格。"),
  };
  return <section className={`play-corner animated-pieces${paused ? " pieces-paused" : ""}`} aria-label={t("Interactive game pieces", "可交互的游戏元素")}>
    <div className="play-pieces" ref={piecesRef}>
      <button type="button" className="controller-piece" aria-pressed={paused} aria-label={paused ? t("Resume controller animation", "恢复手柄动画") : t("Pause controller animation", "暂停手柄动画")} onClick={() => setPaused(!paused)}>
        <svg viewBox="0 0 120 90" aria-hidden="true">
          <path d="M30 18Q14 18 9 44L5 65Q4 80 17 79L36 63H84L103 79Q116 80 115 65L111 44Q106 18 90 18Q76 14 69 22H51Q44 14 30 18Z" fill="#79c9cd" stroke="#223d61" strokeWidth="4"/>
          <path d="M27 29h10v11h11v10H37v11H27V50H16V40h11z" fill="#f4fbff" stroke="#223d61" strokeWidth="3" strokeLinejoin="round"/>
          <circle className="pad-light light-a" cx="92" cy="31" r="6" fill="#f18e9d" stroke="#223d61" strokeWidth="3"/>
          <circle className="pad-light light-b" cx="104" cy="43" r="6" fill="#f6d77c" stroke="#223d61" strokeWidth="3"/>
          <circle className="pad-light light-c" cx="80" cy="43" r="6" fill="#78ade6" stroke="#223d61" strokeWidth="3"/>
          <circle className="pad-light light-d" cx="92" cy="55" r="6" fill="#9bd58a" stroke="#223d61" strokeWidth="3"/>
          <circle cx="60" cy="49" r="13" fill="#4f9ea9" stroke="#223d61" strokeWidth="3"/>
          <circle className="pad-stick" cx="60" cy="49" r="8" fill="#f5fbff" stroke="#223d61" strokeWidth="3"/>
        </svg>
      </button>
      <button type="button" className="play-piece scattered-die" aria-label={t("Roll the die", "掷骰子")} aria-disabled={rolling} onClick={roll}>
        <svg className={rolling ? "die-rolling" : ""} viewBox="0 0 80 80" aria-hidden="true"><rect x="12" y="12" width="56" height="56" rx="13" fill="#fff5ca" stroke="#223d61" strokeWidth="4" />{faces[die-1].map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#223d61"/>)}</svg>

      </button>
      <button type="button" className="play-piece scattered-puzzle" aria-label={t("Rotate the puzzle piece", "旋转拼图")} onClick={() => { setTurn(turn + 1); setMessage("puzzle"); }}>
        <svg viewBox="0 0 80 80" aria-hidden="true"><path style={{transform:`rotate(${turn * 90}deg)`,transformOrigin:'40px 40px'}} d="M22 22h12c-9-15 21-15 12 0h12v12c15-9 15 21 0 12v12H46c9-15-21-15-12 0H22V46c-15 9-15-21 0-12z" fill="#f18e9d" stroke="#223d61" strokeWidth="3" strokeLinejoin="round"/></svg>

      </button>
      <button type="button" className="play-piece scattered-knight" style={{"--square-x": knightX, "--square-y": knightY}} aria-label={t("Move the chess knight", "移动棋子")} onClick={() => { setHop(hop + 1); setMessage((hop + 1) % knightSquares.length === 0 ? "knight-returned" : "knight-moved"); }}>
        <svg viewBox="0 0 90 90" aria-hidden="true"><path d="M8 81h74" stroke="#223d61" strokeWidth="3"/>
          <g key={hop} className={hop ? "knight-hop" : ""}>
            <path d="M26 72h39l-5-7c8-19 4-36-9-46L35 10l3 12-15 11-6 13 9 8 15-10-2 13z" fill="#f6d77c" stroke="#223d61" strokeWidth="3" strokeLinejoin="round"/>
            <circle cx="37" cy="32" r="2.5" fill="#223d61"/><path d="M27 73h39v7H27z" fill="#78ade6" stroke="#223d61" strokeWidth="3" strokeLinejoin="round"/>
          </g>
        </svg>

      </button>
    </div>
    <p className="play-status" role="status">{messages[message]}</p>
  </section>;
}
