const domain = "http://localhost:3001/";
// const domain = "https://learnly-backend.onrender.com/";

export const REGISTER_USER = `${domain}api/registerUser`;
export const LOGIN_USER = `${domain}api/loginUser`;
export const GET_ALL_USERS = `${domain}api/registerUser/getAllUsernames`;
export const SAVE_QUERY = `${domain}api/saveQuery`;
export const GET_QUERY = `${domain}api/getQueries`;
export const SEND_RESPONSE = `${domain}api/sendResponse`;
export const DELETE_QUERY = `${domain}api/deleteQuery`;
export const SAVE_DEFAULT_SCHEDULE = `${domain}api/saveDefaultSchedule`;
export const GET_DEFAULT_SCHEDULE = `${domain}api/getDefaultSchedule`;
export const SAVE_ALTERNATE_SCHEDULE = `${domain}api/saveAlternateSchedule`;
export const GET_ALTERNATE_SCHEDULE = `${domain}api/getAlternateSchedule`;
export const BLOCK_DATES = `${domain}api/blockDates`;
export const GET_UNAVAILABLE_DATES = `${domain}api/getUnavailableDates`;
export const SAVE_CALENDAR_SETTINGS = `${domain}api/saveCalendarSettings`;
export const GET_CALENDAR_SETTINGS = `${domain}api/getCalendarSettings`;
export const SAVE_STUDENT_BOOKING = `${domain}api/saveBooking`;
export const MAKE_PAYMENT = `${domain}payment`;
export const CREATE_ISSUE = `${domain}api/createIssue`;
export const GET_ALL_ISSUES = `${domain}api/getAllIssues`;
export const GET_ISSUE = `${domain}api/getIssue`;
export const UPDATE_ISSUE = `${domain}api/updateIssue`;
export const DELETE_ISSUE = `${domain}api/deleteIssue`;