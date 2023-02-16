const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function generateResponse(text) {
  const response = await openai.createCompletion({
    model: "code-davinci-003",
    prompt: text,
    temperature: 0.3,
    max_tokens: 3000,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  return response.data.choices[0].text
}

async function main() {
    const result = await generateResponse("What")
    console.log(result)
}

main()
