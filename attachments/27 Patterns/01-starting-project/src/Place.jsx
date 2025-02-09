/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export default function Place({ item }) {
    return (
      <article className="place">
        <img src={item.image} alt={item.title} />
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </article>
    );
  }