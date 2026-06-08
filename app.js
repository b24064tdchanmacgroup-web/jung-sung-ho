// ==========================================================================
// 2026 FIFA World Cup Groups Database
// ==========================================================================
const GROUPS_DATA = [
  {
    id: 'A',
    name: 'A조',
    icon: '🅰️',
    teams: [
      { name: '멕시코', flag: '🇲🇽', code: 'MEX' },
      { name: '남아공', flag: '🇿🇦', code: 'RSA' },
      { name: '대한민국', flag: '🇰🇷', code: 'KOR' },
      { name: '체코', flag: '🇨🇿', code: 'CZE' }
    ]
  },
  {
    id: 'B',
    name: 'B조',
    icon: '🅱️',
    teams: [
      { name: '캐나다', flag: '🇨🇦', code: 'CAN' },
      { name: '보스니아', flag: '🇧🇦', code: 'BIH' },
      { name: '카타르', flag: '🇶🇦', code: 'QAT' },
      { name: '스위스', flag: '🇨🇭', code: 'SUI' }
    ]
  },
  {
    id: 'C',
    name: 'C조',
    icon: '🇨',
    teams: [
      { name: '브라질', flag: '🇧🇷', code: 'BRA' },
      { name: '모로코', flag: '🇲🇦', code: 'MAR' },
      { name: '아이티', flag: '🇭🇹', code: 'HAI' },
      { name: '스코틀랜드', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', code: 'SCO' }
    ]
  },
  {
    id: 'D',
    name: 'D조',
    icon: '🇩',
    teams: [
      { name: '미국', flag: '🇺🇸', code: 'USA' },
      { name: '파라과이', flag: '🇵🇾', code: 'PAR' },
      { name: '호주', flag: '🇦🇺', code: 'AUS' },
      { name: '튀르키예', flag: '🇹🇷', code: 'TUR' }
    ]
  },
  {
    id: 'E',
    name: 'E조',
    icon: '🇪',
    teams: [
      { name: '독일', flag: '🇩🇪', code: 'GER' },
      { name: '퀴라소', flag: '🇨🇼', code: 'CUW' },
      { name: '코트디부아르', flag: '🇨🇮', code: 'CIV' },
      { name: '에콰도르', flag: '🇪🇨', code: 'ECU' }
    ]
  },
  {
    id: 'F',
    name: 'F조',
    icon: '🇫',
    teams: [
      { name: '네덜란드', flag: '🇳🇱', code: 'NED' },
      { name: '일본', flag: '🇯🇵', code: 'JPN' },
      { name: '튀니지', flag: '🇹🇳', code: 'TUN' },
      { name: '스웨덴', flag: '🇸🇪', code: 'SWE' }
    ]
  },
  {
    id: 'G',
    name: 'G조',
    icon: '🇬',
    teams: [
      { name: '벨기에', flag: '🇧🇪', code: 'BEL' },
      { name: '이집트', flag: '🇪🇬', code: 'EGY' },
      { name: '이란', flag: '🇮🇷', code: 'IRN' },
      { name: '뉴질랜드', flag: '🇳🇿', code: 'NZL' }
    ]
  },
  {
    id: 'H',
    name: 'H조',
    icon: '🇭',
    teams: [
      { name: '스페인', flag: '🇪🇸', code: 'ESP' },
      { name: '카보베르데', flag: '🇨🇻', code: 'CPV' },
      { name: '사우디', flag: '🇸🇦', code: 'KSA' },
      { name: '우루과이', flag: '🇺🇾', code: 'URU' }
    ]
  },
  {
    id: 'I',
    name: 'I조',
    icon: 'ℹ️',
    teams: [
      { name: '프랑스', flag: '🇫🇷', code: 'FRA' },
      { name: '세네갈', flag: '🇸🇳', code: 'SEN' },
      { name: '노르웨이', flag: '🇳🇴', code: 'NOR' },
      { name: '이라크', flag: '🇮🇶', code: 'IRQ' }
    ]
  },
  {
    id: 'J',
    name: 'J조',
    icon: '🇯',
    teams: [
      { name: '아르헨티나', flag: '🇦🇷', code: 'ARG' },
      { name: '알제리', flag: '🇩🇿', code: 'ALG' },
      { name: '오스트리아', flag: '🇦🇹', code: 'AUT' },
      { name: '요르단', flag: '🇯🇴', code: 'JOR' }
    ]
  },
  {
    id: 'K',
    name: 'K조',
    icon: '🇰',
    teams: [
      { name: '포르투갈', flag: '🇵🇹', code: 'POR' },
      { name: '우즈벡', flag: '🇺🇿', code: 'UZB' },
      { name: '콜롬비아', flag: '🇨🇴', code: 'COL' },
      { name: '콩고공화국', flag: '🇨🇩', code: 'COD' }
    ]
  },
  {
    id: 'L',
    name: 'L조',
    icon: '🇱',
    teams: [
      { name: '잉글랜드', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', code: 'ENG' },
      { name: '크로아티아', flag: '🇭🇷', code: 'CRO' },
      { name: '가나', flag: '🇬🇭', code: 'GHA' },
      { name: '파나마', flag: '🇵🇦', code: 'PAN' }
    ]
  }
];

const DEFAULT_PARTICIPANTS = ["정성호", "정누리", "김제식", "홍형권", "박태홍", "최성원", "송경수"];

// ==========================================================================
// Application State
// ==========================================================================
let participants = [...DEFAULT_PARTICIPANTS];
let activeParticipant = "";
let predictions = {}; // Format: { "이름": [ [0, 2], [1, 3], ... 12 groups ] }
let officialResults = Array(12).fill(null).map(() => []); // Official advancing teams

// ==========================================================================
// Init & Loading State
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  renderParticipants();
  renderGroups();
  renderOfficialResultsEditor();
  parseUrlParams();
  updateConsensusDashboard();
  updateLeaderboard();
  
  // Set default active participant
  if (participants.length > 0) {
    selectParticipant(participants[0]);
  }
});

