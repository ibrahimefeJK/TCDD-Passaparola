(function(g){'use strict';var KEY='tcdd_passaparola_v1';
function clone(x){return JSON.parse(JSON.stringify(x));} function fresh(){return{version:2,settings:clone(g.PassaparolaDefaults.settings),questions:clone(g.PassaparolaDefaults.questions),leaderboard:[]};}
function valid(d){return d&&(d.version===1||d.version===2)&&d.settings&&Array.isArray(d.questions)&&Array.isArray(d.leaderboard);}
function normalize(d){var base=fresh(),seen={},active={};base.settings=Object.assign(base.settings,d.settings||{});base.questions=(d.questions||[]).filter(function(q){return g.PassaparolaDefaults.letters.indexOf(q.letter)>=0;}).map(function(q,i){var id=String(q.id||q.letter+'_'+i);while(seen[id])id=q.letter+'_'+Date.now()+'_'+i;seen[id]=true;var enabled=q.enabled===true&&!active[q.letter];if(enabled)active[q.letter]=true;return{id:id,letter:q.letter,question:String(q.question||''),acceptedAnswers:Array.isArray(q.acceptedAnswers)?q.acceptedAnswers.map(String).filter(function(a){return a.trim();}):[],enabled:enabled};});g.PassaparolaDefaults.questions.forEach(function(q){if(!base.questions.some(function(x){return x.letter===q.letter;}))base.questions.push(clone(q));});base.leaderboard=d.leaderboard.slice();return base;}
function load(){try{var raw=localStorage.getItem(KEY);if(!raw)return fresh();var d=JSON.parse(raw);return valid(d)?normalize(d):fresh();}catch(e){return fresh();}}
function save(d){try{localStorage.setItem(KEY,JSON.stringify(d));return true;}catch(e){return false;}}
g.PassaparolaStorage={load:load,save:save,fresh:fresh,valid:valid,normalize:normalize,key:KEY};
})(window);
