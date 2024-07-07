import axios from "axios";
import { privateAxios } from "./axios.service";
export const getAllQuestions=async ()=>{const res = await axios.get(`${privateAxios}/questions`)
return res.data;}
export const getAllContests=async ()=>{const res = await axios.get(`https://mocki.io/v1/e1a09724-066c-4e74-8039-b49369f894a3`)
return res.data;}
export const getAllStudents=async ()=>{const res = await axios.get(`${privateAxios}/students`)
return res.data;}
export const createQuestion=async (questiondata)=>{const res = await axios.post(`${privateAxios}/questions/add`, questiondata)
return res.data;}
export const createContest=async (Contestdata)=>{const res = await axios.post(`${privateAxios}/contests/add`, Contestdata)
return res.data;}