// Load state from localStorage
function loadData() {
  const savedPicks = localStorage.getItem("worldcup2026_picks");
  const savedParticipants = localStorage.getItem("worldcup2026_participants");
  const savedResults = localStorage.getItem("worldcup2026_official_results");

  if (savedParticipants) {
    participants = JSON.parse(savedParticipants);
  }
  
  if (savedPicks) {
    predictions = JSON.parse(savedPicks);
  } else {
    // Initialize empty predictions for default participants
    participants.forEach(p => {
      predictions[p] = Array(12).fill(null).map(() => []);
    });
  }
  
  if (savedResults) {
    officialResults = JSON.parse(savedResults);
  }
}

// Save state to localStorage
function saveData() {
  localStorage.setItem("worldcup2026_picks", JSON.stringify(predictions));
  localStorage.setItem("worldcup2026_participants", JSON.stringify(participants));
  localStorage.setItem("worldcup2026_official_results", JSON.stringify(officialResults));
}

// ==========================================================================
// URL Parsing (Importing Predictions)
// ==========================================================================
function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const nameParam = params.get("name");
  const picksParam = params.get("picks");
  const groupDataParam = params.get("group_data");

  let importedCount = 0;
  let importedNames = [];

  // 1. Handle group data parameter (multi-person sync)
  if (groupDataParam) {
    try {
      const parts = groupDataParam.split("|");
      parts.forEach(part => {
        const subParts = part.split(":");
        if (subParts.length === 2) {
          const importedName = decodeURIComponent(subParts[0]).trim();
          const picksCode = subParts[1].trim();
          const decodedPicks = decodePicks(picksCode);
          
          if (importedName && decodedPicks) {
            if (!participants.includes(importedName)) {
              participants.push(importedName);
            }
            predictions[importedName] = decodedPicks;
            if (!importedNames.includes(importedName)) {
              importedNames.push(importedName);
            }
            importedCount++;
          }
        }
      });
    } catch (e) {
      console.error("Group data parse error", e);
    }
  }

  // 2. Handle single person parameter (backwards compatibility)
  if (nameParam && picksParam) {
    const importedName = nameParam.trim();
    if (!importedNames.includes(importedName)) {
      const decodedPicks = decodePicks(picksParam);
      if (decodedPicks) {
        if (!participants.includes(importedName)) {
          participants.push(importedName);
        }
        predictions[importedName] = decodedPicks;
        importedNames.push(importedName);
        importedCount++;
        // Select this person if imported individually
        selectParticipant(importedName);
      }
    }
  }

  if (importedCount > 0) {
    saveData();
    renderParticipants();
    
    if (importedNames.length === 1) {
      showToast(`🎉 ${importedNames[0]}님의 예측 데이터가 등록되었습니다!`);
      selectParticipant(importedNames[0]);
    } else {
      showToast(`🎉 ${importedNames.length}명의 예측 데이터가 동기화되었습니다! (${importedNames.join(", ")})`);
    }
    
    // Switch to dashboard tab to see comparison
    switchTab('comparison');

    // Clear query params so refresh doesn't prompt again
    const cleanUrl = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, cleanUrl);
  }
}

