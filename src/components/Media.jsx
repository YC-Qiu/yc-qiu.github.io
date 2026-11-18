import { useLocale } from "../i18n/locale";
import { useState } from "react";
export function ProjectImage({ src, alt, eager = false, sizes = "(max-width: 760px) 90vw, 550px" }) {
  const { t } = useLocale();
  const [failed, setFailed] = useState(false);
  const optimized = /^\/assets\/(game|ai_projects|board_game|work)\/.+\.png$/.test(
    src,
  );
  if (failed)
    return (
      <div className="image-unavailable">
        {alt}
        <span>{t("Preview unavailable", "预览暂不可用")}</span>
        <a href={src} target="_blank" rel="noreferrer">
          {t("Open original image ↗", "查看原图 ↗")}
        </a>
      </div>
    );
  return (
    <picture>
      {optimized && (
        <source
          type="image/webp"
          srcSet={`${src.replace(".png", "-mobile.webp")} 720w, ${src.replace(".png", ".webp")} 1440w`}
          sizes={sizes}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onError={(event) => {
          const source =
            event.currentTarget.parentElement.querySelector("source");
          if (source) {
            source.remove();
            event.currentTarget.src = src;
          } else setFailed(true);
        }}
      />
    </picture>
  );
}
export function VideoPreview({ src, title }) {
  const { t } = useLocale();
  const [playing, setPlaying] = useState(false);
  return (
    <div className="video-block">
      <div className="video-preview">
        {playing ? (
          <iframe
            src={src.replace("youtube.com", "youtube-nocookie.com")}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)}>
            <span className="play-icon" aria-hidden="true">
              ▶
            </span>
            <span>
              {t("Load video demo", "播放演示视频")}<small>{title}</small>
            </span>
          </button>
        )}
      </div>
      <a
        className="video-fallback"
        href={src.replace("/embed/", "/watch?v=")}
        target="_blank"
        rel="noreferrer"
      >
        {t("Watch on YouTube ↗", "在 YouTube 观看 ↗")}
      </a>
    </div>
  );
}
