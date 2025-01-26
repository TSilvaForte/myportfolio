"use client";
import { createContext, useContext, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Cargar YouTube dinámicamente
const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

// Crear el contexto
const AudioContext = createContext<{
  isPlaying: boolean;
  togglePlayPause: () => void;
} | null>(null);

// Proveedor del contexto
export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Opciones para configurar el reproductor
  const opts = {
    height: "0", // Ocultar el video
    width: "0", // Ocultar el video
    playerVars: {
      autoplay: 1, // Inicia automáticamente
      loop: 1, // Habilitar el loop
      playlist: "90RLzVUuXe4",
      mute: 0 // Para que funcione el loop en YouTube
    },
  };

  useEffect(() => {
    // Asegurarse de que player está inicializado correctamente
    if (player && typeof player.playVideo === "function" && player.getIframe()) {
      player.playVideo();
      setIsPlaying(true);
    }
  }, [player]);

  // Cuando el reproductor está listo
  const onReady = (event: any) => {
    if (event?.target) {
      setPlayer(event.target); // Guardar la instancia del reproductor
      event.target.playVideo(); // Iniciar automáticamente
      setIsPlaying(true);
    }
  };

  // Alternar reproducción/pausa
  const togglePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Cuando finaliza el video (opcional, en caso de que no funcione el loop de YouTube)
  const onEnd = () => {
    if (player) {
      player.playVideo(); // Reiniciar el video
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlayPause }}>
      <YouTube
        videoId="90RLzVUuXe4"
        opts={opts}
        onReady={onReady}
        onEnd={onEnd} // Escucha para reiniciar si es necesario
      />
      {children}
    </AudioContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio debe ser usado dentro de un AudioProvider");
  }
  return context;
};
