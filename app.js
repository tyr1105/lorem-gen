(function(){
'use strict';

// 经典假文素材
const LOREM = [
  '天地玄黄，宇宙洪荒。日月盈昃，辰宿列张。寒来暑往，秋收冬藏。闰余成岁，律吕调阳。云腾致雨，露结为霜。金生丽水，玉出昆冈。剑号巨阙，珠称夜光。果珍李柰，菜重芥姜。海咸河淡，鳞潜羽翔。',
  '龙师火帝，鸟官人皇。始制文字，乃服衣裳。推位让国，有虞陶唐。吊民伐罪，周发殷汤。坐朝问道，垂拱平章。爱育黎首，臣伏戎羌。遐迩一体，率宾归王。鸣凤在竹，白驹食场。化被草木，赖及万方。',
  '盖此身发，四大五常。恭惟鞠养，岂敢毁伤。女慕贞洁，男效才良。知过必改，得能莫忘。罔谈彼短，靡恃己长。信使可覆，器欲难量。墨悲丝染，诗赞羔羊。景行维贤，克念作圣。德建名立，形端表正。',
  '空谷传声，虚堂习听。祸因恶积，福缘善庆。尺璧非宝，寸阴是竞。资父事君，曰严与敬。孝当竭力，忠则尽命。临深履薄，夙兴温凊。似兰斯馨，如松之盛。川流不息，渊澄取映。容止若思，言辞安定。',
  '笃初诚美，慎终宜令。荣业所基，籍甚无竟。学优登仕，摄职从政。存以甘棠，去而益咏。乐殊贵贱，礼别尊卑。上和下睦，夫唱妇随。外受傅训，入奉母仪。诸姑伯叔，犹子比儿。孔怀兄弟，同气连枝。'
];

const POEMS = [
  '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
  '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
  '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
  '红豆生南国，春来发几枝。愿君多采撷，此物最相思。',
  '离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。',
  '千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。',
  '两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。',
  '明月几时有，把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。',
  '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。',
  '国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。烽火连三月，家书抵万金。白头搔更短，浑欲不胜簪。'
];

const TECH = [
  '随着人工智能技术的快速发展，深度学习模型在自然语言处理领域取得了突破性进展。大型语言模型通过海量文本数据的训练，展现出了惊人的文本理解和生成能力。',
  '云计算基础设施的不断完善为企业数字化转型提供了坚实的技术底座。容器化技术和微服务架构的广泛应用，使得应用部署和管理变得更加灵活高效。',
  '区块链技术通过去中心化的分布式账本机制，为数据安全和隐私保护提供了全新的解决方案。智能合约的自动执行特性大大降低了信任成本和交易摩擦。',
  '5G网络的商用部署为物联网设备的广泛连接奠定了基础。低延迟高带宽的网络特性使得远程医疗、自动驾驶等应用场景成为现实。',
  '数据驱动的决策模式正在重塑企业的运营方式。通过大数据分析和机器学习算法，企业能够更精准地预测市场趋势、优化资源配置、提升用户体验。',
  '边缘计算将计算能力推向网络边缘，有效降低了数据传输延迟。这一技术与人工智能的结合，催生了智能边缘计算的新范式，为实时数据处理提供了高效解决方案。'
];

const CHARS = '的一是不了人我在有他这为之大来以个中上们到说时地也子就道会那要下看天与能对将吃得面里又问很自己从她没重请被升色据些主诉新给位次教正业外老及那个如站方代话信命品世全情体管然本但法意行事相都理表现三同可工用通都量社者期其余当着本条系力果治理作合种相开成形自还内点由用面最事方运相最反复取展象它则争位段各重件系门经过能系外着政与合定过面作和进种行的度革手命都情这理机前建新当场民用化去部做合到量产意情民正次常给见被从将两间让才用新好只所制把较现表水化常表政区形步被强相决此组数着教展想被关气期件其将意进法表学种边四三电教指水革明次品真认你此化第合工只当它经府统条直拉门或意家系力收心先公应化化取组被教系高工正各被议于话从';

let currentMode = 'lorem';

function getPool() {
  switch(currentMode) {
    case 'lorem': return LOREM;
    case 'poem': return POEMS;
    case 'tech': return TECH;
    default: return null;
  }
}

function generateRandom(len) {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return result;
}

function generateParagraphs(n) {
  if (currentMode === 'random') {
    let r = [];
    for (let i = 0; i < n; i++) r.push(generateRandom(100 + Math.floor(Math.random()*100)));
    return r.join('\n\n');
  }
  const pool = getPool();
  let result = [];
  for (let i = 0; i < n; i++) result.push(pool[i % pool.length]);
  return result.join('\n\n');
}

function generateSentences(n) {
  if (currentMode === 'random') return generateRandom(n * 20);
  const pool = getPool();
  const all = pool.join('。').split('。').filter(s => s.trim());
  let result = [];
  for (let i = 0; i < n; i++) result.push(all[i % all.length]);
  return result.join('。') + '。';
}

function generateCharacters(n) {
  if (currentMode === 'random') return generateRandom(n);
  const pool = getPool();
  const all = pool.join('');
  let result = '';
  while (result.length < n) result += all;
  return result.substring(0, n);
}

function generate() {
  const type = document.getElementById('type-select').value;
  const amount = parseInt(document.getElementById('amount-input').value) || 3;
  let text;
  switch(type) {
    case 'paragraphs': text = generateParagraphs(amount); break;
    case 'sentences': text = generateSentences(amount); break;
    case 'characters': text = generateCharacters(amount); break;
  }
  document.getElementById('output-box').textContent = text;
  document.getElementById('char-count').textContent = text.length + ' 字';
}

function copyText() {
  const text = document.getElementById('output-box').textContent;
  if (!text || text === '点击"生成文本"开始...') return;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('btn-copy');
    btn.textContent = '✅ 已复制';
    setTimeout(() => btn.textContent = '📋 复制', 2000);
  });
}

// 事件绑定
document.getElementById('btn-gen').addEventListener('click', generate);
document.getElementById('btn-copy').addEventListener('click', copyText);
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentMode = this.dataset.mode;
  });
});

// 主题切换
const themeToggle = document.getElementById('theme-toggle');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeToggle.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}
themeToggle.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'light'));
const saved = localStorage.getItem('theme');
if (saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme:dark)').matches)) setTheme(true);

// 首次自动生成
generate();
})();
