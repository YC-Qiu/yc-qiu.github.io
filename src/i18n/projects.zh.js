// Display copy only. The source data remains the identity for URLs, filters, and artwork.
export const projectTranslations = {
  "The Legend of Zelda – Unity Remastered": {
    title: "塞尔达传说：Unity 重制版", team: "与 Varun Rajesh 合作",
    description: ["用 Unity 重现 1986 年经典作品的首个地牢，还原原版机制，并打磨自定义关卡。"],
    contributions: ["实现碰撞体、飞行武器运动等物理系统。", "开发拳击、弓箭、回旋镖和炸弹等武器，并实现视觉特效与伤害检测。", "设计自定义魔法师 Boss，使其能在关卡中召唤方块。"],
  },
  "Computer Lab Simulator – VR Experience": {
    title: "计算机实验室模拟器：VR 体验", team: "与 Mehar Chhatwal 合作", tech: "Unreal Engine, 蓝图",
    description: ["制作 Bob and Betty Beyster 计算机实验室的 VR 模拟体验，加入可交互 NPC 和场景物件。"],
    contributions: ["编写火警、打印机复制和垃圾桶等交互逻辑。", "通过放置和调整场景资源，还原真实实验室。", "实现灯光开关逻辑与环境效果，增强场景氛围。"],
  },
  "Checkmate": {
    title: "Checkmate · 将军", team: "独立项目",
    description: ["以棋魂为核心的 Roguelike 策略游戏，包含逐步演进的玩法机制和新手教学。"],
    contributions: ["设计全部 14 种棋魂及其独特能力、奖励和成长系统。", "设计限制决策时间的 Boss 战，改变游戏节奏。", "制作教程、视觉特效和音频，并通过反复试玩完善平衡性与体验。"],
  },
  "Ann Arbor Go! – AR Game": {
    title: "Ann Arbor Go! · AR 探索游戏", team: "与 Mehar Chhatwal 合作",
    description: ["设计受 Pokémon Go 启发的 AR 探索游戏，让玩家在安娜堡种树、与松鼠战斗并解锁奖励。"],
    contributions: ["制作地标与商店页面的 UI。", "实现树木、松鼠和收集物的 AR 交互。", "围绕投掷橡果与自定义巧克力增益道具，调整战斗循环与平衡。"],
  },
  "Cosmic Flux Frenzy": {
    title: "Cosmic Flux Frenzy · 宇宙磁力狂潮", team: "团队：Jeremy Angelo Damacino Abapo、Bilal Al-Jaibaji、Tianze You",
    description: ["以磁力武器为特色的动作冒险原型，玩家可在太空旅途中吸引或推开敌人。"],
    contributions: ["制作 RPG 图标、地图、商店面板等 UI 资源及对话系统。", "实现星球与关卡控制器、目标管理，并调整操作手感。", "设计太空旋转、平滑加速和碰撞处理等运动效果。"],
  },
  "VR Restaurant Simulator": {
    title: "VR 餐厅模拟器", team: "团队：Hongxiao Zheng、Yi He、Ruiying He、Mehar Chhatwal",
    description: ["融合种植与烹饪的 VR 模拟游戏，以丰富交互和温馨美术引导玩家完成从种植到售卖的流程。"],
    contributions: ["制作材质与 3D 资源，搭建温馨的餐厅场景。", "实现种苹果、榨汁和烹饪等玩法系统。", "制作基础手部动画与可交互道具。"],
  },
  "Don't Flock Up": {
    title: "Don't Flock Up · 合作游戏", team: "Game Jam 团队：Alexander、Dallas、Tristan、Justin",
    description: ["以“适得其反”为主题的合作游戏，在密歇根大学 Turkey Game Jam 中获得<highlight>第三名</highlight>。"],
    contributions: ["制作界面资源、主游戏循环、音效和精灵图像。"],
  },
  "Understanding Global Drivers and Barriers of AI Adoption": {
    title: "全球 AI 采纳的驱动因素与障碍", time: "2025 年秋季", tech: "Python, Tableau, 监督学习（分类与回归）",
    description: ["分析多语言问卷，了解不同地区<highlight>哪些人采用 AI、哪些人仍在观望</highlight>。", "构建涵盖<highlight>数据清洗、特征工程、监督学习模型与 Tableau 仪表板</highlight>的完整流程，从原始回答中提炼清晰信号。", "研究结果为全球 AI 项目的<highlight>市场定位、本地化和负责任的推广</highlight>提供参考。"],
    contributions: ["统一处理 20 多个国家的数据，并从问卷文本中构建行为特征。", "比较分类与回归模型，分析 AI 采纳的主要驱动因素。", "制作交互式 Tableau 故事，呈现准备程度、障碍和用户画像。"],
  },
  "Cross-Domain Sentiment Analysis without Fine-Tuning": {
    title: "无需微调的跨领域情感分析", time: "2025 年秋季", tech: "Python (scikit-learn, pandas), NLP 特征工程, 跨领域评估",
    description: ["研究情感分析模型如何泛化到新领域，以及如何在<highlight>不进行微调</highlight>的情况下提升表现。", "分析在源领域训练的模型应用到不同目标领域时，性能如何下降。", "保持已训练模型不变，探索提升目标领域表现的方法，无需在新领域重新微调。"],
    contributions: ["评估情感模型在源领域与目标领域的表现，理解领域偏移的影响。", "研究无需微调即可改善跨领域泛化的方法。"],
  },
  "Meal Logistics Planner: AI Scheduling for Multi-Dish Cooking": {
    title: "多菜品烹饪 AI 调度规划器", time: "2026 年冬季", tech: "Python, PDDL (Fast Downward), 大语言模型集成, 规划与调度",
    description: ["开发 AI 系统，在资源与时间限制下自动协调多道菜的烹饪。", "将食谱建模为包含依赖关系与资源需求的任务图，再转换为 PDDL 规划问题，生成无冲突的执行方案。", "构建从自然语言输入到同步调度、瓶颈资源检测及详细执行时间线的完整流程。"],
    contributions: ["设计符号规划框架，在避免资源冲突的同时协调所有菜品同步完成。", "实现基于 PDDL 的规划器，并加入备用调度策略以提高稳健性。", "构建交互式网页界面，结合大语言模型智能体生成自定义厨房配置与食谱。", "实现从自然语言输入到规划和可执行日程的端到端系统。"],
  },
  "Context-Aware Food Recommendation": {
    title: "情境感知的食物推荐", type: "课程项目 · 行为情境建模", status: "原型", tech: "Python, 特征工程, 无监督学习, 推荐系统", detailHeading: "已实现的功能",
    description: ["探索如何将手机应用的使用模式转化为可解释的情境信号，为食物推荐提供依据。", "原型将 LSApp 使用日志转换为用户每日特征，涵盖使用时长、应用多样性、时段、切换行为和类别构成。结合聚类分离度指标、簇规模均衡性及可解释画像，比较 KMeans、高斯混合模型与凝聚层次聚类。", "已实现预处理、特征提取、模型比较和画像导出。目前正在围绕推荐需求选择模型，下一步将把行为簇映射到菜品排序。聚类反映的是使用行为，而非情绪或心理特征。"],
    contributions: ["清洗交互日志、过滤过短交互，并在导出前校验应用与类别的映射。", "构建用户每日特征表，使用轮廓系数、Davies–Bouldin 和 Calinski–Harabasz 分数比较聚类方法。", "导出聚类画像与特征摘要，为结果解释和后续推荐设计提供支持。"],
  },
  "Abbott — AI Knowledge Assistant": {
    title: "Abbott · AI 知识助手", type: "企业合作毕业项目 · 方案设计", status: "方案设计", tech: "企业 AI, 知识检索, 访问控制, 产品设计",
    description: ["设计企业 AI 助手方案，帮助团队检索内部知识、完成多步骤工作流，同时遵守敏感信息的访问权限。", "内部助手不仅要找到相关文档，还要尊重访问权限、引导用户查阅正确来源，并适应现有工作方式。项目比较了三条路线：独立助手、共享知识服务，以及引导多步骤工作流的智能体。"],
    contributions: ["我负责方案设计，比较三种路线并将利益相关方的需求转化为设计标准。重点关注用户如何核对答案来源、权限限制如何贯穿工作流，以及哪些方案值得进入原型阶段。"],
  },
  "Narrative Agent for Interactive Fiction": {
    title: "交互式小说叙事智能体", type: "独立课程项目 · 系统设计与评估计划", status: "系统设计", tech: "大语言模型智能体, 工具调用, 状态管理, 交互式小说",
    description: ["设计交互式小说智能体，让读者用自然语言行动，同时使故事与作者规则及此前选择保持一致。", "穷举所有剧情分支成本很高，而自由对话机器人可能产生剧情矛盾或过早泄露线索。我的设计将持久化故事状态保存在模型之外。智能体可以读取状态、查询玩家有权知道的信息并尝试行动；重要变更先由后端验证，再由模型叙述结果。例如，模型可以描述一扇锁住的门，但没有有效行动就不能自行判定玩家已开门。"],
    contributions: ["我设计了创作流程、get_state、query_story、attempt_action 三个工具，以及叙述与状态更新之间的职责边界。同时制定评估计划，对比该方案与直接使用大语言模型对话时的剧情矛盾和规则违反情况。"],
  },
  "Multi-View Football Foul Detection": {
    title: "多视角足球犯规检测", type: "计算机视觉课程项目 · 已实现", status: "已实现", tech: "Python, PyTorch, MViT-v2-S, 多视角视频, 姿态估计",
    description: ["构建回放复核流程，将足球犯规预测与同步多机位画面、可能发生接触的区域提示结合起来。", "单一回放视角可能遮挡关键接触。系统在多个视角上运行以 MViT-v2-S 为骨干的预训练 VARS 模型，预测犯规类型与严重程度，再结合姿态和运动线索高亮可能的接触区域。复核者可比较不同角度的同一时刻、慢放视频并导出标注结果。"],
    contributions: ["我整合了预训练推理流程、接触区域可视化、同步播放和标注导出。贡献在于复核流程及其视觉证据，而非新的基准成绩，也不替代裁判判断。"],
  },
  "Taking a Detour to Win: Strategic Blocking in LLM Agents": {
    title: "绕路取胜：大语言模型智能体的策略性阻挡", type: "智能体 AI 研究试验 · 团队项目", team: "与 Prakeerth Prasad 合作", status: "研究试验", tech: "强化学习, RAGEN, GRPO, LoRA, Qwen2.5",
    description: ["测试强化学习能否教会小型语言模型在网格竞赛中先绕路、阻挡对手，再返回目标。", "智能体与固定采用最短路径（BFS）的对手竞争。获胜策略可能需要先远离目标，切断对手路线。我们在 RAGEN 中使用 LoRA 和 GRPO 微调 Qwen2.5-0.5B-Instruct，从简单布局开始，逐步加入阻挡任务。", "在一张较短的开发地图上，策略胜场从训练前的 **1/50** 提升到课程训练后的 **46/50**。但在迁移评估中的镜像宽地图上为 **0/50**，因此尚不能证明稳健的迁移能力。"],
    contributions: ["我负责本地训练、检查点管理、适配器导出，以及迷宫和诊断任务上的策略评估。队友负责 Colab 迁移评估，并协助排查接口与依赖问题。"],
  },
};
const locations = { "University of Michigan": "密歇根大学", "Northwestern University": "西北大学" };
const linkLabels = { "Windows Build": "Windows 下载", "MacOS Build": "macOS 下载", "Play Online": "在线游玩", "Watch on YouTube": "在 YouTube 观看", "Watch the Trailer": "观看预告片", "How to Play": "玩法介绍", "Product Website": "项目网站", "GitHub Repository": "GitHub 仓库", "Project Poster": "项目海报" };
export function localizeProject(project, language) {
  if (language !== "zh") return project;
  return {
    ...project,
    ...projectTranslations[project.title],
    location: locations[project.location] || project.location,
    links: project.links?.map(link => ({ ...link, label: linkLabels[link.label] || link.label })),
    videos: project.videos?.map(video => ({ ...video, title: video.title === "Meal Logistics Planner demo" ? "多菜品烹饪规划器演示" : video.title })),
  };
}
