---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP WINPRINT LAB REPORTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP WINPRINT LAB REPORTS{:/}
 tag | {::nomarkdown}PRINTW{:/}
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Prints text from CPRS GUI to a windows printer.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PRINTW^[ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 Method comment | Windows device print
 Input parameters | {::nomarkdown}ORDFN<br>RPTID<br>ORDAYSBK<br>ORTESTS<br>ORALPHA<br>OROMEGA{:/}
 Code | {::nomarkdown}  N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO<br> N IOM,IOSL,IOST,IOF,IOT,IOS<br> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS"<br> S ORTEXT=$NA(^TMP(ORSUB,$J,1))<br> I '$$CHK() S @ORTEXT@(0)=ORY G PRINTWQ<br> S ORHFS=$$HFS^ORWRP()<br> D HFSOPEN^ORWRP("ORWRP",ORHFS,"W")<br> I POP D  Q<br> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")<br> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br> N $ETRAP,$ESTACK<br> S $ETRAP="D ERR^ORWRP Q"<br> U IO<br> D DEQUE<br> D HFSCLOSE^ORWRP("ORWRP",ORHFS){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}