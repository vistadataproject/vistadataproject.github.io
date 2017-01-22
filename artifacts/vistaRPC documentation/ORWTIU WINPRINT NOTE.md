---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU WINPRINT NOTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU WINPRINT NOTE{:/}
 tag | {::nomarkdown}PRINTW{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a formatted global of a TIU document for output to a Windows printdevice.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Note IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of document in file 8925.{:/} | 
| {::nomarkdown}Chart Copy?{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} |  | {::nomarkdown}If true, print chart copy, else print work copy.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PRINTW^[ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 Method comment | TIU print to windows printer
 Input parameters | {::nomarkdown}ORDA, ORFLG{:/}
 Code | {::nomarkdown}  N ZTQUEUED,ORHFS,ORSUB,ORIO,ORSTATUS,ROOT,ORERR,ORWIN,ORHANDLE<br> N IOM,IOSL,IOST,IOF,IOT,IOS<br> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORWIN=1,ORHANDLE="ORWTIU"<br> S ORY=$NA(^TMP(ORSUB,$J,1))<br> S ORHFS=$$HFS^ORWRP()<br> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br> I POP D  Q<br> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file for TIU print")<br> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br> N $ETRAP,$ESTACK<br> S $ETRAP="D ERR^ORWRP Q"<br> U IO<br> D RPC^TIUPD(.ORERR,ORDA,ORIO,ORFLG,ORWIN)<br> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}