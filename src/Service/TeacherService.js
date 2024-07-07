import axios from "axios";
import { privateAxios } from "./axios.service";
export const getAllQuestions=()=>{axios.get(`${privateAxios}/questions`).then((res)=>res.data)}
export const getAllContests=()=>{axios.get(`${privateAxios}/contests`).then((res)=>res.data)}
export const getAllStudents=()=>{axios.get(`${privateAxios}/students`).then((res)=>res.data)}
export const createQuestion=(questiondata)=>{axios.post(`${privateAxios}/questions/add`,questiondata).then((res)=>res.data)}
export const createContest=(Contestdata)=>{axios.post(`${privateAxios}/contests/add`,Contestdata).then((res)=>res.data)}