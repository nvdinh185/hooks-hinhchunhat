import { useState } from 'react';

const App = () => {
    const [chuVi, setChuVi] = useState('');
    const [dienTich, setDienTich] = useState('');
    const [chieuDai, setChieuDai] = useState('');
    const [chieuRong, setChieuRong] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Chiều dài</label>
                    <input />
                </div>
                <br />
                <div>
                    <label>Chiều rộng</label>
                    <input />
                </div>
                <input type="submit" value="Tinh" />
            </form>
            {chuVi && dienTich && <div>
                <p>Chu vi: {chuVi}</p>
                <p>Diện tích: {dienTich}</p>
            </div>}
        </>
    )
}

export default App;