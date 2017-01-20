---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP3 EXPAND COLUMNS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP3 EXPAND COLUMNS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWRP3](http://code.osehra.org/dox/Routine_ORWRP3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC loads and expands nested reports defined in the OE/RR Reportsfile (#101.24) for use on the Reports Tab in CPRS.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LIST^[ORWRP3](http://code.osehra.org/dox/Routine_ORWRP3_source.html)
 Method comment | Get list for Reports & Labs Tab Treeview
 Input parameters | {::nomarkdown}TAB{:/}
 Code | {::nomarkdown}  N ROOT<br> S ROOT=$NA(LST)<br> K @ROOT<br> D TRY1(.ROOT,$G(TAB)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}