// ==========================================================================
// Tab Switching Layout
// ==========================================================================
function switchTab(tabId) {
  // Update nav buttons
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.outerHTML.includes(tabId)) {
      btn.classList.add("active");
    }
  });

  // Toggle sections
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(content => {
    content.classList.remove("active");
  });
  
  const targetContent = document.getElementById(`tab-${tabId}`);
  if (targetContent) {
    targetContent.classList.add("active");
  }

  // Update specific tab content on enter
  if (tabId === 'comparison') {
    renderComparisonMatrix();
    updateConsensusDashboard();
  } else if (tabId === 'leaderboard') {
    updateLeaderboard();
    renderOfficialResultsEditor();
  }

  // Toggle floating bottom bar
  const stickyBar = document.getElementById("sticky-bar");
  if (tabId === 'creator') {
    stickyBar.style.display = "flex";
  } else {
    stickyBar.style.display = "none";
  }
}

// ==========================================================================
// Participant Management
// ==========================================================================
function renderParticipants() {
  const container = document.getElementById("participant-list");
  container.innerHTML = "";

  participants.forEach(p => {
    const tag = document.createElement("div");
    tag.className = `participant-tag ${p === activeParticipant ? 'active' : ''}`;
    tag.innerText = p;
    tag.onclick = () => selectParticipant(p);
    container.appendChild(tag);
  });

  // Add "+" button
  const addBtn = document.createElement("div");
  addBtn.className = "participant-tag add-btn";
  addBtn.innerText = "➕ 직접 추가";
  addBtn.onclick = () => {
    const inputContainer = document.getElementById("custom-name-container");
    inputContainer.style.display = inputContainer.style.display === "none" ? "flex" : "none";
    if (inputContainer.style.display === "flex") {
      document.getElementById("custom-name").focus();
    }
  };
  container.appendChild(addBtn);
}

function selectParticipant(name) {
  activeParticipant = name;
  
  // Re-render tags
  document.querySelectorAll(".participant-tag").forEach(tag => {
    if (tag.innerText === name) {
      tag.classList.add("active");
    } else {
      tag.classList.remove("active");
    }
  });

  // Initialize empty prediction arrays if they don't exist
  if (!predictions[name]) {
    predictions[name] = Array(12).fill(null).map(() => []);
  }

  // Hide input if active participant is selected
  document.getElementById("custom-name-container").style.display = "none";

  // Re-render picks grid for this user
  updateGroupsPicksDisplay();
  updateProgressBadge();
  updateStickyBar();
}

