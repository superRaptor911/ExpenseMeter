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
badd +44 App.jsx
badd +55 store.js
badd +40 pages/Login.jsx
badd +7 Routes.js
badd +6 pages/Home.jsx
badd +160 api/api.js
badd +21 pages/Dashboard.jsx
badd +12 pages/Transactions.jsx
badd +24 components/transactions/TransItem.jsx
badd +16 components/transactions/TransList.jsx
badd +97 components/transactions/AddTrans.jsx
badd +8 index.css
badd +12 components/transactions/Today.jsx
badd +1 components/transactions/ThisWeek.jsx
badd +11 components/transactions/ThisMonth.jsx
badd +17 pages/Categories.jsx
badd +21 components/categories/ListCategories.jsx
badd +7 components/categories/CategoryItem.jsx
badd +1 components/categories/AddCategory.jsx
badd +59 components/Header.jsx
badd +17 components/SideDrawer.jsx
badd +30 components/transactions/EditTrans.jsx
badd +43 pages/Summary.jsx
badd +2 components/summary/DailySummary.jsx
badd +1 components/summary/helper.js
badd +41 components/summary/WeeklySummary.jsx
badd +1 components/summary/MonthlySummary.jsx
badd +9 components/summary/SumTransItem.jsx
badd +13 components/transactions/helper.js
badd +82 components/summaryGraphs/SummaryBarGraph.jsx
badd +8 components/summaryGraphs/BarGraphMod.jsx
badd +13 components/categories/EditCategory.jsx
badd +26 components/summaryGraphs/SummaryGraphController.jsx
argglobal
%argdel
edit components/summaryGraphs/SummaryBarGraph.jsx
argglobal
balt pages/Summary.jsx
let s:l = 68 - ((29 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 68
normal! 014|
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
