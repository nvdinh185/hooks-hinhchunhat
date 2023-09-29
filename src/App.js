import { useState } from 'react';

const App = () => {
    const [chuVi, setChuVi] = useState('');
    const [dienTich, setDienTich] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Chiều dài</label>
                    <input type="text" name="chieudai" />
                </div>
                <br />
                <div>
                    <label>Chiều rộng</label>
                    <input type="text" name="chieurong" />
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