function saveCustomName() {
  const input = document.getElementById("custom-name");
  const name = input.value.trim();
  
  if (!name) {
    showToast("이름을 입력해주세요.");
    return;
  }

  if (participants.includes(name)) {
    showToast("이미 등록된 이름입니다.");
    selectParticipant(name);
    return;
  }

  participants.push(name);
  predictions[name] = Array(12).fill(null).map(() => []);
  saveData();
  
  renderParticipants();
  selectParticipant(name);
  
  input.value = "";
  document.getElementById("custom-name-container").style.display = "none";
  showToast(`👤 ${name}님이 추가되었습니다.`);
}

// ==========================================================================
// Prediction Selection (Tab 1)
// ==========================================================================
function renderGroups() {
  const container = document.getElementById("groups-grid");
  container.innerHTML = "";

  GROUPS_DATA.forEach((group, gIndex) => {
    const card = document.createElement("div");
    card.className = "group-card";
    card.id = `group-card-${group.id}`;

    // Card Header
    const header = document.createElement("div");
    header.className = "group-header";
    
    const name = document.createElement("div");
    name.className = "group-name";
    name.innerHTML = `${group.icon} ${group.name}`;
    
    const status = document.createElement("span");
    status.className = "group-status-badge";
    status.id = `group-status-${group.id}`;
    status.innerText = "2~3개 선택";

    header.appendChild(name);
    header.appendChild(status);
    card.appendChild(header);

    // Teams List (2x2)
    const list = document.createElement("div");
    list.className = "teams-list";

    group.teams.forEach((team, tIndex) => {
      const item = document.createElement("div");
      item.className = "team-item";
      item.id = `team-item-${group.id}-${tIndex}`;
      item.onclick = () => toggleTeamSelection(gIndex, tIndex);

      const flag = document.createElement("span");
      flag.className = "team-flag";
      flag.innerText = team.flag;

      const teamName = document.createElement("span");
      teamName.className = "team-name";
      teamName.innerText = team.name;

      const check = document.createElement("span");
      check.className = "team-check";

      item.appendChild(flag);
      item.appendChild(teamName);
      item.appendChild(check);
      list.appendChild(item);
    });

    card.appendChild(list);
    container.appendChild(card);
  });
}

function toggleTeamSelection(gIndex, tIndex) {
  if (!activeParticipant) {
    showToast("인물(이름)을 먼저 선택해주세요.");
    // Focus or scroll to participant list
    document.getElementById("participant-list").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }

  const groupPicks = predictions[activeParticipant][gIndex];
  const foundIndex = groupPicks.indexOf(tIndex);

  if (foundIndex > -1) {
    // Deselect
    groupPicks.splice(foundIndex, 1);
  } else {
    // Select
    if (groupPicks.length >= 3) {
      showToast("⚠️ 조별 최대 3개까지만 선택할 수 있습니다.");
      return;
    }
    groupPicks.push(tIndex);
    groupPicks.sort();
  }

  saveData();
  updateGroupDisplay(gIndex);
  updateProgressBadge();
  updateStickyBar();
}

function updateGroupsPicksDisplay() {
  for (let gIndex = 0; gIndex < 12; gIndex++) {
    updateGroupDisplay(gIndex);
  }
}

function updateGroupDisplay(gIndex) {
  const group = GROUPS_DATA[gIndex];
  const userPicks = activeParticipant ? predictions[activeParticipant][gIndex] : [];
  
  group.teams.forEach((_, tIndex) => {
    const element = document.getElementById(`team-item-${group.id}-${tIndex}`);
    if (element) {
      if (userPicks.includes(tIndex)) {
        element.classList.add("selected");
      } else {
        element.classList.remove("selected");
      }
    }
  });

  const statusBadge = document.getElementById(`group-status-${group.id}`);
  if (statusBadge) {
    const pickCount = userPicks.length;
    if (pickCount >= 2 && pickCount <= 3) {
      statusBadge.innerText = `✅ 완료 (${pickCount})`;
      statusBadge.classList.add("valid");
    } else {
      statusBadge.innerText = `${pickCount}개 선택됨`;
      statusBadge.classList.remove("valid");
    }
  }
}

