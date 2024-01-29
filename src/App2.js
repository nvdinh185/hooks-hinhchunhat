import { useState } from 'react';

const App = () => {
    const [chuVi, setChuVi] = useState('');
    const [dienTich, setDienTich] = useState('');
    const [errorCD, setErrorCD] = useState('');
    const [errorCR, setErrorCR] = useState('');
    const [chieuDai, setChieuDai] = useState('');
    const [chieuRong, setChieuRong] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (chieuDai && chieuRong) {
            setChuVi((Number(chieuDai) + Number(chieuRong)) * 2);
            setDienTich(chieuDai * chieuRong);
            setChieuDai('');
            setChieuRong('');
        } else {
            if (!chieuDai) {
                setErrorCD('Vui lòng nhập chiều dài');
            }
            if (!chieuRong) {
                setErrorCR('Vui lòng nhập chiều rộng');
            }
            setChuVi('')
            setDienTich('')
        }
    }

    const handleBlur = (e) => {
        if (e.target.name === 'chieudai') {
            if (!e.target.value) {
                setErrorCD('Vui lòng nhập chiều dài');
            }
        } else if (e.target.name === 'chieurong') {
            if (!e.target.value) {
                setErrorCR('Vui lòng nhập chiều rộng');
            }
        }
    }

    const handleInput = (e) => {
        if (e.target.name === 'chieudai') {
            setErrorCD('')
        } else if (e.target.name === 'chieurong') {
            setErrorCR('');
        }
    }

    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Chiều dài</label>
                    <input type="text" value={chieuDai} name="chieudai"
                        onBlur={e => handleBlur(e)}
                        onInput={e => handleInput(e)}
                        className={errorCD && 'invalid'}
                        onChange={e => { setChieuDai(e.target.value) }}
                    />
                    <span style={{
                        color: 'red',
                        fontStyle: 'italic'
                    }}>{errorCD}</span>
                </div>
                <br />
                <div>
                    <label>Chiều rộng</label>
                    <input type="text" value={chieuRong} name="chieurong"
                        onBlur={e => handleBlur(e)}
                        onInput={e => handleInput(e)}
                        className={errorCR && 'invalid'}
                        onChange={e => { setChieuRong(e.target.value) }}
                    />
                    <span style={{
                        color: 'red',
                        fontStyle: 'italic'
                    }}>{errorCR}</span>
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