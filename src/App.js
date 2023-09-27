import { useState } from 'react';

const App = () => {
    const [chuVi, setChuVi] = useState('');
    const [dienTich, setDienTich] = useState('');
    const [errorCD, setErrorCD] = useState('');
    const [errorCR, setErrorCR] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formValue = {};
        for (const el of e.target) {
            if (el.name) {
                formValue[el.name] = el.value;
            }
        }
        // console.log(formValue);
        var chieuDai = Number(formValue['chieudai']);
        var chieuRong = Number(formValue['chieurong']);
        if (chieuDai && chieuRong) {
            setChuVi((chieuDai + chieuRong) * 2);
            setDienTich(chieuDai * chieuRong);
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
        if (e.target.name == 'chieudai') {
            if (!e.target.value) {
                setErrorCD('Vui lòng nhập chiều dài');
            }
        } else if (e.target.name == 'chieurong') {
            if (!e.target.value) {
                setErrorCR('Vui lòng nhập chiều rộng');
            }
        }
    }

    const handleInput = (e) => {
        if (e.target.name == 'chieudai') {
            setErrorCD('')
        } else if (e.target.name == 'chieurong') {
            setErrorCR('');
        }
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Chiều dài</label>
                    <input onBlur={(e) => handleBlur(e)} onInput={(e) => handleInput(e)} type="text" name="chieudai" />
                    <span style={{
                        color: 'red',
                        fontStyle: 'italic'
                    }}>{errorCD}</span>
                </div>
                <br />
                <div>
                    <label>Chiều rộng</label>
                    <input onBlur={(e) => handleBlur(e)} onInput={(e) => handleInput(e)} type="text" name="chieurong" />
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