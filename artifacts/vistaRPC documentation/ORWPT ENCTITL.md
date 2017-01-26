---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT ENCTITL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT ENCTITL{:/}
 tag | {::nomarkdown}ENCTITL{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns external values to display for encounter in format:     LOCNAME^LOCABBR^ROOMBED^PROVNAME{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ENCTITL^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Return external values for encounter
 Input parameters | {::nomarkdown}DFN, LOC, PROV{:/}
 First comment | {::nomarkdown}<pre> LOCNAME^LOCABBR^ROOMBED^PROVNAME</pre>{:/}
 Code | {::nomarkdown}  S $P(REC,U,1)=$P($G(^SC(+LOC,0)),U,1,2)<br> S $P(REC,U,3)=$P($G(^DPT(DFN,.101)),U)<br> S $P(REC,U,4)=$P($G(^VA(200,+PROV,0)),U){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}