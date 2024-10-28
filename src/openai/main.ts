import OpenAI from 'openai'

if (import.meta.main) {
  const client = new OpenAI()

  // example from https://deno.com/blog/openai_sdk_deno

  const context = {
    messages: [{ role: 'user', content: 'Opowiedz suchara i wytłumacz dowcip.' }],
    model: "gpt-4-1106-preview"
  }
  const chatCompletion = await client.chat.completions.create(context)

  console.log(chatCompletion)
}