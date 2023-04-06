{
  "user_id": "3458764520331360400",
  "scope": "boards:write boards:read team:write team:read",
  "expires_in": 3599,
  "access_token": "eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_LYifkofBxr6K2yc2HYiTLTI25vc",
  "refresh_token": "eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_Af7EPR6R7mcupFm4KEZVo64kX8I",
  "team_id": "3458764520331690065",
  "token_type": "bearer"
}


const axios = require('axios');

// APIキーとボードIDを設定
const apiKey = 'eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_LYifkofBxr6K2yc2HYiTLTI25vc';
const boardId = 'uXjVP53Yovc=';

async function getMiroTextObjects() {
  try {
    // Miro APIを呼び出して、ボード内のオブジェクトを取得
    const response = await axios.get(https://api.miro.com/v1/boards/${boardId}/widgets, {
      headers: {
        'Authorization': Bearer ${apiKey},
        'Content-Type': 'application/json',
      },
    });

    // 取得したオブジェクトからテキストボックスだけを抽出
    const textObjects = response.data.filter(widget => widget.type === 'text');

    // テキストボックスの内容を表示
    textObjects.forEach((textObject, index) => {
      console.log(Text object ${index + 1}:);
      console.log(textObject.text);
      console.log('-----------------------------');
    });

    return textObjects;
  } catch (error) {
    console.error(Error fetching Miro board data: ${error});
    return null;
  }
}

getMiroTextObjects();