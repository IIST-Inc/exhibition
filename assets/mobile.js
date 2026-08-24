(function () {
  "use strict";

  const STORAGE_KEY = "iist-semicon-language";
  const supported = ["en", "zh-Hant", "ja"];
  const copy = {
    "zh-Hant": {
      "brand.event": "SEMICON 2026 · 硬體信任",
      "nav.home": "首頁", "nav.demo": "展示", "nav.products": "產品", "nav.more": "更多",
      "nav.technology": "技術", "nav.usecases": "應用案例", "nav.audiences": "適合您的方案", "nav.sources": "官方資料",
      "home.event": "IIST · SEMICON 2026 行動導覽",
      "home.status": "點選主題開始",
      "home.title": "您想先了解什麼？",
      "home.lede": "選一個主題，快速了解 IIST 如何將 Dynamic PUF 從現成 USB 金鑰、模組一路整合到大量 SoC IP。",
      "home.language": "閱讀語言",
      "home.menu": "探索選單",
      "home.demoTitle": "現場展示",
      "home.demoBody": "觀看 SoundLungs 如何在 AI 前驗證裝置、工作階段、資料與來源。",
      "home.productsTitle": "產品",
      "home.productsBody": "比較 USB 金鑰、安全模組、Secure IC 與可授權 IP。",
      "home.techTitle": "Dynamic PUF 技術",
      "home.techBody": "了解一個實體熵源如何支援多個獨立信任根。",
      "home.useTitle": "應用案例",
      "home.useBody": "安全開機、裝置身分、FIDO2、PQC、C2PA 與更多案例。",
      "home.roleTitle": "適合您的方案",
      "home.roleBody": "IC 設計、OEM/ODM、系統整合商與投資人的重點。",
      "home.sourceTitle": "官方資料",
      "home.sourceBody": "直接開啟 NIST、FIDO Alliance 與 C2PA 官方頁面。",
      "home.requestEyebrow": "快速聯絡",
      "home.requestTitle": "希望 IIST 提供什麼？",
      "home.requestHint": "點一下即可開啟預先填寫的電子郵件",
      "request.ip": "索取 IP 評估資料",
      "request.ipBody": "提供目標製程、介面、面積與時程，我們會安排技術後續。",
      "request.sample": "詢問 IC、模組或金鑰樣品",
      "request.sampleBody": "告訴我們主機平台、數量與預計用途。",
      "request.followup": "安排技術後續會議",
      "request.followupBody": "針對信任架構、PQC、FIDO2 或 C2PA 進行討論。",
      "request.investor": "索取投資人資料",
      "request.investorBody": "索取平台、量產驗證與商業模式簡介。",
      "proof.production": "量產驗證",
      "proof.productionBody": "PUF 矽驗證",
      "proof.forms": "IP → 產品",
      "proof.formsBody": "同一技術路徑",
      "proof.pqc": "PQC-ready",
      "proof.pqcBody": "密碼敏捷架構",
      "footer.tagline": "從晶片到系統的硬體信任。",
      "footer.note": "產品功能與認證範圍依指定產品、組態與實作而定。"
    },
    "ja": {
      "brand.event": "SEMICON 2026 · ハードウェアトラスト",
      "nav.home": "ホーム", "nav.demo": "デモ", "nav.products": "製品", "nav.more": "その他",
      "nav.technology": "技術", "nav.usecases": "ユースケース", "nav.audiences": "目的別", "nav.sources": "公式情報",
      "home.event": "IIST · SEMICON 2026 モバイルガイド",
      "home.status": "テーマを選んで開始",
      "home.title": "何から知りたいですか？",
      "home.lede": "テーマを選び、IISTのDynamic PUFがUSBキーやモジュールから量産SoC IPまで展開する流れを短時間で確認できます。",
      "home.language": "表示言語",
      "home.menu": "メニュー",
      "home.demoTitle": "ライブデモ",
      "home.demoBody": "SoundLungsがAIの前にデバイス、セッション、データ、来歴情報を検証する流れ。",
      "home.productsTitle": "製品",
      "home.productsBody": "USBキー、セキュアモジュール、Secure IC、ライセンスIPを比較。",
      "home.techTitle": "Dynamic PUF技術",
      "home.techBody": "1つの物理エントロピー源から複数の独立した信頼ルートを構成。",
      "home.useTitle": "ユースケース",
      "home.useBody": "セキュアブート、デバイスID、FIDO2、PQC、C2PAなど。",
      "home.roleTitle": "目的別ガイド",
      "home.roleBody": "IC設計、OEM/ODM、システムインテグレーター、投資家向け。",
      "home.sourceTitle": "公式情報",
      "home.sourceBody": "NIST、FIDO Alliance、C2PAの公式ページを直接開きます。",
      "home.requestEyebrow": "クイック連絡",
      "home.requestTitle": "IISTから何を受け取りたいですか？",
      "home.requestHint": "タップすると入力済みメールが開きます",
      "request.ip": "IP評価資料を依頼",
      "request.ipBody": "対象プロセス、インターフェース、面積、スケジュールをお知らせください。",
      "request.sample": "IC・モジュール・キーのサンプル相談",
      "request.sampleBody": "ホスト、数量、用途をお知らせください。",
      "request.followup": "技術フォローアップを予約",
      "request.followupBody": "信頼アーキテクチャ、PQC、FIDO2、C2PAについて相談。",
      "request.investor": "投資家向け資料を依頼",
      "request.investorBody": "プラットフォーム、量産検証、事業モデルの概要。",
      "proof.production": "量産検証",
      "proof.productionBody": "PUFシリコン実証",
      "proof.forms": "IP → 製品",
      "proof.formsBody": "一貫した技術パス",
      "proof.pqc": "PQC-ready",
      "proof.pqcBody": "暗号アジリティ",
      "footer.tagline": "シリコンからシステムまで、一貫したハードウェアトラスト。",
      "footer.note": "製品機能と認証範囲は、対象製品、構成、実装によって異なります。"
    }
  };

  Object.assign(copy["zh-Hant"], {
    "nav.contact": "聯絡",
    "common.menu": "返回選單",
    "common.next": "下一頁",

    "demo.kicker": "現場展示 · SoundLungs",
    "demo.title": "資料連線後，先驗證，再進入 AI。",
    "demo.intro": "Raspberry Pi 感測器與 NVIDIA Jetson 各自使用一把 Ankhor 硬體信任根。只有當身分、工作階段、加密與來源證明全部通過，Jetson 才會分析錄音。",
    "demo.summaryTitle": "一個看得見的政策",
    "demo.summaryBody": "若硬體信任根不存在、已註冊身分不符、工作階段證明失敗，或簽署的資料不一致，AI 就維持鎖定。",
    "demo.flowTitle": "展示流程",
    "demo.flowIntro": "五個簡短階段說明完整系統。",
    "demo.flow1Title": "驗證使用者",
    "demo.flow1Body": "FIDO2/WebAuthn 通行密鑰讓檢視者登入；另一個一次性 Ankhor 證明授權操作員動作。",
    "demo.flow2Title": "驗證兩端裝置",
    "demo.flow2Body": "TLS 驗證端點；固定 UID 與 ML-DSA-65 證明必須符合已註冊的感測器與處理器。",
    "demo.flow3Title": "建立新的 PQC 工作階段",
    "demo.flow3Body": "ML-KEM-768 在 TLS 之外建立新的第三類安全等級工作階段資料。",
    "demo.flow4Title": "保護並簽署錄音",
    "demo.flow4Body": "AES-256-GCM 保護傳輸中的 WAV；感測器將 C2PA Content Credential 綁定到確切檔案與工作階段。",
    "demo.flow5Title": "最後才解鎖 AI",
    "demo.flow5Body": "Jetson 解密並驗證簽署者、資料、感測器與工作階段，之後才允許推論。",
    "demo.detailsTitle": "點選查看技術細節",
    "demo.detailsIntro": "主故事保持簡短，只展開您需要的層級。",
    "demo.detail1Title": "三個不同的硬體金鑰角色",
    "demo.detail1Body": "感測器金鑰證明 Raspberry Pi 身分，處理器金鑰證明 Jetson 身分，第三把瀏覽器連接金鑰則授權操作員動作。三者不可互換。",
    "demo.detail2Title": "哪些功能在硬體內？",
    "demo.detail2Body": "PUF 衍生信任根、固定裝置身分，以及受保護的簽章與後量子金鑰操作。確切邊界依產品組態而定。",
    "demo.detail3Title": "哪些功能在系統層？",
    "demo.detail3Body": "TLS、AES 大量資料傳輸、C2PA 封裝與驗證政策、瀏覽器介面、流程協調與 AI 存取政策。",
    "demo.detail4Title": "C2PA 證明什麼？",
    "demo.detail4Body": "它在選定的信任政策下提供可驗證、可偵測竄改的來源證明；不代表錄音內容在事實或臨床上為真。",
    "demo.disclaimer": "SoundLungs 是工程展覽展示，不是醫療器材，也不宣稱任何診斷或臨床效能。",
    "demo.next": "比較展示背後的產品型態",

    "products.kicker": "產品 · 整合深度",
    "products.title": "先用現成硬體驗證，再整合到您的晶片。",
    "products.intro": "相同的 Dynamic PUF 基礎可作為現成硬體、易於整合的 Secure IC 或模組，以及面向大量 SoC 的可授權 IP。",
    "products.keyLabel": "立即部署",
    "products.keyTitle": "Ankhor USB 金鑰",
    "products.keyBody": "用於硬體身分、FIDO2 存取、受保護簽章，以及系統層 PQC 與 C2PA 流程的完整參考平台。",
    "products.keyPoint1": "快速評估", "products.keyPoint2": "參考軟體",
    "products.moduleLabel": "快速整合",
    "products.moduleTitle": "Secure IC 與模組",
    "products.moduleBody": "透過標準介面在現有主機旁加入硬體安全錨點，無需重新設計主要處理器。",
    "products.modulePoint1": "量產矽晶片", "products.modulePoint2": "標準介面", "products.modulePoint3": "獨立於主機",
    "products.ipLabel": "為大量應用最佳化",
    "products.ipTitle": "Dynamic PUF 與 Root-of-Trust IP",
    "products.ipBody": "可單獨嵌入 PUF，或搭配密碼原語與安全引擎，用於 SoC、Secure MCU、ASIC 或 Chiplet。",
    "products.ipPoint1": "最大控制權", "products.ipPoint2": "降低系統 BoM", "products.ipPoint3": "客製信任域",
    "products.pathTitle": "務實的導入路徑",
    "products.pathIntro": "在投入客製晶片前先驗證架構。",
    "products.path1Title": "評估", "products.path1Body": "使用 USB 參考平台驗證軟體與完整流程。",
    "products.path2Title": "整合", "products.path2Body": "在現有產品中導入 Secure IC 或模組。",
    "products.path3Title": "擴大量產", "products.path3Body": "授權並最佳化 IP，以符合成本、功耗與控制需求。",
    "products.proof": "量產驗證的 PUF 矽晶片、Secure IC、模組與完整 USB 平台，可降低整條導入路徑的風險。認證僅適用於其涵蓋的指定產品與組態。",
    "products.cta": "討論產品或樣品",
    "products.next": "了解 Dynamic PUF 技術基礎",

    "tech.kicker": "技術 · Dynamic PUF",
    "tech.title": "不只是裝置指紋。",
    "tech.intro": "IIST 將微小製程差異作為實體熵源，再以 Attestation Curve Cryptography 按需恢復多個獨立信任根。",
    "tech.c1Title": "實體熵", "tech.c1Body": "邏輯單元擷取每顆裝置獨有的製造差異。",
    "tech.c2Title": "ACC 恢復", "tech.c2Body": "Checkpoint 資料讓裝置驗證並重建指定信任根。",
    "tech.c3Title": "多個信任根", "tech.c3Body": "開機、維護、OEM 與應用可使用隔離的信任根。",
    "tech.c4Title": "新鮮隨機數", "tech.c4Body": "同一熵源支援真隨機數生成與重新播種。",
    "tech.rootsTitle": "一個實體來源，多個信任域",
    "tech.rootsIntro": "獨立信任根減少對單一儲存式主密鑰的依賴。",
    "tech.coreLabel": "實體熵",
    "tech.root1": "開機與韌體", "tech.root2": "維護", "tech.root3": "OEM / ODM", "tech.root4": "應用", "tech.root5": "裝置身分", "tech.root6": "TRNG / 重新播種",
    "tech.detailTitle": "點選查看設計細節",
    "tech.detailIntro": "展開與您架構相關的問題。",
    "tech.detail1Title": "信任根密鑰會永久儲存嗎？",
    "tech.detail1Body": "Dynamic PUF 從物理特性與 Checkpoint 資料恢復對應信任根，不需要將根密鑰永久存放於 NVM。",
    "tech.detail2Title": "需要多少 Checkpoint 資料？",
    "tech.detail2Body": "目前產品說明約需每個可恢復信任根 200 bytes。實際數據依目標實作而定。",
    "tech.detail3Title": "PUF 可以移植到其他製程嗎？",
    "tech.detail3Body": "邏輯式 PUF 單元需針對目標製程與晶圓廠重新設計並驗證；ACC 方法本身與製程無關。",
    "tech.detail4Title": "完整 Root of Trust 還需要什麼？",
    "tech.detail4Body": "IIST 可將 Dynamic PUF 與密碼原語、密鑰管理、生命週期控制、安全開機、更新與其他安全引擎功能結合。",
    "tech.cta": "開始 Dynamic PUF 架構討論",
    "tech.next": "探索技術可應用的場景",

    "uses.kicker": "應用案例 · 從晶片到可信資料",
    "uses.title": "硬體信任能在哪裡創造價值？",
    "uses.intro": "Dynamic PUF 可置於新 SoC 內、現有處理器旁，或可攜式金鑰中。選擇一個應用查看適合的整合方式。",
    "uses.u1Title": "安全開機與更新", "uses.u1Body": "為韌體驗證、更新、復原與生命週期狀態配置獨立信任根。",
    "uses.u2Title": "裝置身分", "uses.u2Body": "硬體化註冊、遠端證明、佈建與認證通訊。",
    "uses.u3Title": "Chiplet 信任", "uses.u3Body": "驗證不同裸晶、綁定元件，並隔離 OEM、整合商與應用信任域。",
    "uses.u4Title": "無密碼存取", "uses.u4Body": "FIDO2 使用者驗證與敏感操作的硬體綁定授權。",
    "uses.u5Title": "後量子工作階段", "uses.u5Body": "以硬體信任根支援 ML-DSA 身分與 ML-KEM 連網裝置密鑰建立。",
    "uses.u6Title": "可信資料與 AI", "uses.u6Body": "從來源簽署內容，並依已驗證來源證明決定 AI 或後續流程。",
    "uses.u7Title": "IT / OT 零信任", "uses.u7Body": "為管理員、設備、維護、VPN 與安全遠端存取提供外部信任根。",
    "uses.u8Title": "生命週期隔離", "uses.u8Body": "為製造、OEM/ODM、維修、所有權與應用提供獨立信任域。",
    "uses.formTitle": "選擇務實型態", "uses.formIntro": "應用案例不變，整合深度不同。",
    "uses.form1Title": "可攜式或外部信任", "uses.form1Body": "使用者存取、操作員控制、現場維修與快速評估。",
    "uses.form2Title": "主機旁的嵌入式信任", "uses.form2Body": "改造現有產品，無需開發新的主 SoC。",
    "uses.form3Title": "晶片內的原生信任", "uses.form3Body": "在大量應用中最佳化成本、功耗、效能、介面與信任域。",
    "uses.cta": "將您的應用案例寄給 IIST",
    "uses.next": "查看與您角色相關的重點",

    "roles.kicker": "適合您的方案",
    "roles.title": "選擇您需要的對話。",
    "roles.intro": "不同團隊的切入點不同。以下快速說明 IIST 可提供什麼，以及哪些資訊能讓後續討論更有效率。",
    "roles.icLabel": "IC 設計與 IP 團隊", "roles.icTitle": "將信任整合到晶片", "roles.icBody": "評估 Dynamic PUF 單一 IP，或把它納入客製 Root-of-Trust 平台。",
    "roles.ic1": "目標製程、晶圓廠、面積與功耗", "roles.ic2": "匯流排、記憶體、韌體與生命週期", "roles.ic3": "信任域與 PQC 路線圖", "roles.icCta": "申請 IP 技術討論",
    "roles.oemLabel": "OEM / ODM 與系統整合商", "roles.oemTitle": "為產品加入信任", "roles.oemBody": "先從 Secure IC、模組或金鑰開始，當規模需要時再轉向客製晶片。",
    "roles.oem1": "主機平台與可用介面", "roles.oem2": "身分、開機、存取、資料或更新目標", "roles.oem3": "數量、認證與量產時程", "roles.oemCta": "討論您的目標產品",
    "roles.investorLabel": "投資人與 CVC", "roles.investorTitle": "檢視平台槓桿", "roles.investorBody": "一項核心技術同時支援近期產品收入與更大量的矽 IP 授權機會。",
    "roles.investor1": "矽驗證與量產證據", "roles.investor2": "產品型態與客戶導入路徑", "roles.investor3": "IP 可移植性、經濟性與商機管線", "roles.investorCta": "索取投資人簡介",
    "roles.next": "開啟官方標準來源",

    "sources.kicker": "官方來源 · 以新分頁開啟",
    "sources.title": "直接閱讀標準原始資料。",
    "sources.intro": "這些連結會開啟 NIST、FIDO Alliance、W3C 與 C2PA 的官方標準與說明。引用這些資料不代表每個 IIST 組態都已獲認證。",
    "sources.nistNews": "PQC 標準公告", "sources.nistNewsBody": "FIPS 203、204 與 205 正式核准公告。",
    "sources.kemBody": "模組晶格式密鑰封裝機制標準。",
    "sources.dsaBody": "模組晶格式數位簽章標準。",
    "sources.fido": "FIDO2 規格總覽", "sources.fidoBody": "FIDO2、CTAP 與 WebAuthn 的官方關係說明。",
    "sources.webauthn": "Web Authentication 規格", "sources.webauthnBody": "W3C WebAuthn 規格系列。",
    "sources.c2pa": "C2PA 規格", "sources.c2paBody": "最新 Content Credentials 技術規格與實作指引。",
    "sources.c2paPrinciples": "C2PA 指導原則", "sources.c2paPrinciplesBody": "說明來源證明是可驗證證據，而非真假判斷。",
    "sources.zt": "NIST 零信任架構", "sources.ztBody": "NIST SP 800-207 移除隱性信任的指引。",
    "sources.note": "IIST 在特定產品與展示組態中使用這些標準。請詢問與您專案相關的最新實作邊界與認證範圍。",
    "sources.cta": "詢問標準或認證範圍"
  });

  Object.assign(copy.ja, {
    "nav.contact": "連絡",
    "common.menu": "メニューに戻る",
    "common.next": "次へ",

    "demo.kicker": "ライブデモ · SoundLungs",
    "demo.title": "接続したデータを、AIの前に検証。",
    "demo.intro": "Raspberry PiセンサーとNVIDIA Jetsonは、それぞれAnkhorハードウェアルートを使用します。ID、セッション、暗号化、来歴情報の確認がすべて通過した場合にのみ、Jetsonが録音を解析します。",
    "demo.summaryTitle": "目に見える1つのポリシー",
    "demo.summaryBody": "ハードウェアルートがない、登録IDが異なる、セッション証明に失敗する、または署名対象のデータが一致しない場合、AIはロックされたままです。",
    "demo.flowTitle": "デモの流れ",
    "demo.flowIntro": "5つの短いステージでシステム全体を説明します。",
    "demo.flow1Title": "ユーザーを認証",
    "demo.flow1Body": "FIDO2/WebAuthnパスキーで閲覧者がログインし、別のワンタイムAnkhor証明で操作を認可します。",
    "demo.flow2Title": "両方のデバイスを認証",
    "demo.flow2Body": "TLSで終端を確認し、固定UIDとML-DSA-65証明が登録済みセンサーとプロセッサーに一致する必要があります。",
    "demo.flow3Title": "新しいPQCセッションを確立",
    "demo.flow3Body": "ML-KEM-768がTLSに加えて新しいセキュリティカテゴリ3のセッション材料を確立します。",
    "demo.flow4Title": "録音を保護して署名",
    "demo.flow4Body": "AES-256-GCMが転送中のWAVを保護し、センサーがC2PA Content Credentialを正確なファイルとセッションに結び付けます。",
    "demo.flow5Title": "AIは最後に解除",
    "demo.flow5Body": "Jetsonが復号し、署名者、データ、センサー、セッションを検証してから推論を許可します。",
    "demo.detailsTitle": "タップして技術詳細を表示",
    "demo.detailsIntro": "概要は短く保ち、必要なレイヤーだけ開けます。",
    "demo.detail1Title": "3つの異なるハードウェアキー役割",
    "demo.detail1Body": "センサーキーはRaspberry Pi、プロセッサーキーはJetsonのIDを証明し、3つ目のブラウザー接続キーが操作を認可します。役割は交換できません。",
    "demo.detail2Title": "ハードウェア内の機能は？",
    "demo.detail2Body": "PUF由来のルート、固定デバイスID、保護された署名とポスト量子鍵操作です。正確な境界は製品構成によって異なります。",
    "demo.detail3Title": "システムレベルの機能は？",
    "demo.detail3Body": "TLS、AESバルク転送、C2PAパッケージ化と検証ポリシー、ブラウザーUI、制御処理、AIアクセス方針です。",
    "demo.detail4Title": "C2PAは何を証明しますか？",
    "demo.detail4Body": "選択した信頼ポリシーに基づく、検証可能で改ざん検知可能な来歴情報です。録音内容が事実または臨床的に正しいことを証明するものではありません。",
    "demo.disclaimer": "SoundLungsは展示用エンジニアリングデモであり、医療機器ではありません。診断や臨床性能を主張しません。",
    "demo.next": "デモを支える製品形態を比較",

    "products.kicker": "製品 · 統合レベル",
    "products.title": "動作するハードウェアから始め、シリコンへ展開。",
    "products.intro": "同じDynamic PUF基盤を、導入可能なハードウェア、統合しやすいSecure IC／モジュール、量産SoC向けライセンスIPとして提供します。",
    "products.keyLabel": "すぐに導入",
    "products.keyTitle": "Ankhor USBキー",
    "products.keyBody": "ハードウェアID、FIDO2アクセス、保護された署名、システムレベルのPQC／C2PAワークフロー向け完成済みリファレンスプラットフォーム。",
    "products.keyPoint1": "迅速な評価", "products.keyPoint2": "リファレンスソフトウェア",
    "products.moduleLabel": "短期間で統合",
    "products.moduleTitle": "Secure IC／モジュール",
    "products.moduleBody": "メインプロセッサーを再設計せず、標準インターフェースで既存ホストにハードウェアセキュリティアンカーを追加します。",
    "products.modulePoint1": "量産シリコン", "products.modulePoint2": "標準インターフェース", "products.modulePoint3": "ホストから独立",
    "products.ipLabel": "量産向け最適化",
    "products.ipTitle": "Dynamic PUF／Root-of-Trust IP",
    "products.ipBody": "PUF単体、または暗号プリミティブとセキュリティエンジンを組み合わせ、SoC、Secure MCU、ASIC、チップレットに統合できます。",
    "products.ipPoint1": "最大限の制御", "products.ipPoint2": "システムBoM削減", "products.ipPoint3": "独自の信頼ドメイン",
    "products.pathTitle": "実用的な導入パス",
    "products.pathIntro": "カスタムシリコンに投資する前にアーキテクチャを検証します。",
    "products.path1Title": "評価", "products.path1Body": "USBリファレンスプラットフォームでソフトウェアとワークフローを検証。",
    "products.path2Title": "統合", "products.path2Body": "既存製品にSecure ICまたはモジュールを導入。",
    "products.path3Title": "量産展開", "products.path3Body": "コスト、消費電力、制御要件に合わせてIPをライセンス・最適化。",
    "products.proof": "量産検証済みPUFシリコン、Secure IC、モジュール、完成済みUSBプラットフォームにより導入全体のリスクを低減します。認証は対象となる製品と構成にのみ適用されます。",
    "products.cta": "製品またはサンプルを相談",
    "products.next": "Dynamic PUFの技術基盤を理解する",

    "tech.kicker": "技術 · Dynamic PUF",
    "tech.title": "単なるデバイス指紋ではありません。",
    "tech.intro": "IISTは微細な製造ばらつきを物理エントロピー源として使用し、Attestation Curve Cryptographyにより複数の独立した信頼ルートを必要時に復元します。",
    "tech.c1Title": "物理エントロピー", "tech.c1Body": "ロジックセルがデバイス固有の製造ばらつきを取得します。",
    "tech.c2Title": "ACC復元", "tech.c2Body": "チェックポイントデータにより対象ルートを検証・再構成します。",
    "tech.c3Title": "複数のルート", "tech.c3Body": "ブート、保守、OEM、アプリケーションを独立したルートで分離できます。",
    "tech.c4Title": "新しい乱数", "tech.c4Body": "同じエントロピー源が真性乱数生成と再シードを支えます。",
    "tech.rootsTitle": "1つの物理源、複数の信頼ドメイン",
    "tech.rootsIntro": "独立したルートにより、保存された単一マスター鍵への依存を減らします。",
    "tech.coreLabel": "物理エントロピー",
    "tech.root1": "ブート／ファームウェア", "tech.root2": "保守", "tech.root3": "OEM／ODM", "tech.root4": "アプリケーション", "tech.root5": "デバイスID", "tech.root6": "TRNG／再シード",
    "tech.detailTitle": "タップして設計詳細を表示",
    "tech.detailIntro": "アーキテクチャに関連する項目だけ開けます。",
    "tech.detail1Title": "ルート鍵は恒久保存されますか？",
    "tech.detail1Body": "Dynamic PUFは、ルート鍵をNVMに恒久保存するのではなく、物理特性とチェックポイントデータから関連ルートを復元します。",
    "tech.detail2Title": "必要なチェックポイントデータ量は？",
    "tech.detail2Body": "現在の製品説明では、復元可能なルートごとに約200バイトです。実際の値は対象実装によって異なります。",
    "tech.detail3Title": "別プロセスへ移植できますか？",
    "tech.detail3Body": "ロジックベースのPUFセルは対象ノードとファウンドリ向けに再設計・検証します。ACC方式はプロセス非依存です。",
    "tech.detail4Title": "完全なRoot of Trustに必要なものは？",
    "tech.detail4Body": "Dynamic PUFに暗号プリミティブ、鍵管理、ライフサイクル制御、セキュアブート、更新などのセキュリティエンジン機能を組み合わせられます。",
    "tech.cta": "Dynamic PUFアーキテクチャを相談",
    "tech.next": "技術のユースケースを見る",

    "uses.kicker": "ユースケース · シリコンから信頼できるデータまで",
    "uses.title": "ハードウェアトラストが価値を生む場所。",
    "uses.intro": "Dynamic PUFは新しいSoC内、既存プロセッサーの隣、または携帯可能なキーに配置できます。用途を選び、適切な形態を確認してください。",
    "uses.u1Title": "セキュアブート／更新", "uses.u1Body": "ファームウェア検証、更新、復旧、ライフサイクル状態に独立ルートを割り当てます。",
    "uses.u2Title": "デバイスID", "uses.u2Body": "ハードウェア起点の登録、アテステーション、プロビジョニング、認証通信。",
    "uses.u3Title": "チップレット信頼", "uses.u3Body": "ダイを認証・結合し、OEM、インテグレーター、アプリのドメインを分離。",
    "uses.u4Title": "パスワードレスアクセス", "uses.u4Body": "FIDO2ユーザー認証と重要操作に対するハードウェア紐付け認可。",
    "uses.u5Title": "ポスト量子セッション", "uses.u5Body": "接続デバイス向けにハードウェアルート型ML-DSA IDとML-KEM鍵確立を提供。",
    "uses.u6Title": "信頼できるデータ／AI", "uses.u6Body": "生成元で署名し、検証済み来歴に基づいてAIや後続処理を許可。",
    "uses.u7Title": "IT／OTゼロトラスト", "uses.u7Body": "管理者、設備、保守、VPN、安全なリモートアクセス向け外部ルート。",
    "uses.u8Title": "ライフサイクル分離", "uses.u8Body": "製造、OEM／ODM、サービス、所有権、アプリに独立した信頼ドメイン。",
    "uses.formTitle": "実用的な形態を選択", "uses.formIntro": "用途は同じでも、統合レベルが異なります。",
    "uses.form1Title": "携帯型／外部トラスト", "uses.form1Body": "ユーザーアクセス、操作制御、フィールドサービス、迅速な評価。",
    "uses.form2Title": "ホスト横の組込みトラスト", "uses.form2Body": "新しいメインSoCなしで既存製品を強化。",
    "uses.form3Title": "シリコン内のネイティブトラスト", "uses.form3Body": "量産時のコスト、電力、性能、インターフェース、信頼ドメインを最適化。",
    "uses.cta": "ユースケースをIISTへ送信",
    "uses.next": "役割に合った確認事項を見る",

    "roles.kicker": "目的別ガイド",
    "roles.title": "必要な会話を選んでください。",
    "roles.intro": "チームごとに出発点は異なります。IISTが提供できるものと、有効なフォローアップに必要な情報を短くまとめました。",
    "roles.icLabel": "IC設計／IPチーム", "roles.icTitle": "信頼をシリコンへ統合", "roles.icBody": "Dynamic PUF単体、またはカスタムRoot-of-Trustプラットフォームとして評価。",
    "roles.ic1": "対象ノード、ファウンドリ、面積、電力", "roles.ic2": "バス、メモリ、ファームウェア、ライフサイクル", "roles.ic3": "信頼ドメインとPQCロードマップ", "roles.icCta": "IP技術相談を依頼",
    "roles.oemLabel": "OEM／ODM／SI", "roles.oemTitle": "製品に信頼を追加", "roles.oemBody": "Secure IC、モジュール、キーから始め、規模に応じてカスタムシリコンへ移行。",
    "roles.oem1": "ホストプラットフォームと利用可能なIF", "roles.oem2": "ID、ブート、アクセス、データ、更新の目標", "roles.oem3": "数量、認証、量産時期", "roles.oemCta": "対象製品を相談",
    "roles.investorLabel": "投資家／CVC", "roles.investorTitle": "プラットフォームの拡張性を確認", "roles.investorBody": "1つのコア技術が短期的な製品収益と量産シリコンIPライセンス機会を支えます。",
    "roles.investor1": "シリコンと量産実証", "roles.investor2": "製品形態と顧客導入パス", "roles.investor3": "IP移植性、経済性、案件パイプライン", "roles.investorCta": "投資家向け概要を依頼",
    "roles.next": "公式標準情報を開く",

    "sources.kicker": "公式情報 · 新しいタブで開きます",
    "sources.title": "標準を一次情報で確認。",
    "sources.intro": "NIST、FIDO Alliance、W3C、C2PAの公式標準・解説ページを開きます。これらの参照は、すべてのIIST構成が認証済みであることを意味しません。",
    "sources.nistNews": "PQC標準の発表", "sources.nistNewsBody": "FIPS 203、204、205の正式承認。",
    "sources.kemBody": "Module-Lattice-Based Key-Encapsulation Mechanism標準。",
    "sources.dsaBody": "Module-Lattice-Based Digital Signature標準。",
    "sources.fido": "FIDO2仕様の概要", "sources.fidoBody": "FIDO2、CTAP、WebAuthnの公式な関係説明。",
    "sources.webauthn": "Web Authentication仕様", "sources.webauthnBody": "W3C WebAuthn仕様ファミリー。",
    "sources.c2pa": "C2PA仕様", "sources.c2paBody": "最新のContent Credentials技術仕様と実装ガイダンス。",
    "sources.c2paPrinciples": "C2PAの基本原則", "sources.c2paPrinciplesBody": "来歴情報は検証可能な証拠であり、真偽判定ではないことを説明。",
    "sources.zt": "NIST Zero Trust Architecture", "sources.ztBody": "暗黙の信頼を排除するNIST SP 800-207。",
    "sources.note": "IISTは特定の製品・デモ構成でこれらの標準を使用します。プロジェクトに関係する最新の実装境界と認証範囲をご確認ください。",
    "sources.cta": "標準または認証範囲を問い合わせ"
  });

  const metadata = {
    home: {
      en: ["IIST SEMICON 2026 | Mobile Guide", "Choose a topic to explore IIST Dynamic PUF technology, products, live demo, and use cases."],
      "zh-Hant": ["IIST SEMICON 2026 | 行動導覽", "選擇主題，快速了解 IIST Dynamic PUF 技術、產品、現場展示與應用案例。"],
      ja: ["IIST SEMICON 2026 | モバイルガイド", "IIST Dynamic PUFの技術、製品、ライブデモ、ユースケースをテーマ別に確認できます。"]
    },
    demo: {
      en: ["SoundLungs Live Demo | IIST SEMICON 2026", "Learn how SoundLungs verifies hardware identity, PQC, encryption, and C2PA provenance before AI inference."],
      "zh-Hant": ["SoundLungs 現場展示 | IIST SEMICON 2026", "了解 SoundLungs 如何在 AI 推論前驗證硬體身分、PQC、加密與 C2PA 來源證明。"],
      ja: ["SoundLungsライブデモ | IIST SEMICON 2026", "SoundLungsがAI推論前にハードウェアID、PQC、暗号化、C2PA来歴情報を検証する流れを紹介します。"]
    },
    products: {
      en: ["Products & Integration Paths | IIST SEMICON 2026", "Compare Dynamic PUF IP, secure IC and module, and Ankhor USB key integration paths."],
      "zh-Hant": ["產品與整合路徑 | IIST SEMICON 2026", "比較 Dynamic PUF IP、Secure IC、模組與 Ankhor USB 金鑰的整合路徑。"],
      ja: ["製品と統合パス | IIST SEMICON 2026", "Dynamic PUF IP、Secure IC、モジュール、Ankhor USBキーの統合パスを比較できます。"]
    },
    technology: {
      en: ["Dynamic PUF Technology | IIST SEMICON 2026", "Learn how Dynamic PUF creates multiple roots of trust and true-random entropy from one physical source."],
      "zh-Hant": ["Dynamic PUF 技術 | IIST SEMICON 2026", "了解 Dynamic PUF 如何從一個實體來源建立多個信任根與真隨機熵。"],
      ja: ["Dynamic PUF技術 | IIST SEMICON 2026", "1つの物理源から複数の信頼ルートと真性乱数エントロピーを構成する仕組みを紹介します。"]
    },
    usecases: {
      en: ["Dynamic PUF Use Cases | IIST SEMICON 2026", "Explore secure boot, device identity, chiplets, FIDO2, PQC, C2PA, and zero-trust use cases."],
      "zh-Hant": ["Dynamic PUF 應用案例 | IIST SEMICON 2026", "探索安全開機、裝置身分、Chiplet、FIDO2、PQC、C2PA 與零信任應用。"],
      ja: ["Dynamic PUFユースケース | IIST SEMICON 2026", "セキュアブート、デバイスID、チップレット、FIDO2、PQC、C2PA、ゼロトラストの用途を紹介します。"]
    },
    audiences: {
      en: ["Find Your IIST Path | SEMICON 2026", "Focused discussion guides for IC design, OEM/ODM, system integration, and investment teams."],
      "zh-Hant": ["找到適合您的 IIST 路徑 | SEMICON 2026", "為 IC 設計、OEM/ODM、系統整合與投資團隊提供重點討論指引。"],
      ja: ["目的別IISTガイド | SEMICON 2026", "IC設計、OEM／ODM、システム統合、投資チーム向けの相談ガイドです。"]
    },
    sources: {
      en: ["Official Standards Sources | IIST SEMICON 2026", "Official NIST, FIDO Alliance, W3C, and C2PA sources referenced by the IIST demonstration."],
      "zh-Hant": ["官方標準來源 | IIST SEMICON 2026", "IIST 展示所引用的 NIST、FIDO Alliance、W3C 與 C2PA 官方資料。"],
      ja: ["公式標準情報 | IIST SEMICON 2026", "IISTデモで参照するNIST、FIDO Alliance、W3C、C2PAの公式情報です。"]
    }
  };

  const root = document.documentElement;
  const page = document.body.dataset.page || "home";
  const english = new Map();

  function normalize(value) { return supported.includes(value) ? value : "en"; }
  function initialLanguage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (supported.includes(stored)) return stored;
    } catch (error) { /* Continue with browser language. */ }
    const preferred = (navigator.language || "en").toLowerCase();
    if (preferred.startsWith("zh")) return "zh-Hant";
    if (preferred.startsWith("ja")) return "ja";
    return "en";
  }

  function applyLanguage(language, persist) {
    const selected = normalize(language);
    root.lang = selected;
    root.dataset.language = selected;
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.dataset.i18n;
      if (!english.has(element)) english.set(element, element.textContent);
      element.textContent = selected === "en" ? english.get(element) : (copy[selected] && copy[selected][key]) || english.get(element);
    });
    document.querySelectorAll("[data-language-select]").forEach(function (select) { select.value = selected; });
    document.querySelectorAll("[data-language-choice]").forEach(function (button) { button.setAttribute("aria-pressed", String(button.dataset.languageChoice === selected)); });
    const pageMeta = metadata[page] && metadata[page][selected];
    if (pageMeta) {
      document.title = pageMeta[0];
      const description = document.querySelector('meta[name="description"]');
      if (description) description.content = pageMeta[1];
    }
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, selected); } catch (error) { /* Visible state still changes. */ }
    }
  }

  document.querySelectorAll("[data-language-select]").forEach(function (select) {
    select.addEventListener("change", function () { applyLanguage(select.value, true); });
  });
  document.querySelectorAll("[data-language-choice]").forEach(function (button) {
    button.addEventListener("click", function () { applyLanguage(button.dataset.languageChoice, true); });
  });
  document.querySelectorAll("details").forEach(function (detail) {
    detail.addEventListener("toggle", function () {
      const marker = detail.querySelector("summary b");
      if (marker) marker.textContent = detail.open ? "−" : "+";
    });
  });

  applyLanguage(initialLanguage(), false);
})();
