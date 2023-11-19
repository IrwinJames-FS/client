/*
This file is just a convenience method to pass along the data only. 
Error handling may need to be reworked
*/

import axios from "axios";

/**
 * Fetch the information using a GET request
 * @param url 
 * @returns {Promise<T>}
 */
export const GET = <T>(url: string): Promise<T> => axios.get<T>(url).then(r=>r.data);

/**
 * Send a message to the endpoint using a POST request
 * @param url 
 * @param record 
 * @returns {Promise<T>}
 */
export const POST = <T>(url: string, record: any) => axios.post<T>(url, record).then(r=>r.data);

/**
 * Send a message to the endpoint using a PUT request
 * @param url 
 * @param record 
 * @returns {Promise<T>}
 */
export const PUT = <T>(url: string, record: any) => axios.put<T>(url, record).then(r=>r.data);

/**
 * Send a delete request to the endpoint
 * @param url 
 * @param record 
 * @returns {Promise<T>}
 */
export const DELETE =  <T>(url: string) => axios.delete<T>(url).then(r=>r.data);

export const WAIT = async (duration: number) => new Promise(resolve => window.setTimeout(resolve, duration));
