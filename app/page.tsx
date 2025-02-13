"use client";

import StudyPlansList from "@/components/study-plan-list";
import { StudyPlansProvider } from "@/lib/hooks/use-study-plans";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <>
      <CopilotKit runtimeUrl="/api/copilotkit">
        <StudyPlansProvider>
          <StudyPlansList />
        </StudyPlansProvider>
        <CopilotPopup
          instructions="You are Study Buddy, designed to generate study plans for any given topic and provide helpful tips. Support users in a useful and effective manner."
          labels={{
            title: "Study Buddy",
            initial:
              "Hello! What kind of study plan would you like to create today?",
          }}
        />
      </CopilotKit>
    </>
  );
}
