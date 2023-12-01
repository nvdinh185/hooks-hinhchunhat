import { useState } from 'react';

const App = () => {
    const [chuVi, setChuVi] = useState('');
    const [dienTich, setDienTich] = useState('');
    const [chieuDai, setChieuDai] = useState('');
    const [chieuRong, setChieuRong] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (chieuDai && chieuRong) {
            setChuVi((Number(chieuDai) + Number(chieuRong)) * 2);
            setDienTich(chieuDai * chieuRong);
            setChieuDai('');
            setChieuRong('');
        }
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Chiều dài</label>
                    <input
                        type="text"
                        value={chieuDai}
                        onChange={e => { setChieuDai(e.target.value) }}
                    />
                </div>
                <br />
                <div>
                    <label>Chiều rộng</label>
                    <input
                        type="text"
                        value={chieuRong}
                        onChange={e => { setChieuRong(e.target.value) }}
                    />
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