function getParticipantProgress(name) {
  if (!predictions[name]) return 0;
  return predictions[name].filter(picks => picks.length >= 2 && picks.length <= 3).length;
}

function getTotalPicksCount(name) {
  if (!predictions[name]) return 0;
  return predictions[name].reduce((sum, picks) => sum + picks.length, 0);
}

function updateProgressBadge() {
  const progress = activeParticipant ? getParticipantProgress(activeParticipant) : 0;
  const totalPicks = activeParticipant ? getTotalPicksCount(activeParticipant) : 0;
  const badge = document.getElementById("overall-progress");
  
  if (progress === 12 && totalPicks === 32) {
    badge.classList.add("complete");
    badge.innerText = `🎉 완료 (32개 선택)`;
  } else {
    badge.classList.remove("complete");
    badge.innerText = `선택: ${totalPicks}/32개 (완료 조: ${progress}/12)`;
  }
}

function updateStickyBar() {
  const nameEl = document.getElementById("sticky-username");
  const progressEl = document.getElementById("sticky-progress");
  
  if (activeParticipant) {
    nameEl.innerText = `${activeParticipant}의 예측`;
    const progress = getParticipantProgress(activeParticipant);
    const totalPicks = getTotalPicksCount(activeParticipant);
    if (progress === 12 && totalPicks === 32) {
      progressEl.innerText = `🎉 완료 (32개 선택)`;
    } else {
      progressEl.innerText = `선택: ${totalPicks}/32개 (조 완료: ${progress}/12)`;
    }
  } else {
    nameEl.innerText = "선택된 인물 없음";
    progressEl.innerText = "0 / 32개 선택";
  }
}

// ==========================================================================
// Comparison Dashboard Logic (Tab 2)
// ==========================================================================
function renderComparisonMatrix() {
  const headerRow = document.getElementById("matrix-header");
  const body = document.getElementById("matrix-body");

  // Reset columns
  headerRow.innerHTML = "<th>참여자</th>";
  GROUPS_DATA.forEach(g => {
    const th = document.createElement("th");
    th.innerText = g.id;
    headerRow.appendChild(th);
  });

  // Populate rows
  body.innerHTML = "";
  participants.forEach(pName => {
    const row = document.createElement("tr");
    
    const nameCell = document.createElement("td");
    nameCell.innerHTML = `<strong>${pName}</strong>`;
    row.appendChild(nameCell);

    const userPicks = predictions[pName] || Array(12).fill(null).map(() => []);

    GROUPS_DATA.forEach((group, gIndex) => {
      const cell = document.createElement("td");
      cell.className = "table-cell-picks";
      
      const groupPicks = userPicks[gIndex] || [];
      
      if (groupPicks.length === 0) {
        cell.innerHTML = `<span style="color: var(--notion-text-light);">미작성</span>`;
      } else {
        groupPicks.forEach(tIndex => {
          const team = group.teams[tIndex];
          if (team) {
            const isOfficial = officialResults[gIndex].includes(tIndex);
            const isOfficialFinished = officialResults[gIndex].length >= 2;
            
            let statusClass = "";
            if (isOfficialFinished) {
              statusClass = isOfficial ? "correct" : "incorrect";
            }
            
            const pill = document.createElement("span");
            pill.className = `table-flag-pill ${statusClass}`;
            pill.innerHTML = `${team.flag} ${team.name}`;
            cell.appendChild(pill);
          }
        });
      }
      
      row.appendChild(cell);
    });

    body.appendChild(row);
  });
}

