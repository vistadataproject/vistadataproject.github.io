---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT WINDOWS LAB REMOTE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT WINDOWS LAB REMOTE{:/}
 tag | {::nomarkdown}PRINTWR{:/}
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} Prints remote CPRS GUI information to windows printer.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Windows Remote device print
 Input Parameters | {::nomarkdown}ORDFN<br/>RPTID<br/>ORHANDS{:/}
 Lines | ```{::nomarkdown} N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO,ORHANDLE<br/> N IOM,IOSL,IOST,IOF,IOT,IOS<br/> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORTEXT=$NA(^TMP(ORSUB,$J,1)),ORHANDLE="ORWRP"<br/> S ORHFS=$$HFS^ORWRP()<br/> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br/> I POP D  Q<br/> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")<br/> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br/> N $ETRAP,$ESTACK<br/> S $ETRAP="D ERR^ORWRP Q"<br/> U IO<br/> D DEQUE<br/> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS)```{:/}




 Generated on January 13th 2017, 7:11:27 am