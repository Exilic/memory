
export const MemorialCard = ({ card, index, choose }) => {
    const classification = `${card.play ? 'play' : 'no-play'} memory-card`;


    return (
        <div className={classification}>
            <img
                className={card.reveal ? 'chosen' : ''}
                src={`/memory/img/${card.image}.png`}
                alt='food'
                onClick={() => choose(index)}
            />
        </div>
    );
};
