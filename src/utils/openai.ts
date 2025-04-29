import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY environment variable");
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type WeeklyReviewResponse = {
  rating: number;
  feedback: string;
};

export async function generateWeeklyReview(
  userProfile: {
    background: string;
    currentStatus: string;
    futureGoals: string;
    areasForImprovement: string;
    yearlyGoals: string;
  },
  weeklyContent: string
): Promise<WeeklyReviewResponse> {
  const prompt = `
You are WEEKAI, an AI assistant that helps users track and improve their weekly progress.
You have access to the user's profile and their weekly update.

User Profile:
Background: ${userProfile.background}
Current Status: ${userProfile.currentStatus}
Future Goals: ${userProfile.futureGoals}
Areas for Improvement: ${userProfile.areasForImprovement}
Yearly Goals: ${userProfile.yearlyGoals}

Weekly Update:
${weeklyContent}

Based on the above information:
1. Rate the user's week on a scale of 0-10
2. Provide detailed, constructive feedback that:
   - Acknowledges their achievements
   - Identifies areas for improvement
   - Suggests specific actions for next week
   - Aligns with their long-term goals
   - Is encouraging and motivational

Format your response as JSON:
{
  "rating": number,
  "feedback": string
}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "You are WEEKAI, a supportive AI assistant that helps users track and improve their weekly progress. You provide ratings and feedback based on weekly updates, considering the user's profile and goals.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: { type: "json_object" },
    temperature: 0.7,
  });

  const result = JSON.parse(
    response.choices[0].message.content ||
      '{"rating": 0, "feedback": "Error processing response"}'
  );
  return result;
}

export async function generateWelcomeEmail(name: string): Promise<string> {
  const prompt = `
Generate a welcoming email for a new WEEKAI user. The email should:
1. Welcome them by name
2. Explain that WEEKAI will help them track and improve their weekly progress
3. Ask them to provide information about:
   - Their background and current role
   - Their current status and future goals
   - Areas they want to improve
   - Their yearly goals
4. Encourage them to be honest and detailed in their responses
5. Include motivational quotes about self-improvement

The tone should be friendly, professional, and encouraging.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are WEEKAI, writing a welcome email to a new user.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content || "Welcome to WEEKAI!";
}
