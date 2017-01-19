---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT WINDOWS LAB REMOTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT WINDOWS LAB REMOTE{:/}
 tag | {::nomarkdown}PRINTWR{:/}
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} Prints remote CPRS GUI information to windows printer.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PRINTWR^[ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 Method comment | Windows Remote device print
 Input parameters | {::nomarkdown}ORDFN<br>RPTID<br>ORHANDS{:/}
 Code | {::nomarkdown}  N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO,ORHANDLE<br> N IOM,IOSL,IOST,IOF,IOT,IOS<br> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORTEXT=$NA(^TMP(ORSUB,$J,1)),ORHANDLE="ORWRP"<br> S ORHFS=$$HFS^ORWRP()<br> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br> I POP D  Q<br> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")<br> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br> N $ETRAP,$ESTACK<br> S $ETRAP="D ERR^ORWRP Q"<br> U IO<br> D DEQUE<br> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS){:/}


### CPRS

[rLabs.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rLabs.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}