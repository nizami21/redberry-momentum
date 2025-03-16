import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 select-none w-full h-[100px] py-7 px-32 flex justify-between items-center bg-white z-50">
            <div className="flex gap-1">
                <h1 onClick={() => navigate('/')} className="font-fredokaOne text-3xl text-purple cursor-pointer">Momentum</h1>
                <img src="/src/assets/img/Hourglass.svg" alt="Hourglass" />
            </div>
            <div className="flex gap-10 items-center">
                <Button text="თანამშრომლის შექმნა" solid={false} />
                <Button text="შექმენი ახალი დავალება" plus={true} />
            </div>
        </header>
    );
}

export default Header;