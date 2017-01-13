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
 Lines | ```
 N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO,ORHANDLE
 N IOM,IOSL,IOST,IOF,IOT,IOS
 S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORTEXT=$NA(^TMP(ORSUB,$J,1)),ORHANDLE="ORWRP"
 S ORHFS=$$HFS^ORWRP()
 D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")
 I POP D  Q
 . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")
 D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")
 N $ETRAP,$ESTACK
 S $ETRAP="D ERR^ORWRP Q"
 U IO
 D DEQUE
 D HFSCLOSE^ORWRP(ORHANDLE,ORHFS)```




 Generated on January 13th 2017, 6:55:29 am