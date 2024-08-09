const BASE_URL = 'https://demo3961745.mockable.io';

export const checkPhoneNumber = async phone => {
  try {
    const response = await fetch(`${BASE_URL}/checkPhone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({phone}),
    });

    if (!response.ok) {
      throw new Error('Ошибка проверки номера телефона');
    }

    return response.json();
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
};

// export const checkConfirmationCode = async code => {
//   try {
//     const response = await fetch(`${BASE_URL}/checkCode`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({code}),
//     });
//
//     if (!response.ok) {
//       throw new Error('Ошибка проверки кода подтверждения');
//     }
//
//     return response.json();
//   } catch (error) {
//     console.error('Ошибка:', error);
//     throw error;
//   }
// };

export const checkConfirmationCode = async (code) => {
  if (code === '123456') {
    return { valid: true };
  } else {
    return { valid: false };
  }
};
