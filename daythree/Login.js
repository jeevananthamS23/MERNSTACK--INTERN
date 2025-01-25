import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();

    function gotoDashboard() {
        navigate('/Dashboard');
    }

    return (
        <>
            <h1>LOGIN PAGE</h1>
            <button onClick={gotoDashboard}>Go to Dashboard</button>
        </>
    );
}
