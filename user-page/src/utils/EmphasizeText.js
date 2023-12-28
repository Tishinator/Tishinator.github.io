const EmphasizeText = ({ text, emphasize }) => {
    // Create a regular expression that matches whole words only
    const regex = new RegExp(`\\b(${emphasize.join('|')})\\b`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, index) =>
          emphasize.includes(part) ? <span key={index} className="highlight">{part}</span> : part
        )}
      </>
    );
  };

export default EmphasizeText