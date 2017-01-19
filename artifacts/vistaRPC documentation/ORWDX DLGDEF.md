---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX DLGDEF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX DLGDEF{:/}
 tag | {::nomarkdown}DLGDEF{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return format information for an order dialog in the format:   LST(n): PrmtID^PrmtIEN^FmtSeq^Fmt^Omit^Lead^Trail^NwLn^Wrap^Chld^IsChld{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DLGDEF^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Format mapping for a dlg
 Input parameters | {::nomarkdown}DLG{:/}
 Code | {::nomarkdown}  D DLGDEF^ORWDX1(.LST,.DLG){:/}


### CPRS

[Orders/rODBase.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}