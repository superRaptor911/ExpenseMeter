let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/program/react/vite/expenzMeter/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +30 App.jsx
badd +1 ~/.config/nvim/UltiSnips/javascriptreact.snippets
badd +15 store.js
badd +20 pages/Login.jsx
badd +5 Routes.js
badd +6 pages/Home.jsx
badd +57 api/api.js
badd +21 pages/Dashboard.jsx
badd +15 pages/Transactions.jsx
badd +3 components/transactions/TransItem.jsx
badd +7 components/transactions/TransList.jsx
badd +15 components/transactions/AddTrans.jsx
argglobal
%argdel
edit components/transactions/AddTrans.jsx
argglobal
balt store.js
let s:l = 15 - ((0 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 15
normal! 024|
lcd ~/program/react/vite/expenzMeter/src
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0&& getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
