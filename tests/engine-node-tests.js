const fs=require('fs'),vm=require('vm'),assert=require('assert');
const context={window:{}};vm.createContext(context);
vm.runInContext(fs.readFileSync('js/gameEngine.js','utf8'),context);
const Engine=context.window.PassaparolaEngine.Engine;
const q=(letter,id=letter)=>({id,letter,question:letter+' sorusu',acceptedAnswers:[letter],enabled:true});

{
  const e=new Engine();e.start([q('A'),q('B'),q('C')]);
  e.resolve('correct');const b=e.current;e.resolve('wrong');
  assert.equal(e.current,b,'yanlış işareti gösterilirken soru değişmemeli');
  assert.equal(e.status.B,'wrong');assert.equal(e.wrong,1);
  e.restartRound();assert.equal(e.current.letter,'A');assert.equal(e.score,0);
  assert.equal(e.questions[1].id,b.id,'soru seçimi değişmemeli');
}
{
  const e=new Engine();e.start([q('A'),q('B'),q('C')]);
  e.resolve('correct');e.resolve('passed');e.resolve('correct');
  assert.equal(e.current.letter,'B');assert.equal(e.status.B,'active');
  e.resolve('correct');assert.equal(e.running,false);
}
{
  const e=new Engine();e.start([q('A','a1'),q('A','a2'),q('B')]);
  assert.equal(e.questions.length,2,'harf başına yalnızca bir aktif soru alınmalı');
  assert.equal(e.current.id,'a1');
}
console.log('3/3 oyun motoru testi başarılı');
