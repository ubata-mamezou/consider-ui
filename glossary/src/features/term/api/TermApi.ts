// import { SaveTermReq, UpdateTermReq } from "..";

import { SaveTermReq, UpdateTermReq } from "..";

const termServiceHost = "http://localhost:19000/term-service";

/**
 * 用語取得。
 * @param id 用語ID
 * @returns 用語
 */
export const getTerm = async (id: string) => {
  try {
    const res = await fetch(
      `${termServiceHost}/terms/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      }
    );
    if (!res.ok) {
      console.log(`APIの呼び出しに失敗しました status: ${res.status}`);
      throw new Error("API call failed.");
    }
    return await res.json();
  } catch (ex) {
    console.log(`APIの呼び出しに失敗しました cause: ${ex}`);
  }
};

/**
 * 用語リスト取得。
 * @returns 用語リスト
 */
export const getTerms = async () => {
  try {
    const res = await fetch(
      `${termServiceHost}/terms`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      }
    );
    if (!res.ok) {
      console.log(`APIの呼び出しに失敗しました status: ${res.status}`);
      throw new Error("API call failed.");
    }
    return await res.json();
  } catch (ex) {
    console.log(`APIの呼び出しに失敗しました cause: ${ex}`);
  }
};

/**
 * 用語登録。
 * @param req 用語登録リクエスト
 * @returns 用語
 */
export const saveTerm = async (req: SaveTermReq) => {
  try {
    const res = await fetch(
      `${termServiceHost}/terms`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(req)
      }
    );
    if (!res.ok) {
      console.log(`APIの呼び出しに失敗しました status: ${res.status}`);
      throw new Error("API call failed.");
    }
    return await res.json();
  } catch (ex) {
    console.log(`APIの呼び出しに失敗しました cause: ${ex}`);
  }
};

/**
 * 用語更新。
 * @param id 用語ID
 * @param version 用語バージョン
 * @param req 用語更新リクエスト
 * @returns 用語
 */
export const updateTerm = async (id: string, version: number, req: UpdateTermReq) => {
  try {
    const res = await fetch(
      `${termServiceHost}/terms/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "version": `${version}`
        },
        mode: "cors",
        body: JSON.stringify(req)
      }
    );
    if (!res.ok) {
      console.log(`APIの呼び出しに失敗しました status: ${res.status}`);
      throw new Error("API call failed.");
    }
    return await res.json();
  } catch (ex) {
    console.log(`APIの呼び出しに失敗しました cause: ${ex}`);
  }
};

/**
 * 用語削除。
 * @param id 用語ID
 * @param version 用語バージョン
 * @returns 用語
 */
export const deleteTerm = async (id: string, version: number) => {
  try {
    const res = await fetch(
      `${termServiceHost}/terms/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "version": `${version}`
        },
        mode: "cors",
      }
    );
    if (!res.ok) {
      console.log(`APIの呼び出しに失敗しました status: ${res.status}`);
      throw new Error("API call failed.");
    }
    return await res.json();
  } catch (ex) {
    console.log(`APIの呼び出しに失敗しました cause: ${ex}`);
  }
};
