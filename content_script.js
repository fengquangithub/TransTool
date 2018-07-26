var graySound = 'data:image/png;base64,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';
var blueSound = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAUVUlEQVR4Xu2dT1YbuRPHS/7BZHaDc4EJ78Vsh5xg4AQDJxiyjL0IOUHICUIWOMswJwg5QZgThNnivEfmAtiz5M9Yv6c2zhjjP9K3St3q7mKLJKu/qk9LJZWqDemfKqAKzFXAqDaqgCowXwEFRK1DFViggAKi5qEKKCBqA6oApoDOIJhuWqsmCiggNRlofUxMAQUE001r1UQBBaQmA62PiSmggGC6aa2aKKCA1GSg9TExBRQQTDetVRMFFJCaDLQ+JqaAAoLpprVqooACUpOB1sfEFFBAMN20Vk0UUEASGOi1o/NNMuanhqGt4b90Rg0aDNqtPxPoWu27oIAUZAJr7y+eNOztS2tpzxham+6GtTQwZE+GjdU3gxfr3wrqZu1/VgHJ2QQyMIY3r8mYPd+fHlq7P+hsvPMtr+XkFFBA5LRc2tLa0flLQ+Zg1oyxtLK1x5edjedLy2kBUQUUEFE5Zze29vZizTy6/WiItjg/N7T2+aCzccxpQ+uGKaCAhOkVXHrtfW/LDOkjNGtM/ZrzS+z1yvrg1foguCNaAVJAAYFk86vkllQNYw79SnuWsvTmstM68CytxZgKKCBMAedVf3x0/iHEEffthptF+p1W07e8luMpoIDw9HtQW8rfWNStobXPBp2NM+Gua3MzFFBABM3CHfgZog/GmE3BZh80NSR6NWi3ZJduMTtc4rYVEKHBW+t+3THWfpBwxpd2Sf2QpRJJFVBABJSM4owv7Jf947K94X3QKPCItW1CAWEOfSxnfFG3LNGf/XaLdabCfOzaVFdAwKHOnPEfbj7H9jdmdU8BAQcNqKaAAKJlzrihj4bME6A6u4oCwpbQuwEFxFuqUUFpZ9yS/cuQ+SWkGwpIiFq8sgpIgH7yzrj9Y2jMccPS54BukAISohavrALiqZ+4M27Nu8vO030Xq1V1QNa6vV8zma39p2wHnArIEkBiOOOTUblVBcTp1vjh5u10uI0l+81aOizL/RYFZAEg0s64JfrHWrs1+RatIiA+ulmiU3u1spt6ZLICMgeQGM64Nas709dnqwbIKBbt5ovPDp+DpN9ubXuucgsppoDMkF3aGXdOtb1a2Zn1tqwaII+Pegdk6LW3NSd+U1IBmRpJcWecFoeFVA2QZvf8wmf2mJQ95eBLBeRupGI74/PeqFUD5HG3Z71nj4mCQzK7g/bTE6RuzDoKiDv8Ez4Zz5xxQzuDF63TZYOngIwUyq4Tk91ObRu49oBEccYt7fkOdNUAaXZ7A0P007IXw6z/Z1vAV6vPUtrZqjUgj9/3XpMlsfvdLmzEXq1uhQxw1QB53D0/JjK/I4CMZhJ71u9sPEPrS9erJSDzDrF44mJ3NKoGiFuuNoz5wtLyLsqA1YZQ5doBEsUZZ1yBrRogzi6Dt3pnGHMqOcBqBcjozrj5LHUtNnPGyexxdl+qCEgGCXuplYbTXhtA1o7O9wyZt2JwWPrbkt3xdcbrss07+ZzNbu/UEI0CFYE/54/Y69XtEJ8O+JmFVWoBSArOeB0BuQs7OQ2973JPq4JP2isNSErOeB0Bcc88OmMybiaBtn5dG0X6I5UFJIYzThHS7VTVB5l8ISDPOFk/O0RsrDwr4jsplQQkijM++kaHeGZ1xHjKeKPQ+YANYz6gPkJR5yOVA0TcGZ9xhwMd5Fn16gKIxM5WjBl82VhWCpCUnfG6+iDTz93snp9xnPa88xJXApBYzvjwanU/9hZjnWaQzGl/f/HE2Nsz1GnPe6lVGCDOqOnRbVC6m3lvYWPtoWgCtxxDHeoGSAZJ9+tOg+zHZcubuf+PsFky17bgTgZUHMHw728NO9yyhrZCL9QE/BS7aN5biikBMv4cdR7ZRx4ffT0kY1+iAzY0K+t57GpFnUGyz49ZemmIdlAh8qo3K6FCHr9dNCDZ8vTH25d2SPuTUQZ5ZB/h+CN53WePAsjdOvMD96OVeRio+40sTH1GQoU8fr9IQHy2wy3RSb/d2o2hBdcfyeMWojgg0gkPYgzM1CHUJ3u9shfbGU9tFysk+whFDPdY6/b2G0RvkXHO44KVKCDyCQ8Q2QLq5OiMpwZIaEh6TN+MFdQY2WEXASSP7/IFmL1X0ZgD7tWBu0JFLbFCs4/EvDPOWWrF/jS2CCBlmjlCEiqEGDpatihAkOwjMcPPOUstWpJaCR0bV48NSOhUzekst27mjAckVOD+nk/9IgBhXYuN6I9wllqxtn1ZgCCD62M0Mcosym4Y4/d820Q0lAhWRGaQ8TPFWp6ywI00i7AAaR6dfxE9wfa1quByWEKF4J8BKhQFSPOod2IM/QZ0OWoOK84BYoxZBAaEG76MDAxSJ9bbDunLrDpFAYL87v3t8TjXYe82fL5hsVryL0IYkNBdECmD8m0nNWc8tW1e1x/O2zp7nkjb5JyXr/QsAgHCDja7sxa3lvY1eO9yoxSWJ3S9elLU4Z93X7Po1mK/MMUJ93DPGes0u3nU+2YM/RyiZQxoIUA4KV0yZ5nMISdVTrBoCVcoGhDOGUQ2ibgX0vXKuvTLCJ1FXH/6nVZTasghQPDllfwaUUqIotopGhD33NwVQazAQXQWkfQ7gwFxb5yGvb0INShr6VO/00o+qjf0ubjlUwBEwh+RNMqxpvgsIpffFwAkfM2crVVzit/nGmze9VMBxD03xx+JtdRizCLPuEn9nCbBgCAn5zp7zMcuJUC4/kiMkA90FpHaYcsFkCKyUeQ9E6C/lxIgEv7I0NC2z4eDfPVCz0VcKHy/vbHu+zvzyikgXAWZ9VMDJPNHGImnYzjs6HmNxBa0AsI0cG71FAEZZaW8PYPOITJ/U3gWATeGJJZ8CgjXwpn1UwQkW2oxPoQjtbyZlBaJ9JU4E1FAmAbOrZ4qIKOt38Bvnk+IIb3tizrr3ERzCgjXwpn1UwaEs9SSTvCWZV95dNsPlpt5JVcBCVZctkLKgGRLLSBWbKwQ9+09rTQSos8FVQGRtffg1hADlLgwFdJRZP0/al82tAheZl2tNNFYMQUkxFIilC0DIIzwItFARrQfnO1eBSSC0Yc0WQZAOGcj0s46FA7D8EMUkBBrjlC2LICgb2/pMCPk0JCzJFVAIhh9SJNlAcQ9E+KLSJxFTOqJhuZftlvBtu5+N7gStDfOmOJCjK2MZcsECOwkC56so9u96I6aAlIwVWUC5G4WGQQnVBB+QSIh8KijroAoIEEKIIGMHB9gVueQPqAR5QpIkHnIFy7bDIIus1AfYCYgUAgMdiajgMjbfFCLpQMEjKyVvFGap2YKSJA5yxfOc7Cleo+cRUiGwKORxsgspoBIWQ3YTikBQdKWCjvqSG5hBQQ00iKrlREQbKvfvLvsPN2X0rrZ7QXvpg2BmCydQaRGDGynjIAgh3XSO1nIoSWyzFNAQMOWqlZKQIAQeAVkkcUIrz+ljDOFdsoIiNMt1Afg3suYHivkLERnkBQsPrAPdQHEyYI4yfPkxPwgenPZaR2EDJEusULUilBWAcFEVUAw3UpXSwHBhkwBwXQrXS0FBBsyBQTTrXS1FBBsyBQQTLfS1VJAsCFTQDDdSldLAcGGTAHBdCtdrboA4j6q2m+31qQGCAFkSPRq0G4dhvRBt3lD1IpQtoyAIAkcpE/S9aAwgjGm2GQ5AQn/ypg0IBqLlaI1R+hTKQHp9vYbRG9D5JBO/6OAhKhf4rJlBARZ3qB3wucNbWgsmGtHw91LCEoZAYHe3mR2B+2nJ1JDhACCxIKpky41YmA7ZQQEMU40L9UsWZErt+gumgICGrZUtbIBglyWclohb+95GiN9QDcJFBApSwfbKRsgWG5c+1e/vbEJSvSgGnIGgn6KQQGRGjWwnbIB0uyeXxgyT8IeF8tJNe83kA/poJsECkjYSIuXLhMgSF+z3SNhBx2BFLlN6PqugIibfFiDiNGh6+mwnj0sDW3vSvsf4LcK0U0CBYRrNcz6ZQEEzaoufUAIOuhwHJgCwjRwbvWyAII5xm55FR4guEhTbJOA/uy3W1vIWCkgiGqCdcoAyN3noC+MoeBoXMmcvE725tH5F2NM2I4YI6uOAiJo7EhTZQAEnT3El1dw4mzaHrxonSLjo4AgqgnWSR0Q1uwhvHu1BgRJZrtoQMrR8RArIILGjjSVOiDImt/pYC393e+0As9LFiuInH9Y4h1SKiCIVQvWSRkQJOZpLI20c47uoqEHhDqDCBo5p6mUAYEcYjd7EP1jr1aeDF6tDzjaTNaFl1fWPht0Ns7QfugMgionVC9VQFDHPJOFsWs0T1YEVollngIiZOhoMykCwllaRZk9wN0rNEBxciwVENSyheqlCAjyto7le7h20RAXNLxEAREybolmUgOEs7SSWNJMa4puM0v1JXgGQZylooLrJAw4dhspAYL0ZVIf6ahd1zb62WmyMp98CwcE+LqQe1DpkIPYhptX+4hRxnjhoG/qsU7Sp+bjdpHQdkl7AwC5eNKwtxehBmSJTvvt1nZovaqXTwWQZrf30RDtIHpnjrlZ2Ry8WP+G1J9XB509JF8gwYC4h2ke9b4ZQz8Hi2Ht8fB69ZXk/nhwHxKrkAIgyLL5/tJKNmKXPXtY+3zQ2TiWGGoIEHRXwXXYkv1mqXFAV//7pKAQFQ0IZ0t3NJ54KPkiA4ZnD+EQFwgQrqiTwrillwTp99q09oSuV/8oA4BFApL5HY9uvoTfMR+pHWtpla1SoLvv8oeUECCsZZY0DXPas5YGluwrqak2VreLBOTx0fkHMmYPfbah4FJmsg/oVnOMQ0oYEHQKRAeDUe/wst16xagftWpRgCC/e3+Wpk/9Tgty6hcurdys9sMtdDlLamt3sn8wIKNpsHdqiH6NakESjSe8OYAYqsS6HwkdHw+FO4Sz1yubMZawHP82xlECCxBJX0SCg0VtuA/Z2+vV7RiDyul7UYAg6UPHz4mm0FmmE6LFf23K5t4at8sCxDXC3SJcJprk/+/8km1O+LNkfzL9gINX7gzCerFFiNQda8qKATMr69LnMK5fbEBcI5xpUdrglrWXmvNeBCCjMevZZVpN/58L5kLfA7xOm7UZEVoRQMoGSSaqoYPLF603oUYiXb4oQEIPe2Nu6bpPupnh7Rcka0qMnavJMRYDJIPk6OshGftS2oiitWft8WVn43m09j0aLgqQ0K3UGIGI35dW3d5nQwTlrYo5e4gtsSbtwGW+M2SPDdFPHvZReJGinfeiALk7JDw1ZH5ZOghCkbGzfofjw0qFtC96ftEZZPxDowv2N4dE5vel4idQIAt/sbRbhPNeFCBOduesG0PHiyGJszs0/v2GMV9QE4i1mxZtiTX9oKPPBd8cWDI7qc8omfNuzHPJz4T5DHyRgGRG6l5mP9zuW0P7k2Pk0uW4mLlYeozC628+B2dJvBM1Vnj99JhFmUFmT6VfdxqWtqyxLm3kZqrADK3dH3Q23vkYt0SZogF58FI7Ot/MYyblhLnE3DAoDBAJY5oJXhZwd3sieqKfo/OeGiCxxumen3p0vtcw5gP6W9I5t3L3QdAH59STPotxUcb2amU39sl73QDJ/B4yn5EtXWcfMc9iZtlfbkssjvH71pUOoMx2uIjc5Rs48diyvtcJEK7f4bSMEW9Vixnk+w7a+96WseSWXCLbzJnz3qBdNDu4AvKfApxrvRkcwt8aWTY27v+VmkG+Q+K1fekjz39lYt19qMsMEnowOT06eS+txr9fSUDcw40OwtJ33usACPLZtElA8ty1qtwu1rJ5IHXnveqAcJ3y0dLK7MY6j1lmP5WdQSS3FR9M9855b6zuSoRXVxkQ7p33TPeIYS7L4KisDzLrwZ0hijvvZNl3S6oKiMSOFffjNz4ALCtTixkkZee9qoBwTsqziSNSMrplQNTOB5l+4CjOOxGcGKKKgEhceyjS75i0mVrNIJMPHsF5P7FXK89DT96rBgjyPA/e6hFvCOoMEqBAlJP3wMQQiEEVdSbgIy0nW0q2tLJx0gn59H1WmdrOIPf9EuPSF8mdvAc471UDBLnrPh6LLMT+anUrdBZGjd+nXu0BcSJld6LtzYnX7ToPVUMSQyggI0FTccpr76TPs++772McG0O/eTDgV8QjMYQCMpIyj9uBfoN2v5TOIFOqSezA3GtySVbHqgESmi0lgyNSjl8ECJ1BPFTL03mvGiDBSRgKPilfZg46g8xRaJTQQNB5n5MYomqAODmb3fMzP38uXkKIZYbv+38FZIFSUZz3qcQQVQTEL6VQ+nA401BAlrxKYjjvk4khqghItjM4zpZCtDf5ub5sK9fSYerfbRmbhQLiOdfGcN5dVseqAjIpq4OFfrzdjHUr03MIoWIKSIBs0s47uR0u0/jUIPsxoBu5Jy4I6VvVyioggSMq7rxbGoRm+Eg51CRQzuSLKyDAEEk776FdUEBCFcPLKyCgdjGcd9+uKCC+SvHLKSBMDcWdd4/+KCAeIgkVUUAEhBR33pf2qRxnCEsfowQFFBChQZJ23hd2K6ELRULyJduMAiI4NH4nyPwfLCLDIL/X5WxBAREetzw+HjS09lnMfMHCkpS6OQUk0vBxU23O65a7WNRvt9YidVubnVJAAYloEs55N8YcSl3nzbqq/kfEEXvYtAISWW6/7wD6dSL2J4/9elGvUgpIDuMt5ZekfPMuBxkL+QkFJEfZeZ/I1rOPHIfq+08pIDmrPr4nQYZe+/60buv6KiVfTgGR19SrxewT2cPbPTt1oWhc2fkbhuzJ0KweSGSR9+qUFnqggAKSgFE4WIhun5ClTSLzjYwdlPFyUQJSindBARGXVBuskgIKSJVGU59FXAEFRFxSbbBKCiggVRpNfRZxBRQQcUm1wSopoIBUaTT1WcQVUEDEJdUGq6SAAlKl0dRnEVdAARGXVBuskgIKSJVGU59FXAEFRFxSbbBKCiggVRpNfRZxBRQQcUm1wSopoIBUaTT1WcQVUEDEJdUGq6SAAlKl0dRnEVfg/yNRIqrhsw4yAAAAAElFTkSuQmCC';
window.addEventListener('load',function() {
    document.addEventListener('mouseup', getText)

    var tarnsData = {};

    var oDiv = document.createElement('div');
    document.body.appendChild(oDiv)
    oDiv.id = 'cmy_translate_button';
    oDiv.innerText="译";
    oDiv.style.width = '34px';
    oDiv.style.height = '34px';
    oDiv.style.background = '#1296db';
    oDiv.style.position = 'absolute';
    oDiv.style.color = '#fff';
    oDiv.style.textAlign = 'center';
    oDiv.style.lineHeight = '34px';
    oDiv.style.fontFamily = '微软雅黑,苹方';
    oDiv.style.fontSize = '14px';
    oDiv.style.borderRadius = '2px';
    oDiv.style.cursor = 'pointer';
    oDiv.style.zIndex = '999999999999999';
    oDiv.style.webkitTransition = 'transform .2s ease-in-out';
    oDiv.style.webkitTransform = 'scale(0)';
    
    var oModal = document.createElement('div');
    document.body.appendChild(oModal)
    oModal.id = 'cmy_translate_modal';
    oModal.style.padding = '10px';
    oModal.style.width = '260px';
    oModal.style.minHeight = '200px';
    oModal.style.background = '#fff';
    oModal.style.borderRadius = '2px';
    oModal.style.fontFamily = '微软雅黑,苹方';
    oModal.style.position = 'absolute';
    oModal.style.zIndex = '999999999999999';
    oModal.style.webkitTransition = 'transform .2s ease-in-out';
    oModal.style.webkitTransform = 'scale(0)';
    oModal.style.webkitTransformOrigin='left top';
    oModal.style.boxShadow = '0px 0px 10px -2px';

    var audio1 = document.createElement('audio');
    var audio2 = document.createElement('audio');
    var audio3 = document.createElement('audio');
    oModal.appendChild(audio1)
    oModal.appendChild(audio2)
    oModal.appendChild(audio3)

    var h3 = document.createElement('h3');
    var h5 = document.createElement('h5');
    var h5_2 = document.createElement('h5');
    h3.id = 'trans';
    h5.id = 'word';
    h5_2.id = 'sound';
    h3.style.fontSize = '16px';
    h5.style.fontSize = '14px';
    h5_2.style.fontWeight = h5.style.fontWeight = 'normal';
    h3.style.fontWeight = 'bold';
    h5_2.style.fontSize = '12px';
    h3.style.color="#333";
    h3.style.lineHeight = '24px';
    oModal.appendChild(h3);
    oModal.appendChild(h5_2);
    oModal.appendChild(h5);

    function getText(ev) {
        var txt = window.getSelection().getRangeAt(0).toString();
        txt = txt.trim()
        if (!!txt) {
            // 发送给后台请求数据，在回调中获取到数据显示到页面中
            chrome.runtime.sendMessage({word:txt},function() {});
            chrome.runtime.onMessage.addListener(function (response) {
                
                if(!response.error){
                    oDiv.style.left = oModal.style.left = ev.clientX + window.scrollX + 'px';
                    oDiv.style.top = oModal.style.top = ev.clientY + window.scrollY + 10 + 'px';
                    oDiv.style.webkitTransform = 'scale(1)';
                    tarnsData = response;
                }
            });
        }

        if (ev.target.id !== 'cmy_translate_button') {
            document.querySelector('#cmy_translate_button').style.webkitTransform = 'scale(0)';
        }
        if (    ev.target.id !== 'cmy_translate_modal' 
                && ev.target.id !== 'audio1' 
                && ev.target.id !== 'audio2' 
                && ev.target.id !== 'audio3' 
                && ev.target.id !== 'word' 
                && ev.target.id !== 'trans'
                && ev.target.id !== 'sound'
            ) {

                document.querySelector('#cmy_translate_modal').style.webkitTransform = 'scale(0)';
        }
        if (ev.target.id === 'audio1') {
            ev.target.src = blueSound;
            audio1.play()
            audio1.onended = function () {
                ev.target.src = graySound;
            }
        }
        if (ev.target.id === 'audio2') {
            ev.target.src = blueSound;
            audio2.play()
            audio2.onended = function () {
                ev.target.src = graySound;
            }
        }
        if (ev.target.id === 'audio3') {
            ev.target.src = blueSound;
            audio3.play()
            audio3.onended = function () {
                ev.target.src = graySound;
            }
        }
        ev.stopPropagation();
    }

    oDiv.onclick = function () {
        h3.innerText = '';
        h5.innerText = '';
        h5_2.innerHTML = '';
        if (tarnsData && tarnsData.baesInfo && tarnsData.baesInfo.symbols) {
            var html = '';
            if (tarnsData.baesInfo.symbols[0].ph_am_mp3) {
                audio1.src = tarnsData.baesInfo.symbols[0].ph_am_mp3;
                html += `<span>英[ ${tarnsData.baesInfo.symbols[0].ph_am} ]</span>
                         <img src="${graySound}" alt="" id="audio1" style="width: 25px;vertical-align: middle;margin-right:20px;cursor:pointer;"/>`
            }

            if (tarnsData.baesInfo.symbols[0].ph_en_mp3) {
                audio2.src = tarnsData.baesInfo.symbols[0].ph_en_mp3;
                html += `<span>美[ ${tarnsData.baesInfo.symbols[0].ph_en} ]</span>
                         <img src="${graySound}" alt="" id="audio2" style="width: 25px;vertical-align: middle;margin-right:20px;cursor:pointer;"/>`
            }

            if (tarnsData.baesInfo.symbols[0].ph_tts_mp3) {
                audio3.src = tarnsData.baesInfo.symbols[0].ph_tts_mp3;
                html += `<span>其他[ ${tarnsData.baesInfo.symbols[0].ph_en} ]</span>
                         <img src="${graySound}" alt="" id="audio3" style="width: 25px;vertical-align: middle;cursor:pointer;"/>`
            }

            h3.innerText = tarnsData.baesInfo.symbols[0].parts[0].means.join(';\n');
            h5.innerText = tarnsData.baesInfo.symbols[0].parts[0].part + ' ' + tarnsData.baesInfo.word_name;
            h5_2.innerHTML = html;
            
        }else{
            h3.innerText = tarnsData.baesInfo.translate_result;
            h5.innerText = tarnsData.baesInfo.word_name;
        }

        this.style.webkitTransform = 'scale(0)';
        oModal.style.webkitTransform = 'scale(1)';

    }

})