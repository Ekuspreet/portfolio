"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "secret" });
      cal("ui", {
        cssVarsPerTheme: {
          dark: { "cal-brand": "#bf73ae" },
          light: { "cal-brand": "#bf73ae" },
        },
        hideEventTypeDetails: false,
        layout: window.innerWidth < 640 ? "week_view" : "month_view", // mobile-friendly
      });
    })();
  }, []);

  return (
    <div className="w-full h-96 md:h-full overflow-x-scroll">
      <Cal
        namespace="secret"
        calLink="ekuspreet-singh-wn3wxe/secret"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "600px", // ensures it's tall enough on mobile
        }}
        config={{
          layout: "week_view",
          theme: "auto",
        }}
      />
    </div>
  );
}
