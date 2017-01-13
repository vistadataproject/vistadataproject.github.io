---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP3 EXPAND COLUMNS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP3 EXPAND COLUMNS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWRP3](http://code.osehra.org/dox/Routine_ORWRP3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC loads and expands nested reports defined in the OE/RR Reportsfile (#101.24) for use on the Reports Tab in CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get list for Reports & Labs Tab Treeview
 Input Parameters | {::nomarkdown}TAB{:/}
 Lines | ```
 N ROOT
 S ROOT=$NA(LST)
 K @ROOT
 D TRY1(.ROOT,$G(TAB))```




 Generated on January 13th 2017, 6:55:29 am