import AdCard from "./AdCard";

export default function Advertisements(){
    return (
        <div className="p-4 rounded-md bg-theme-gray-4 mt-6">
            <div className="flex justify-between text-xl md:text-base font-bold text-theme-black-2">
                <h4>Die begehrtesten Inserate</h4>
                <h4>Letzten 7 Tage</h4>
            </div>
            <div>
                <AdCard />
                <AdCard />
                <AdCard />
                {/* <DashboardCard
                    title='Lamborghini Huracán'
                    price='45.520'
                    adNo='#123456789'
                    start='01/01/2020'
                    end='01/01/2020'
                    imgSrc='/images/db-card-img-1.png'
                />
                <DashboardCard
                    title='Lamborghini Huracán'
                    price='45.520'
                    adNo='#123456789'
                    start='01/01/2020'
                    end='01/01/2020'
                    imgSrc='/images/db-card-img-2.png'
                />
                <DashboardCard
                    title='Lamborghini Huracán'
                    price='45.520'
                    adNo='#123456789'
                    start='01/01/2020'
                    end='01/01/2020'
                    imgSrc='/images/db-card-img-3.png'
                /> */}
            </div>
        </div>
    );
}