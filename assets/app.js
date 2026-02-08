export function qs(sel, el=document){return el.querySelector(sel)}
export function qsa(sel, el=document){return Array.from(el.querySelectorAll(sel))}
export function setText(el, text){ if(!el) return; el.textContent = String(text ?? ''); }

export async function copyToClipboard(text){
  try{
    await navigator.clipboard.writeText(text);
    return true;
  }catch{
    const ta=document.createElement('textarea');
    ta.value=text;
    ta.style.position='fixed';
    ta.style.opacity='0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try{document.execCommand('copy'); return true;}catch{return false;}
    finally{document.body.removeChild(ta);}
  }
}

export function safeJsonParse(input){
  const s = String(input ?? '').trim();
  if(!s) return { ok:false, err:'입력이 비어있습니다.' };
  try{ return { ok:true, value: JSON.parse(s) }; }
  catch(e){ return { ok:false, err: e?.message ?? String(e) }; }
}

export function prettyJson(value, indent=2){
  return JSON.stringify(value, null, indent) + '\n';
}

export function minifyJson(value){
  return JSON.stringify(value) + '\n';
}
