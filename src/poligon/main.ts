import { config } from "https://deno.land/x/dotenv/mod.ts";
import { getArrayFromLines } from "#/utils/getArrayFromLines.ts";

// https://poligon.aidevs.pl/api

const API = {
  poligon: {
    data: "https://poligon.aidevs.pl/dane.txt",
    verify: "https://poligon.aidevs.pl/verify",
  }
}

const task = "POLIGON";
const { POLIGON_APIKEY: apikey } = config({ safe: true });

if (import.meta.main) {
  const data = await fetch(API.poligon.data);
  const answer = getArrayFromLines(await data.text())

  const payload = {
    task,
    apikey,
    answer,
  };
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  }

  const request = new Request(API.poligon.verify, requestOptions);
  const res = await fetch(request);
  console.log('run: POST', API.poligon.verify);
  console.log(JSON.stringify(await res.json(), null, 2));
}
