import { FileSelectionProvider } from "@/app/components/FileSelectionContext";
import "/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <FileSelectionProvider>
      <Component {...pageProps} />
    </FileSelectionProvider>
  );
}

export default MyApp;
