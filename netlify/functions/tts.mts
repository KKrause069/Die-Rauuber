// Netlify Function: Text-to-Speech via ElevenLabs
// Required env var (set in Netlify → Site settings → Environment variables):
//   ELEVENLABS_API_KEY
import type { Context } from "@netlify/functions";

export default async (req: Request, _ctx: Context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return new Response("ELEVENLABS_API_KEY missing", { status: 500 });
  }
  let body: { text?: string; voiceId?: string };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }
  const text = (body.text || "").toString().slice(0, 5000);
  if (!text.trim()) return new Response("Empty text", { status: 400 });
  const voiceId = body.voiceId || "XrExE9yKIg1WjnnlVkGX";

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
};

export const config = {
  path: "/.netlify/functions/tts",
};
