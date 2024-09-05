const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: item,
    currency: '£'
};

function ShopItemFunc () {
    return (
        <div>
            <h3>{item.brand}</h3>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.descriptionFull}</p>
            <div>
                <div>{item.currency}</div>
                <div>{item.price}</div>
            </div>
        </div>
    );
};





