/* =====================================================================
   Wisdom Journal 智慧手記｜網站設定
   部署後只需要改這個檔案。改完重新上傳（或重新執行部署腳本）即可。
   ===================================================================== */
window.WJ_CONFIG = {
  // "demo"：示範模式。可瀏覽、試讀，兌換與登入為模擬流程（重新整理就會重置）。
  // "live"：正式模式。需要先完成 Supabase 後端設定（見 README 第 3 節）。
  MODE: "live",

  // 蝦皮商品網址
  SHOPEE_URL: {
    standard:  "",   // 標準版 NT$199
    collector: ""    // PDF 收藏版 NT$299
  },

  // Supabase（正式模式才需要）。anon key 本來就是公開金鑰，可以放在這裡。
  // 絕對不要把 service_role key 放進這個檔案。
   SUPABASE_URL: "https://yjmsbzaalbyoyaodccug.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_Y7zYoqsHLwTXoPmMWl6xag_FxtZt57c",

  CONTACT_EMAIL: "",
  SOCIAL: { instagram: "", threads: "" }
};
