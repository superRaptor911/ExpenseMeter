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
badd +29 App.jsx
badd +61 store.js
badd +57 pages/Login.jsx
badd +4 Routes.js
badd +19 pages/Home.jsx
badd +19 api/api.js
badd +21 pages/Dashboard.jsx
badd +25 pages/Transactions.jsx
badd +66 components/transactions/TransItem.jsx
badd +16 components/transactions/TransList.jsx
badd +63 components/transactions/AddTrans.jsx
badd +8 index.css
badd +19 components/transactions/Today.jsx
badd +17 components/transactions/ThisWeek.jsx
badd +17 components/transactions/ThisMonth.jsx
badd +8 pages/Categories.jsx
badd +21 components/categories/ListCategories.jsx
badd +79 components/categories/CategoryItem.jsx
badd +36 components/categories/AddCategory.jsx
badd +44 components/Header.jsx
badd +37 components/SideDrawer.jsx
badd +62 components/transactions/EditTrans.jsx
badd +63 pages/Summary.jsx
badd +1 components/summary/DailySummary.jsx
badd +30 components/summary/helper.js
badd +41 components/summary/WeeklySummary.jsx
badd +1 components/summary/MonthlySummary.jsx
badd +9 components/summary/SumTransItem.jsx
badd +14 components/transactions/helper.js
badd +58 components/summaryGraphs/SummaryBarGraph.jsx
badd +21 components/summaryGraphs/BarGraphMod.jsx
badd +36 components/categories/EditCategory.jsx
badd +37 components/summaryGraphs/SummaryGraphController.jsx
badd +48 components/summaryGraphs/CategoryGraph.jsx
badd +32 pages/Register.jsx
badd +11 components/Loading.jsx
badd +10 storeHelper.js
badd +41 components/summaryGraphs/CategoryGraphMod.jsx
badd +17 components/summary/YesterdaysSummary.jsx
argglobal
%argdel
edit pages/Summary.jsx
argglobal
balt components/summary/YesterdaysSummary.jsx
let s:l = 62 - ((21 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 62
normal! 065|
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
