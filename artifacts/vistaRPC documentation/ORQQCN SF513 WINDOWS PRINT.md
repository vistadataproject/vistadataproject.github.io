---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN SF513 WINDOWS PRINT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN SF513 WINDOWS PRINT{:/}
 tag | {::nomarkdown}WPRT513{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Print consults Standard Form 513 to Windows device from GUI application.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | WPRT513^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Print SF513 to Windows device from GUI
 Input parameters | {::nomarkdown}GMRCO, GMRCCHT{:/}
 Code | {::nomarkdown}  N ZTQUEUED,ORHFS,ORSUB,ORIO,ORSTATUS,ROOT,ORHANDLE<br> N IOM,IOSL,IOST,IOF,IOT,IOS<br> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORHANDLE="ORQQCN2"<br> S ORY=$NA(^TMP(ORSUB,$J,1))<br> S ORHFS=$$HFS^ORWRP()<br> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br> I POP D  Q<br> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file for SF513 print")<br> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br> N $ETRAP,$ESTACK<br> S $ETRAP="D ERR^ORWRP Q"<br> U IO<br> D PRNT^GMRCP5A(GMRCO,0,0,GMRCCHT,0)<br> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}