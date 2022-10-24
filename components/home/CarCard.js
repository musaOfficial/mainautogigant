
export default function CarCard({
    title,price,speed,gear,releaseDate,thumbSrc
}){
    return (
        <div className="w-224 inline-block text-center shadow-sm p-3 bg-white">
            <img src={thumbSrc} />
            <p className="py-2 text-15 text-black font-bold">{title}</p>
            <p className="text-xl font-bold py-2 text-black border-t-2 border-b-2 border-gray-500">€ {price},-</p>
            <div className="flex justify-between mt-4 text-10 px-2">
                <div className="">
                    <img className="w-8 mx-auto mb-1 opacity-60" src="/images/icons/speed.svg" />
                    <p className="text-black font-bold">{speed}</p>
                </div>
                <div className="">
                    <img className="w-8 mx-auto mb-1 opacity-60" src="/images/icons/gear.svg" />
                    <p className="text-black font-bold">{gear}</p>
                </div>
                <div className="">
                    <img className="w-8 mx-auto mb-1 opacity-60" src="/images/icons/releaseDate-2.svg" />
                    <p className="text-black font-bold">{releaseDate}</p>
                </div>
            </div>
        </div>
    );
}