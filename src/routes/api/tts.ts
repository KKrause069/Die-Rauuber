import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/tts")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.ELEVENLABS_API_KEY;
        if (!apiKey) {
          return new Response("ELEVENLABS_API_KEY missing", { status: 500 });
        }
        let body: { text?: string; voiceId?: string };
        try {
          body = await request.json();
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }
        const text = (body.text || "").toString().slice(0, 5000);
        if (!text.trim()) return new Response("Empty text", { status: 400 });
        const voiceId = body.voiceId || "XrExE9yKIg1WjnnlVkGX"; // Matilda, warm German-capable

        const r = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
          {
            method: "POST",
            headers: {
              "xi-api-key": apiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text,
              model_id: "eleven_multilingual_v2",
              voice_settings: {
                stability: 0.55,
                similarity_boost: 0.8,
                style: 0.25,
                use_speaker_boost: true,
                speed: 1.0,
              },
            }),
          },
        );

        if (!r.ok) {
          const err = await r.text();
          return new Response(err || "TTS failed", { status: r.status });
        }
        const buf = await r.arrayBuffer();
        return new Response(buf, {
          status: 200,
          headers: {
            "Content-Type": "audio/mpeg",
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
