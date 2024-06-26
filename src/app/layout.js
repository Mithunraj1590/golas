

import "../styles/main.scss";
import { Inter } from "next/font/google";
import GlobalProviders from "../components/GlobalProviders";
import CommonLayout from "../layout/CommonLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GC Tech",
  description: "Goal Creatives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <GlobalProviders>
          <CommonLayout>{children}</CommonLayout>
        </GlobalProviders>
      </body>
    </html>
  );
}