function updateConsensusDashboard() {
  const container = document.getElementById("consensus-container");
  container.innerHTML = "";

  GROUPS_DATA.forEach((group, gIndex) => {
    const card = document.createElement("div");
    card.className = "consensus-card";
    
    const title = document.createElement("div");
    title.className = "consensus-group-name";
    title.innerText = `${group.icon} ${group.name} 집계`;
    card.appendChild(title);

    // Count votes for each team in the group
    const votes = Array(4).fill(0);
    let totalPicksInGroup = 0;
    
    participants.forEach(pName => {
      const picks = predictions[pName] ? predictions[pName][gIndex] : [];
      picks.forEach(tIndex => {
        votes[tIndex]++;
        totalPicksInGroup++;
      });
    });

    // Create ranked team list for the group
    const teamStats = group.teams.map((team, tIndex) => ({
      name: team.name,
      flag: team.flag,
      votes: votes[tIndex]
    }));
    
    // Sort teams by vote count descending
    teamStats.sort((a, b) => b.votes - a.votes);

    teamStats.forEach(stat => {
      const row = document.createElement("div");
      row.className = "consensus-team-row";

      const info = document.createElement("div");
      info.className = "consensus-team-info";
      info.innerHTML = `<span>${stat.flag}</span> <span>${stat.name}</span>`;

      const voteBadge = document.createElement("span");
      voteBadge.className = `consensus-votes ${stat.votes === 0 ? 'zero' : ''}`;
      voteBadge.innerText = `${stat.votes}표`;

      row.appendChild(info);
      row.appendChild(voteBadge);
      card.appendChild(row);
    });

    container.appendChild(card);
  });
}

// ==========================================================================
// Leaderboard & Result Validation (Tab 3)
// ==========================================================================
function updateLeaderboard() {
  const body = document.getElementById("leaderboard-body");
  body.innerHTML = "";

  const scores = participants.map(pName => {
    let score = 0;
    let totalPicks = 0;
    const userPicks = predictions[pName] || [];

    userPicks.forEach((groupPicks, gIndex) => {
      totalPicks += groupPicks.length;
      groupPicks.forEach(tIndex => {
        // If this team is in the official results list for this group
        if (officialResults[gIndex].includes(tIndex)) {
          score++;
        }
      });
    });

    const progress = getParticipantProgress(pName);

    return {
      name: pName,
      score: score,
      progress: progress,
      completed: progress === 12
    };
  });

  // Sort scores descending, then by completion status
  scores.sort((a, b) => b.score - a.score);

  if (scores.length === 0) {
    body.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--notion-text-muted);">등록된 참여자가 없습니다.</td></tr>`;
    return;
  }

  scores.forEach((s, idx) => {
    const row = document.createElement("tr");

    // Rank cell
    const rankCell = document.createElement("td");
    if (idx === 0 && s.score > 0) {
      rankCell.innerHTML = `<span class="rank-first">🥇 1위</span>`;
    } else {
      rankCell.innerText = `${idx + 1}위`;
    }
    row.appendChild(rankCell);

    // Name cell
    const nameCell = document.createElement("td");
    nameCell.innerHTML = `<strong>${s.name}</strong>`;
    row.appendChild(nameCell);

    // Score cell
    const scoreCell = document.createElement("td");
    scoreCell.innerHTML = `<span style="font-weight: 700; color: #2383e2; font-size: 16px;">${s.score}</span> / 32`;
    row.appendChild(scoreCell);

    // Status cell
    const statusCell = document.createElement("td");
    if (s.completed) {
      statusCell.innerHTML = `<span style="color: var(--notion-green-text); font-weight: 500;">✓ 작성 완료</span>`;
    } else {
      statusCell.innerHTML = `<span style="color: var(--notion-text-light);">${s.progress}/12 작성중</span>`;
    }
    row.appendChild(statusCell);

    body.appendChild(row);
  });
}

