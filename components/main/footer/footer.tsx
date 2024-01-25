export const Footer = () => {
  const footerCopyright = getFooterCopyright();
  return <footer className="max-w-5xl mx-auto px-5">{footerCopyright}</footer>;
};

const getFooterCopyright = () => {
  const yearEstablished = 2024;
  const currentYear = new Date().getFullYear();

  return `©
    ${
      yearEstablished !== currentYear
        ? `${yearEstablished} - ${currentYear}`
        : currentYear
    } Stian Larsen Portfolio`;
};
