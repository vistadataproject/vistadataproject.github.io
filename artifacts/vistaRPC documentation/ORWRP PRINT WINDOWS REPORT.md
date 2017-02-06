---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT WINDOWS REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT WINDOWS REPORT{:/}
 tag | {::nomarkdown}PRINTW{:/}
 routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Prints CPRS GUI information to windows printer.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PRINTW^[ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 Method comment | Windows device print
 Input parameters | {::nomarkdown}ORDFN, ORRPTID, ORHSTYPE, ORDTRNG, OREXAMID, ORCOMP, ORALPHA, OROMEGA{:/}
 Code | {::nomarkdown}  N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO,ORHANDLE,ORWINDEV<br> N IOM,IOSL,IOST,IOF,IOT,IOS,ORHSTAG,POP<br> S ORHSTAG=$P($G(ORRPTID),"~",2),ORRPTID=$P($G(ORRPTID),"~"),ORRPTID=$P($P(ORRPTID,";"),":")<br> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORTEXT=$NA(^TMP(ORSUB,$J,1)),ORHANDLE="ORWRP"<br> I '$$CHK() S @ORTEXT@(0)=ORY G PRINTWQ<br> S ORHFS=$$HFS^ORWRP(),ORWINDEV=1 ;Flag for printing to windows device<br> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br> I POP D  Q<br> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")<br> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br> N $ETRAP,$ESTACK<br> S $ETRAP="D ERR^ORWRP Q"<br> U IO<br> D DEQUE<br> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}