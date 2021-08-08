let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/program/react/track-it/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +13 App.js
badd +3 index.js
badd +7 pages/LoginPage.js
badd +1 components/Utility.js
badd +10 index.css
badd +9 pages/SignupPage.js
badd +23 shared/FirebaseInit.js
badd +4 components/Input.js
badd +24 pages/SignupPageDesktop.js
badd +10 pages/Home.js
badd +2 tests/Sign-in-up.test.js
badd +51 shared/Authentication.js
badd +8 pages/Dashboard.js
badd +1 ~/program/react/track-it/.env
badd +30 pages/LoginPageDesktop.js
badd +15 components/AuthProvider.js
badd +36 temp/firebase-temp.js
badd +10 shared/UserDatabase.js
argglobal
%argdel
edit shared/UserDatabase.js
argglobal
let s:l = 8 - ((7 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 8
normal! 0
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