function renderOfficialResultsEditor() {
  const container = document.getElementById("official-results-grid");
  container.innerHTML = "";

  GROUPS_DATA.forEach((group, gIndex) => {
    const card = document.createElement("div");
    card.className = "group-card";

    // Card Header
    const header = document.createElement("div");
    header.className = "group-header";
    
    const name = document.createElement("div");
    name.className = "group-name";
    name.innerHTML = `${group.icon} ${group.name} 진출팀`;
    
    const status = document.createElement("span");
    status.className = "group-status-badge";
    status.id = `official-status-${group.id}`;
    
    const currentResults = officialResults[gIndex] || [];
    if (currentResults.length >= 2 && currentResults.length <= 3) {
      status.innerText = `결정됨 (${currentResults.length})`;
      status.classList.add("valid");
    } else {
      status.innerText = `${currentResults.length}개 선택`;
      status.classList.remove("valid");
    }

    header.appendChild(name);
    header.appendChild(status);
    card.appendChild(header);

    // Teams List
    const list = document.createElement("div");
    list.className = "teams-list";

    group.teams.forEach((team, tIndex) => {
      const item = document.createElement("div");
      item.className = `team-item ${currentResults.includes(tIndex) ? 'selected' : ''}`;
      item.onclick = () => toggleOfficialResult(gIndex, tIndex);

      const flag = document.createElement("span");
      flag.className = "team-flag";
      flag.innerText = team.flag;

      const teamName = document.createElement("span");
      teamName.className = "team-name";
      teamName.innerText = team.name;

      const check = document.createElement("span");
      check.className = "team-check";

      item.appendChild(flag);
      item.appendChild(teamName);
      item.appendChild(check);
      list.appendChild(item);
    });

    card.appendChild(list);
    container.appendChild(card);
  });
}

function toggleOfficialResult(gIndex, tIndex) {
  const currentGroupResults = officialResults[gIndex];
  const foundIndex = currentGroupResults.indexOf(tIndex);

  if (foundIndex > -1) {
    currentGroupResults.splice(foundIndex, 1);
  } else {
    if (currentGroupResults.length >= 3) {
      showToast("⚠️ 조별 진출국은 최대 3개까지만 입력할 수 있습니다.");
      return;
    }
    currentGroupResults.push(tIndex);
    currentGroupResults.sort();
  }

  saveData();
  renderOfficialResultsEditor();
  updateLeaderboard();
}

function resetOfficialResults() {
  if (confirm("실제 32강 진출 결과를 모두 지우고 초기화하시겠습니까?")) {
    officialResults = Array(12).fill(null).map(() => []);
    saveData();
    renderOfficialResultsEditor();
    updateLeaderboard();
    showToast("🧹 진출국 결과가 초기화되었습니다.");
  }
}

// ==========================================================================
// Prediction Sharing Encoding & Decoding (Bitmask hex compression)
// ==========================================================================
function encodePicks(userPicks) {
  if (!userPicks || userPicks.length !== 12) return "";
  
  let hexString = "";
  for (let g = 0; g < 12; g++) {
    const picks = userPicks[g] || [];
    let mask = 0;
    picks.forEach(tIndex => {
      mask |= (1 << tIndex);
    });
    hexString += mask.toString(16);
  }
  return hexString;
}

function decodePicks(hexString) {
  if (!hexString || hexString.length !== 12) return null;

  const userPicks = [];
  try {
    for (let g = 0; g < 12; g++) {
      const char = hexString[g];
      const mask = parseInt(char, 16);
      
      if (isNaN(mask) || mask < 0 || mask > 15) {
        return null; // Invalid character
      }

      const groupPicks = [];
      for (let i = 0; i < 4; i++) {
        if ((mask & (1 << i)) !== 0) {
          groupPicks.push(i);
        }
      }
      userPicks.push(groupPicks);
    }
    return userPicks;
  } catch (e) {
    return null;
  }
}

// ==========================================================================
// Sharing Trigger & Clipboard Functions
// ==========================================================================
function encodeGroupData() {
  const parts = [];
  participants.forEach(pName => {
    const picks = predictions[pName];
    // Check if they have at least one group with selections
    const hasPicks = picks && picks.some(g => g.length > 0);
    if (hasPicks) {
      const picksCode = encodePicks(picks);
      if (picksCode) {
        parts.push(`${encodeURIComponent(pName)}:${picksCode}`);
      }
    }
  });
  return parts.join("|");
}

