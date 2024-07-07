import axios from "axios";
import { privateAxios } from "./axios.service";
export const getAllQuestions=()=>{return axios.get(`${privateAxios}/questions`).then((res)=>res.data)}
export const getAllContests=()=>{return axios.get(`${privateAxios}/contests`).then((res)=>res.data)}
export const getAllStudents=()=>{return axios.get(`${privateAxios}/students`).then((res)=>res.data)}
export const createQuestion=(questiondata)=>{return axios.post(`${privateAxios}/questions/add`,questiondata).then((res)=>res.data)}
export const createContest=(Contestdata)=>{return axios.post(`${privateAxios}/contests/add`,Contestdata).then((res)=>res.data)}