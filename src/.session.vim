let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
<<<<<<< HEAD
cd ~/program/react/track-it/src
=======
cd ~/program/react/hackclubCucek/src
>>>>>>> bb8fd011057f72249670797248c785119ac1ec43
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
<<<<<<< HEAD
badd +11 App.js
badd +3 index.js
badd +7 pages/LoginPage.js
badd +1 components/Utility.js
badd +10 index.css
badd +9 pages/SignupPage.js
badd +14 shared/FirebaseInit.js
badd +31 components/Input.js
badd +35 pages/SignupPageDesktop.js
badd +8 pages/Home.js
badd +15 tests/Sign-in-up.test.js
badd +47 shared/Authentication.js
badd +7 pages/Dashboard.js
argglobal
%argdel
edit pages/Dashboard.js
argglobal
balt shared/Authentication.js
let s:l = 9 - ((8 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 9
=======
badd +33 pages/index.js
badd +67 components/seo.js
badd +9 pages/page-2.js
badd +5 styles/Colors.js
badd +6 pages/404.js
badd +36 components/Header.js
badd +113 components/HeaderDesktop.js
badd +3 styles/Global.css
badd +8 components/Utility.js
badd +26 components/mainPage/MainPageContentDesktop.js
badd +31 components/mainPage/MainPageExtras.js
badd +44 components/mainPage/TitleWithRect.js
badd +42 components/mainPage/ThingsWeDo.js
badd +64 components/mainPage/OurInitiatives.js
badd +59 components/mainPage/UpcomingEvents.js
badd +97 components/mainPage/GalleryImages.js
badd +25 components/FooterDesktop.js
argglobal
%argdel
edit pages/index.js
argglobal
balt components/HeaderDesktop.js
let s:l = 17 - ((16 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 17
>>>>>>> bb8fd011057f72249670797248c785119ac1ec43
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
