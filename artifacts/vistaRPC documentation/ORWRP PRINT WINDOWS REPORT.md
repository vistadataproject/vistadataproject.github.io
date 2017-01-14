---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP PRINT WINDOWS REPORT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT WINDOWS REPORT{:/}
 tag | {::nomarkdown}PRINTW{:/}
 routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Prints CPRS GUI information to windows printer.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PRINTW^[ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 Method comment | Windows device print
 Input parameters | {::nomarkdown}ORDFN<br/>ORRPTID<br/>ORHSTYPE<br/>ORDTRNG<br/>OREXAMID<br/>ORCOMP<br/>ORALPHA<br/>OROMEGA{:/}
 Code | ```  N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO,ORHANDLE,ORWINDEV
 N IOM,IOSL,IOST,IOF,IOT,IOS,ORHSTAG,POP
 S ORHSTAG=$P($G(ORRPTID),"~",2),ORRPTID=$P($G(ORRPTID),"~"),ORRPTID=$P($P(ORRPTID,";"),":")
 S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORTEXT=$NA(^TMP(ORSUB,$J,1)),ORHANDLE="ORWRP"
 I '$$CHK() S @ORTEXT@(0)=ORY G PRINTWQ
 S ORHFS=$$HFS^ORWRP(),ORWINDEV=1 ;Flag for printing to windows device
 D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")
 I POP D  Q
 . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")
 D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")
 N $ETRAP,$ESTACK
 S $ETRAP="D ERR^ORWRP Q"
 U IO
 D DEQUE
 D HFSCLOSE^ORWRP(ORHANDLE,ORHFS)```




 Generated on January 14th 2017, 7:26:35 am