import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { prompt } = await req.json();

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN!,
    });

    const output = await replicate.run(
      "stability-ai/stable-diffusion-xl-base-1.0",
      {
        input: {
          prompt,
          negative_prompt: "blurry, bad quality, worst quality",
          width: 1024,
          height: 1024,
          scheduler: "K_EULER",
          num_outputs: 1,
          guidance_scale: 7.5,
          num_inference_steps: 50,
        },
      }
    );

    return NextResponse.json(output);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 