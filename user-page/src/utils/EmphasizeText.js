const EmphasizeText = ({ text, emphasize }) => {
    // Create a regular expression that matches whole words only
    const regex = new RegExp(`\\b(${emphasize.join('|')})\\b`, 'gi');
    const parts = text.split(regex);

    const highlightStyle = {
        fontWeight: 'bold',
        color: `rgb(255, 0, 128)`
    }

    return (
      <>
        {parts.map((part, index) =>
          emphasize.includes(part) ? <span key={index} style={highlightStyle}>{part}</span> : part
        )}
      </>
    );
  };

export default EmphasizeText