async function sharePredictions() {
  if (!activeParticipant) {
    showToast("인물(이름)을 먼저 선택해주세요.");
    return;
  }
  
  const progress = getParticipantProgress(activeParticipant);
  const totalPicks = getTotalPicksCount(activeParticipant);
  if (progress < 12 || totalPicks !== 32) {
    showToast(`⚠️ 각 조 2~3개씩, 총 32개 국가를 선택해야 합니다. (현재: ${totalPicks}개 선택됨, 완료 조: ${progress}/12)`);
    return;
  }

  const picksCode = encodePicks(predictions[activeParticipant]);
  const groupDataCode = encodeGroupData();
  const baseUrl = window.location.href.split('?')[0];
  const shareUrl = `${baseUrl}?name=${encodeURIComponent(activeParticipant)}&picks=${picksCode}&group_data=${groupDataCode}`;
  
  // Format predictions output for clean text copy
  let detailsText = "";
  GROUPS_DATA.forEach((group, gIndex) => {
    const picks = predictions[activeParticipant][gIndex] || [];
    const teamNames = picks.map(idx => `${group.teams[idx].flag} ${group.teams[idx].name}`).join(", ");
    detailsText += `${group.id}조: ${teamNames}\n`;
  });

  const shareText = `🏆 볼알 2026년 북중미 월드컵 쏜다 쏜다 쏜다 🏆\n\n[${activeParticipant}의 32강 예측 결과]\n${detailsText}\n👉 이 링크를 눌러 친구들의 예측을 모아보고 내 예측도 작성해보세요!\n${shareUrl}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: '볼알 2026년 북중미 월드컵 쏜다 쏜다 쏜다',
        text: `🏆 볼알 2026년 북중미 월드컵 쏜다 쏜다 쏜다 (${activeParticipant})`,
        url: shareUrl
      });
      showToast("공유 창이 열렸습니다! 카톡에 공유하세요.");
    } catch (err) {
      if (err.name !== 'AbortError') {
        copyToClipboard(shareText);
      }
    }
  } else {
    copyToClipboard(shareText);
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast("📋 예측 결과와 링크가 클립보드에 복사되었습니다! 카톡방에 붙여넣으세요!"))
      .catch(() => fallbackCopyToClipboard(text));
  } else {
    fallbackCopyToClipboard(text);
  }
}

function fallbackCopyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast("📋 예측 결과와 링크가 클립보드에 복사되었습니다! 카톡방에 붙여넣으세요!");
  } catch (err) {
    showToast("⚠️ 링크 복사에 실패했습니다. 직접 주소를 복사해주세요.");
  }
  document.body.removeChild(textArea);
}

function importFromInput() {
  const input = document.getElementById("import-link-input");
  const value = input.value.trim();

  if (!value) {
    showToast("링크나 코드를 입력해주세요.");
    return;
  }

  let name = "";
  let picks = "";

  // Check if it's a full URL or just a query string
  try {
    if (value.includes("?")) {
      const urlParams = new URLSearchParams(value.substring(value.indexOf("?")));
      name = urlParams.get("name");
      picks = urlParams.get("picks");
    } else {
      // Check if they typed a code directly
      picks = value;
      name = prompt("등록할 참여자의 이름을 입력하세요:");
    }
  } catch (e) {
    showToast("⚠️ 올바른 형식이 아닙니다.");
    return;
  }

  if (name && picks) {
    const decoded = decodePicks(picks);
    if (decoded) {
      name = name.trim();
      if (!participants.includes(name)) {
        participants.push(name);
        renderParticipants();
      }
      predictions[name] = decoded;
      saveData();
      
      selectParticipant(name);
      showToast(`🎉 ${name}님의 예측이 수동으로 등록되었습니다!`);
      input.value = "";
      switchTab('comparison');
    } else {
      showToast("⚠️ 예측 코드가 올바르지 않습니다.");
    }
  } else {
    showToast("⚠️ 이름이나 예측 코드를 찾을 수 없습니다.");
  }
}

// ==========================================================================
// Toast UI Helper
// ==========================================================================
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");
  
  toastText.innerText = message;
  toast.classList.add("show");
  
  // Auto hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
