---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP WINPRINT LAB REPORTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP WINPRINT LAB REPORTS{:/}
 tag | {::nomarkdown}PRINTW{:/}
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Prints text from CPRS GUI to a windows printer.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Windows device print
 Input Parameters | {::nomarkdown}ORDFN<br/>RPTID<br/>ORDAYSBK<br/>ORTESTS<br/>ORALPHA<br/>OROMEGA{:/}
 Lines | ```
 N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO
 N IOM,IOSL,IOST,IOF,IOT,IOS
 S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS"
 S ORTEXT=$NA(^TMP(ORSUB,$J,1))
 I '$$CHK() S @ORTEXT@(0)=ORY G PRINTWQ
 S ORHFS=$$HFS^ORWRP()
 D HFSOPEN^ORWRP("ORWRP",ORHFS,"W")
 I POP D  Q
 . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")
 D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")
 N $ETRAP,$ESTACK
 S $ETRAP="D ERR^ORWRP Q"
 U IO
 D DEQUE
 D HFSCLOSE^ORWRP("ORWRP",ORHFS)```




 Generated on January 13th 2017, 6:55:29 am