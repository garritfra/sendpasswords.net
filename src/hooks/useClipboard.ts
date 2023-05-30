const useClipboard = () => {
  const copy = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  return {
    copy,
  };
};

export default useClipboard;
