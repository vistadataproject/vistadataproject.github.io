---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL QV4DG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL QV4DG{:/}
 tag | {::nomarkdown}QV4DG{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | QV4DG^[ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 Method comment | return the quick order list, given a display group name
 Input parameters | {::nomarkdown}DGRP{:/}
 Code | {::nomarkdown}  N NM<br> S VAL="0^0"<br> I 'DGRP S DGRP=+$O(^ORD(100.98,"B",DGRP,0))<br> S NM=$$GET^XPAR("ALL","ORWDQ QUICK VIEW",DGRP,"I")<br> Q:'$L(NM)<br> D QV4NM(.VAL,NM){:/}


### CPRS

[Orders/rODLab.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas")
[Orders/rODMeds.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}