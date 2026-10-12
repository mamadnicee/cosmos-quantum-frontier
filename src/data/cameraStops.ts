import { chapters } from './chapters';
export type Stop = {id:string; position:[number,number,number]; target:[number,number,number]};
export const defaultStops: Stop[] = chapters.map(c=>({id:c.id,position:[...c.position],target:[...c.target]}));
export const ROUTE_KEY='cosmos-route-v1';
export function validStops(x:unknown): x is Stop[] {
 if(!Array.isArray(x)||x.length!==chapters.length)return false;
 return x.every((s,i)=>s&&s.id===chapters[i].id&&[s.position,s.target].every(v=>Array.isArray(v)&&v.length===3&&v.every(n=>typeof n==='number'&&Number.isFinite(n)&&Math.abs(n)<100000)));
}