import fines from './fines';

const messages = {
  en: {
    SOMETHING_WENT_WRONG: 'Something went wrong',
    HAVE_YOU_GOT_ACCOUNT: 'Have you got an account?',
    YOU_DONT_HAVE_ACCOUT: "You don't have account?",
    SIGN_UP: 'Sign up',
    SIGN_IN: 'Sign in',
    LOGOUT: 'Log out',
    ENTER_LOGIN: 'Enter login',
    ENTER_PASSWORD: 'Enter password',
    REPEAT_PASSWORD: 'Repeat your password',
    DASHBOARD: 'Dashboard',
    FINES: 'Fines',
    OWNERS: 'Owners',
    fines: fines.en,
  },
  ru: {
    SOMETHING_WENT_WRONG: 'Что-то пошло не так',
    HAVE_YOU_GOT_ACCOUNT: 'У вас уже есть аккаунт?',
    YOU_DONT_HAVE_ACCOUT: 'У вас нет аккаунта?',
    SIGN_UP: 'Зарегистрироваться',
    SIGN_IN: 'Войти',
    LOGOUT: 'Выйти',
    ENTER_LOGIN: 'Введите логин',
    ENTER_PASSWORD: 'Введите пароль',
    REPEAT_PASSWORD: 'Повторите пароль',
    DASHBOARD: 'Панель',
    FINES: 'Штрафы',
    OWNERS: 'Владельцы',
    fines: fines.ru,
  }
};

export default messages;