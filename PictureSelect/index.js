import React from 'react';

const activeImg = (value, arr) => {
    let newArr = arr.slice();
    if(newArr.indexOf(value) === -1){
        newArr.push(value)
    }else{
        newArr.splice(newArr.indexOf(value),1)
    }
    return newArr
}

const activeAll = (pictures, arr) => {
    let allArr = [];
    pictures.map(item => {
        allArr.push(item.id)
    })
    return arr.length === 3 ? [] : allArr
}

const PictureSelect = ({pictures, value, onChange }) => (
    <div>
        <div>
            <input type='checkbox' onClick={()=>{onChange(activeAll(pictures, value))}} />
            <span>已选中{value.length}个文件</span>
        </div>
        {
            pictures.map((item, index) => (
                <div style={{position: 'relative',display:'inline'}} key={item.id}>
                    { item.id === value[index] && <span style={{position:'absolute',width:'20px',height: '20px',background: 'blue'}}></span>}
                    <img src={item.url} alt={item.name} onClick={()=> {onChange(activeImg(item.id,value))}} />
                </div>
            ))
        }
    </div>
)
export default PictureSelect;